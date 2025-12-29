import React from "react";
import NavBar from "./components/NavBar";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-400 selection:bg-teal-300 selection:text-[#0a192f]">
      <NavBar />
      <div className="w-full h-full">
        <SocialSidebar />
        <EmailSidebar />

        <main className="max-w-[1600px] mx-auto px-6 md:px-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <footer className="py-6 text-center text-xs font-mono text-slate-500 hover:text-teal-300 transition-colors cursor-pointer">
          <a href="https://github.com/nileshkumar" target="_blank" rel="noopener noreferrer">
            Designed & Built by Nilesh Kumar
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
