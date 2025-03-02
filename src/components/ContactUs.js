import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    text: "aakanksharanjan2@gmail.com",
    link: "mailto:aakanksharanjan2@gmail.com",
  },
  //   { icon: <FaPhone />, text: "+123 456 7890" },
  {
    icon: <FaMapMarkerAlt />,
    text: "Bangalore, India",
    link: "https://www.google.com/maps?q=Bangalore",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/aakanksha-ranjan-4121021b6/",
  },
  { icon: <FaGithub />, text: "github.com/aakanksha" },
];

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="text-center py-16 relative overflow-hidden bg-[#0d0d0d] border border-cyan-400 shadow-2xl rounded-xl mx-6 md:mx-20 hover:shadow-cyan-500/50 transition-all duration-500"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-90 z-[-1]" />
      <div className="absolute inset-0 flex items-center justify-center opacity-40 animate-pulse">
        <div className="w-60 h-60 bg-cyan-400 rounded-full blur-3xl mix-blend-color-dodge animate-spin-slow"></div>
      </div>

      <h2 className="text-4xl font-bold text-cyan-400 animate-bounce uppercase tracking-widest mb-6">
        🚀 Get in Touch
      </h2>
      <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
        Let’s build something amazing! Reach out for projects, collaborations,
        or just to say hi! ✨
      </p>

      {/* Contact Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-6 bg-[#1a1a2e] text-cyan-300 rounded-lg border border-cyan-400 shadow-lg hover:shadow-cyan-500/50 transition transform duration-300 cursor-pointer"
          >
            {/* Wrap the content in <a> for email and location */}
            {detail.link ? (
              <a
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 w-full"
              >
                <span className="text-3xl">{detail.icon}</span>
                <span className="text-lg font-semibold break-words">
                  {detail.text}
                </span>
              </a>
            ) : (
              <div className="flex items-center space-x-4 w-full">
                <span className="text-3xl">{detail.icon}</span>
                <span className="text-lg font-semibold break-words">
                  {detail.text}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
