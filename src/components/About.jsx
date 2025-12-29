import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const About = () => {
    const skills = [
        "Python",
        "Machine Learning",
        "JavaScript (ES6+)",
        "React",
        "Node.js",
        "Tailwind CSS",
        "HTML/CSS",
        "Git"
    ];

    return (
        <section id="about" className="py-24 max-w-4xl mx-auto">
            <SectionHeader number="01" title="About Me" />

            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-3/5 text-slate-400 leading-relaxed text-lg">
                    <p className="mb-4">
                        Hello! I am Nilesh Kumar, a student specializing in Artificial Intelligence and Machine Learning. I am passionate about web development and building real-world projects.
                    </p>
                    <p className="mb-4">
                        I enjoy working with Python, JavaScript, and building intelligent web applications. My focus is on learning new technologies and creating efficient solutions.
                    </p>
                    <p className="mb-8">
                        I am currently looking for opportunities to apply my skills and grow as a software engineer.
                    </p>
                    <p className="mb-4 font-mono text-teal-300">
                        Here are a few technologies I've been working with recently:
                    </p>

                    <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                        {skills.map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-teal-300">▹</span> {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:w-2/5 flex justify-center md:justify-start group">
                    <div className="relative w-64 h-64 md:w-72 md:h-72">
                        <div className="absolute inset-0 border-2 border-teal-300 rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-teal-300/20 rounded z-10 group-hover:bg-transparent transition-colors duration-300" />
                        {/* Profile Image */}
                        <img
                            src="/images/profile.jpg"
                            alt="Profile"
                            className="rounded w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 relative z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
