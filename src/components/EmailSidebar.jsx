import React from "react";
import { motion } from "framer-motion";

const EmailSidebar = () => {
    return (
        <div className="fixed bottom-0 right-10 md:right-12 hidden md:flex flex-col items-center gap-6 z-50">
            <motion.a
                href="mailto:nileshsingh7651@gmail.com"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-slate-400 hover:text-teal-300 text-sm tracking-widest writing-vertical-rl transition-transform hover:-translate-y-1"
                style={{ writingMode: 'vertical-rl' }}
            >
                nileshsingh7651@gmail.com
            </motion.a>
            <div className="w-[1px] h-24 bg-slate-400 mt-4" />
        </div>
    );
};

export default EmailSidebar;
