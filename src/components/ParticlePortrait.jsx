import React, { useRef, useEffect, useState } from "react";

const ParticlePortrait = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, active: false });
    const linesRef = useRef([]);
    const imageLoadedRef = useRef(false);
    const startTimeRef = useRef(null);
    const [size, setSize] = useState(500);

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setSize(Math.min(300, width - 40));
            } else if (width <= 768) {
                setSize(Math.min(400, width - 60));
            } else {
                setSize(500);
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const canvasWidth = size;
        const canvasHeight = size;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        let animationId;

        const img = new Image();
        img.crossOrigin = "Anonymous";
        // Using the user's uploaded profile image
        img.src = "/images/profile.jpg";

        img.onload = () => {
            const offscreen = document.createElement("canvas");
            const offCtx = offscreen.getContext("2d");
            offscreen.width = canvasWidth;
            offscreen.height = canvasHeight;

            const scale = 0.9; // Slightly larger scale
            const imgAspect = img.width / img.height;

            let drawHeight = canvasHeight * scale;
            let drawWidth = drawHeight * imgAspect;

            if (drawWidth > canvasWidth * scale) {
                drawWidth = canvasWidth * scale;
                drawHeight = drawWidth / imgAspect;
            }

            const offsetX = (canvasWidth - drawWidth) / 2;
            const offsetY = (canvasHeight - drawHeight) / 2;

            offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            const imageData = offCtx.getImageData(0, 0, canvasWidth, canvasHeight);
            const pixels = imageData.data;

            const lines = [];
            const rowGap = size <= 300 ? 4 : 5; // Tighter gap for better resolution

            for (let y = 0; y < canvasHeight; y += rowGap) {
                let x = 0;
                while (x < canvasWidth) {
                    const i = (y * canvasWidth + x) * 4;
                    // Check alpha and brightness
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const a = pixels[i + 3];

                    // Use a combination of alpha and brightness to determine if we draw
                    const brightness = (r + g + b) / (3 * 255);

                    if (a > 50 && brightness > 0.1) { // Thresholds
                        const lineLength = Math.floor(
                            3 + brightness * (size <= 300 ? 8 : 12)
                        );

                        // Initial scatter position
                        const scatterX = (Math.random() - 0.5) * 50;
                        const scatterY = (Math.random() - 0.5) * 50;

                        lines.push({
                            x: x + scatterX,
                            y: y + scatterY,
                            targetX: x,
                            targetY: y,
                            vx: 0,
                            vy: 0,
                            length: lineLength,
                            baseAlpha: 0.2 + brightness * 0.8, // Alpha based on brightness
                            currentAlpha: 0,
                            delay: Math.random() * 0.5, // Random entry delay
                        });

                        x += lineLength + 2;
                    } else {
                        x += 3;
                    }
                }
            }

            linesRef.current = lines;
            imageLoadedRef.current = true;
            startTimeRef.current = performance.now();
        };

        const draw = () => {
            animationId = requestAnimationFrame(draw);

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            if (!imageLoadedRef.current) return;

            const lines = linesRef.current;
            const mouse = mouseRef.current;
            const elapsed = (performance.now() - startTimeRef.current) / 1000;

            lines.forEach((p) => {
                const particleTime = elapsed - p.delay;

                if (particleTime < 0) return;

                // Fade in
                const fadeProgress = Math.min(particleTime / 1.5, 1);
                const easedFade = 1 - Math.pow(1 - fadeProgress, 2);
                p.currentAlpha = p.baseAlpha * easedFade;

                // Move to target
                const moveProgress = Math.min(particleTime / 2.0, 1);
                const easedMove = 1 - Math.pow(1 - moveProgress, 3);

                // Mouse Interaction
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 80;

                    if (dist < maxDist && dist > 0) {
                        const force = (1 - dist / maxDist) * 3;
                        p.vx += (dx / dist) * force;
                        p.vy += (dy / dist) * force;
                    }
                }

                // Return to origin logic
                const dx = p.targetX - p.x;
                const dy = p.targetY - p.y;

                const pullStrength = 0.02 + easedMove * 0.05; // Stronger pull as it settles
                p.vx += dx * pullStrength;
                p.vy += dy * pullStrength;

                // Friction
                p.vx *= 0.90;
                p.vy *= 0.90;

                p.x += p.vx;
                p.y += p.vy;

                // Draw Line
                // Using Teal color #2dd4bf => rgb(45, 212, 191)
                // Or Theme Teal #64ffda => rgb(100, 255, 218)
                ctx.strokeStyle = `rgba(100, 255, 218, ${p.currentAlpha})`;
                ctx.lineWidth = size <= 300 ? 1.5 : 2;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + p.length, p.y);
                ctx.stroke();
            });
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;
            mouseRef.current.active = true;
        };

        const handleTouchMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouseRef.current.x = touch.clientX - rect.left;
            mouseRef.current.y = touch.clientY - rect.top;
            mouseRef.current.active = true;
        };

        const handleLeave = () => {
            mouseRef.current.active = false;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleLeave);
        canvas.addEventListener("touchmove", handleTouchMove);
        canvas.addEventListener("touchend", handleLeave);

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleLeave);
            canvas.removeEventListener("touchmove", handleTouchMove);
            canvas.removeEventListener("touchend", handleLeave);
        };
    }, [size]);

    return (
        <canvas
            ref={canvasRef}
            className="block mx-auto"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                cursor: "crosshair",
            }}
        />
    );
};

export default ParticlePortrait;
