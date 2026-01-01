import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

const SocialSidebar = () => {
    const socials = [
        { icon: <FiGithub />, link: "https://github.com/nilesh7651/" },
        { icon: <FiInstagram />, link: "https://instagram.com" },
        { icon: <FiTwitter />, link: "https://twitter.com" },
        { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/nilesh-kumar-b0a931246" },
    ];

    return (
        <div className="fixed bottom-0 left-10 md:left-12 hidden md:flex flex-col items-center gap-6 z-50">
            {socials.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="text-slate-400 hover:text-teal-300 text-xl transition-transform hover:-translate-y-1"
                >
                    {social.icon}
                </motion.a>
            ))}
            <div className="w-[1px] h-24 bg-slate-400 mt-4" />
        </div>
    );
};

export default SocialSidebar;
