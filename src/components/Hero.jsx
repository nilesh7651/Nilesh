import React from "react";
import { motion } from "framer-motion";
import ParticlePortrait from "./ParticlePortrait";

const Hero = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-0 pt-20">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-teal-300 font-mono mb-4 text-lg"
                    >
                        Hi there, I'm
                    </motion.p>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight"
                    >
                        Nilesh Kumar.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
                    >
                        I’m a computer engineering student and AI enthusiast passionate about building intelligent, user-focused web applications.
                        <br className="hidden md:block" />
                        I love working with machine learning, web technologies, and real-world problem solving, turning ideas into practical digital solutions.
                    </motion.p>
                    <motion.a
                        href="mailto:nileshsingh7651@gmail.com"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="inline-flex items-center gap-2 px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors font-mono text-lg"
                    >
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Let's connect
                    </motion.a>
                </div>

                {/* Particle Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <ParticlePortrait />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
