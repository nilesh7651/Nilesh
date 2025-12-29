import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scroll ? "bg-[#0a192f]/90 shadow-lg backdrop-blur-sm" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="text-accent font-bold text-xl cursor-pointer">
                    Nilesh Kumar <span className="text-teal-300">|</span> Portfolio
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    {["About", "Experience", "Projects", "Contact"].map((item, index) => (
                        <Link
                            key={index}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-teal-300 transition-colors"
                        >
                            <span className="text-teal-300 mr-1">0{index + 1}.</span> {item}
                        </Link>
                    ))}
                    <button className="px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors">
                        Resume
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavBar;
