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
                        className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight"
                    >
                        Nilesh Kumar.
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="text-4xl md:text-6xl font-bold text-slate-400 mb-8"
                    >
                        I build web & AI solutions.
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-slate-400 text-lg max-w-xl mb-12 leading-relaxed"
                    >
                        I'm a student focused on <span className="text-teal-300">Artificial Intelligence</span> and <span className="text-teal-300">Web Development</span>. I enjoy building software that solves real-world problems.
                    </motion.p>
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors font-mono"
                    >
                        View My Work
                    </motion.button>
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
