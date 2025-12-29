import React from "react";
import SectionHeader from "./SectionHeader";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
    const featuredProjects = [
        {
            title: "Mano India Website",
            desc: "A full-stack website developed for Mano India, likely involving venue booking or event management features based on recent activity. Built with modern web technologies.",
            tech: ["JavaScript", "React", "Node.js"],
            github: "https://github.com/nilesh7651/Mano-india-website",
            external: "#",
            image: "/images/project_manoindia.png"
        },
        {
            title: "Multimodal Doc Understanding",
            desc: "An AI/ML project focused on understanding documents using multimodal approaches (text and image). Likely involves OCR and NLP techniques.",
            tech: ["Python", "Machine Learning", "NLP"],
            github: "https://github.com/nilesh7651/multimodal-document-understanding",
            external: "#",
            image: "/images/project_spotify.png"
        }
    ];

    const otherProjects = [
        {
            title: "ML Project",
            desc: "A machine learning project repository containing various models and experiments.",
            tech: ["Python", "Jupyter Notebook"],
            github: "https://github.com/nilesh7651/ml_project"
        },
        {
            title: "Image Classification",
            desc: "Computer vision project for classifying images using deep learning models.",
            tech: ["Python", "TensorFlow/PyTorch"],
            github: "https://github.com/nilesh7651/imageclassification"
        },
        {
            title: "Techshop",
            desc: "An e-commerce platform or shop interface built with HTML and presumably other web tech.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/nilesh7651/Techshop"
        },
        {
            title: "DevConnector",
            desc: "Social network for developers. A MERN stack application.",
            tech: ["MongoDB", "Express", "React", "Node"],
            github: "https://github.com/nilesh7651/DevConnector"
        },
        {
            title: "Tailwind Landing Page",
            desc: "A responsive landing page built using Tailwind CSS utility classes.",
            tech: ["HTML", "Tailwind CSS"],
            github: "https://github.com/nilesh7651/tailwind-landing-page"
        }
    ];

    return (
        <section id="projects" className="py-24 max-w-5xl mx-auto">
            <SectionHeader number="03" title="Some Things I've Built" />

            {/* Featured Projects */}
            <div className="flex flex-col gap-24 mb-24">
                {featuredProjects.map((project, i) => (
                    <div key={i} className={`relative grid grid-cols-12 items-center gap-10`}>
                        {/* Image */}
                        <div className={`col-span-12 md:col-span-7 h-[300px] md:h-[360px] relative group rounded shadow-xl overflow-hidden ${i % 2 !== 0 ? "md:order-last" : ""}`}>
                            <div className="absolute inset-0 bg-teal-300/40 mix-blend-multiply group-hover:bg-transparent transition-all duration-300 z-10" />
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                        </div>

                        {/* Content */}
                        <div className={`col-span-12 md:col-span-5 flex flex-col ${i % 2 === 0 ? "md:items-end md:text-right" : "md:items-start md:text-left"} z-20`}>
                            <p className="text-teal-300 font-mono text-sm mb-2">Featured Project</p>
                            <h3 className="text-slate-100 text-2xl font-bold mb-4 hover:text-teal-300 transition-colors cursor-pointer">{project.title}</h3>
                            <div className="bg-[#112240] p-6 rounded shadow-lg text-slate-400 text-sm leading-relaxed mb-4">
                                {project.desc}
                            </div>
                            <ul className={`flex flex-wrap gap-4 text-slate-500 font-mono text-xs mb-6 ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                {project.tech.map((t, k) => <li key={k}>{t}</li>)}
                            </ul>
                            <div className={`flex gap-4 text-slate-300 text-xl ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                {project.github && <a href={project.github} className="hover:text-teal-300"><FiGithub /></a>}
                                {project.external && <a href={project.external} className="hover:text-teal-300"><FiExternalLink /></a>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Other Projects Grid */}
            <h3 className="text-2xl text-slate-100 font-bold text-center mb-10">Other Noteworthy Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherProjects.map((project, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-[#112240] p-8 rounded shadow-lg flex flex-col h-full hover:shadow-2xl transition-shadow cursor-pointer group"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <FiFolder className="text-4xl text-teal-300" />
                            <div className="flex gap-4 text-slate-300 text-xl">
                                {project.github && <a href={project.github} className="hover:text-teal-300"><FiGithub /></a>}
                                {project.external && <a href={project.external} className="hover:text-teal-300"><FiExternalLink /></a>}
                            </div>
                        </div>
                        <h4 className="text-slate-100 text-xl font-bold mb-4 group-hover:text-teal-300 transition-colors">{project.title}</h4>
                        <p className="text-slate-400 text-sm mb-8 flex-grow">
                            {project.desc}
                        </p>
                        <ul className="flex flex-wrap gap-3 text-slate-500 font-mono text-xs mt-auto">
                            {project.tech.map((t, k) => <li key={k}>{t}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
