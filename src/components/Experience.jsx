import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const jobs = [
        {
            company: "MaryaMurti",
            role: "Software Development Intern",
            period: "Late 2024 - Present",
            tasks: [
                "Spearheaded the full-stack development of 'ManoIndia', a comprehensive venue booking and event management platform.",
                "Designed and implemented a robust admin dashboard for venue owners to manage bookings and analytics in real-time.",
                "Integrated secure payment gateways and map services, directly contributing to the platform's successful launch and user adoption."
            ]
        },
        {
            company: "Androwebstech",
            role: "Frontend Developer Intern",
            period: "Early 2024",
            tasks: [
                "Engineered high-performance user interfaces with React.js and Tailwind CSS, ensuring 100% mobile responsiveness.",
                "Optimized client-side rendering and asset loading, reducing initial page load time by 1.5 seconds.",
                "Implemented rigorous testing protocols with Jest, significantly reducing post-deployment bugs."
            ]
        },
        {
            company: "Parvidhi",
            role: "Tech Club Coordinator",
            period: "2022 - 2024",
            tasks: [
                "Orchestrated 15+ technical workshops and 3 major hackathons, fostering a coding culture among 500+ students.",
                "Mentored junior developers in full-stack basics, guiding several teams to win inter-college competitions.",
                "Developed and maintained the official club website, streamlining event registrations and member management."
            ]
        }
    ];
    return (
        <section id="experience" className="py-24 max-w-3xl mx-auto">
            <SectionHeader number="02" title="Where I've Worked" />

            <div className="flex flex-col md:flex-row gap-4">
                {/* Tabs */}
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-slate-700 min-w-max">
                    {jobs.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 text-left font-mono text-sm transition-all duration-300 hover:bg-[#112240] whitespace-nowrap ${activeTab === index
                                ? "text-teal-300 border-b-2 md:border-b-0 md:border-l-2 border-teal-300 bg-[#112240]/50"
                                : "text-slate-400 border-b-2 md:border-b-0 md:border-l-2 border-transparent"
                                }`}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="py-4 md:px-4 w-full min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3 className="text-xl text-slate-100 font-medium">
                                {jobs[activeTab].role} <span className="text-teal-300">@ {jobs[activeTab].company}</span>
                            </h3>
                            <p className="text-slate-500 font-mono text-xs mb-6 mt-1">{jobs[activeTab].period}</p>

                            <ul className="space-y-4">
                                {jobs[activeTab].tasks.map((task, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm md:text-md">
                                        <span className="text-teal-300 mt-1">▹</span>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
