import React from "react";
import { motion } from "framer-motion";
import FunFact from "./Funfact";
import PortfolioTV from "./PortfolioTV";
import {
  FaSearch,
  FaPencilRuler,
  FaPalette,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import ContactUs from "./ContactUs";

const ModernWebsite = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans px-8 py-10 relative overflow-hidden">
      {/* Glowing Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#111] opacity-90 z-[-1]" />

      {/* Navigation Section */}
      <nav className="fixed top-0 left-0 w-full bg-opacity-20 backdrop-blur-lg text-white py-4 px-10 flex justify-between items-center shadow-md z-50 border-b border-gray-700">
        <span className="text-transparent text-xl font-extrabold tracking-widest bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          AAKANKSHA SINHA
        </span>

        <ul className="flex space-x-8 text-md uppercase">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-cyan-300 transition"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-cyan-300 transition"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("process")}
              className="hover:text-cyan-300 transition"
            >
              Process
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-cyan-300 transition"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="text-center py-24">
        <h1 className="text-7xl font-extrabold text-white leading-tight">
          <motion.span
            className="text-transparent bg-clip-text"
            animate={{
              backgroundSize: ["200% 200%", "300% 300%", "200% 200%"],
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #06b6d4, #8b5cf6, #2563eb, #38bdf8, #6366f1, #4f46e5, #0ea5e9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            UI/UX Designer & Creative Technologist
          </motion.span>
        </h1>
        <motion.p
          className="mt-4 text-gray-300 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafting immersive digital experiences through research, user-centric
          design, and aesthetic perfection.
        </motion.p>
      </header>

      {/* About Section */}
      <section
        id="about"
        className="text-center py-10 relative overflow-hidden bg-[#111827] border border-cyan-400 shadow-xl rounded-xl mx-6 md:mx-20 hover:shadow-cyan-500/50 transition"
      >
        {/* 3D Grid Background */}
        <div className="absolute inset-0 bg-grid-gray-900/50 opacity-50 z-[-1]" />

        {/* Futuristic Light Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-90 z-[-1]" />
        <div className="absolute inset-0 blur-3xl opacity-20">
          <div className="absolute w-40 h-40 bg-cyan-500 rounded-full top-10 left-10 opacity-50 mix-blend-color-dodge animate-pulse"></div>
          <div className="absolute w-32 h-32 bg-purple-500 rounded-full bottom-10 right-10 opacity-40 mix-blend-color-dodge animate-pulse"></div>
          <div className="absolute w-20 h-20 bg-blue-500 rounded-full top-1/2 left-1/3 opacity-30 mix-blend-color-dodge animate-bounce"></div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-extrabold text-[#8b5cf6] mb-6 uppercase tracking-widest">
          About Me
        </h2>

        {/* Profile & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto"
        >
          {/* Profile Image with Neon Glow */}
          <div className="relative">
            <img
              src="/profile2.jpeg"
              alt="Profile"
              className="w-44 h-44 rounded-full border-4 border-cyan-400 shadow-lg object-cover transform scale-x-[-1]"
            />
            <div className="absolute inset-0 w-full h-full rounded-full border-4 border-cyan-400 animate-glow"></div>
          </div>

          {/* Bio */}
          <div className="text-gray-300 text-lg leading-relaxed max-w-2xl space-y-4">
            <p>
              With over{" "}
              <span className="text-cyan-300 font-semibold">1.5 years</span> of
              experience in{" "}
              <span className="text-purple-400 font-semibold">
                UI/UX Design
              </span>
              , I specialize in transforming ideas into **aesthetic and
              functional** digital experiences.
            </p>

            {/* Skills List with Glowing Dots */}
            <div className="flex flex-wrap justify-center gap-4 text-md mt-4">
              {[
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Interaction Design",
                "Web & Mobile UI",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#1e293b] text-cyan-300 px-4 py-2 rounded-full shadow-lg border border-cyan-400 hover:shadow-cyan-500/50 transition transform hover:scale-105"
                >
                  🔹 {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun Fact Section */}
        <div className="mt-10 px-8 max-w-3xl mx-auto">
          <FunFact />
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioTV />

      {/* Process Section */}
      <section id="process" className="text-center py-16 scroll-mt-20">
        <h2 className="text-4xl font-bold text-cyan-400 animate-pulse">
          My Design Process
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          I follow a structured yet flexible approach to UI/UX design, ensuring
          optimal results with every project.
        </p>
        <div className="mt-6 flex justify-center space-x-8 text-gray-300 text-lg font-semibold">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <FaSearch className="text-cyan-400 text-4xl mb-2" />
            <span>Research</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <FaPencilRuler className="text-purple-400 text-4xl mb-2" />
            <span>Wireframing</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <FaPalette className="text-pink-400 text-4xl mb-2" />
            <span>Prototyping</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <FaCode className="text-green-400 text-4xl mb-2" />
            <span>Development</span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex flex-col items-center"
          >
            <FaRocket className="text-orange-400 text-4xl mb-2" />
            <span>Testing & Launch</span>
          </motion.div>
        </div>
      </section>

      {/* Contact us section */}
      <ContactUs />

      {/* Footer Section */}
      <footer
        id="contact"
        className="text-center py-6 mt-10 border-t border-gray-700"
      >
        <p className="text-gray-400">
          &copy; 2025 Future Vision. Designed with passion by Aakanksha.
        </p>
      </footer>
    </div>
  );
};

export default ModernWebsite;
