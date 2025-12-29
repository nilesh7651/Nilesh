import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="py-24 max-w-2xl mx-auto text-center">
            <p className="text-teal-300 font-mono mb-4">04. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
            <p className="text-slate-400 text-lg mb-12">
                I'm currently looking for internships and new opportunities to apply my skills in AI and Web Development. Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
            </p>
            <a
                href="mailto:nileshsingh7651@gmail.com"
                className="inline-block px-8 py-4 border border-teal-300 text-teal-300 rounded hover:bg-teal-300/10 transition-colors font-mono"
            >
                Say Hello
            </a>
        </section>
    );
};

export default Contact;
