import { motion } from "framer-motion";
import { FaPowerOff, FaVolumeUp, FaAdjust } from "react-icons/fa";

const projects = [
  "UI Concept",
  "UX Research",
  "Dark Mode UI",
  "3D Design",
  "AII Dashboard",
  "New Mobile UI",
];

const PortfolioTV = () => {
  return (
    <section id="work" className="flex justify-center items-center py-30">
      {/* TV Unit Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[95%] max-w-7xl bg-gradient-to-br from-[#0a0f1c] to-[#121829] border-1 border-gradient-to-r from-cyan-900 to-purple-900 rounded-[50px] shadow-[0_0_15px_#00ffff] p-10 pb-32 overflow-hidden"
      >
        {/* TV Power & Volume Buttons */}
        <div className="absolute top-10 right-6 flex flex-col gap-6 text-cyan-300">
          <FaPowerOff className="text-3xl hover:text-red-500 cursor-pointer transition" />
          <FaVolumeUp className="text-3xl hover:text-green-400 cursor-pointer transition" />
          <FaAdjust className="text-3xl hover:text-yellow-400 cursor-pointer transition" />
        </div>

        {/* Animated Title on TV */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-500 text-center"
        >
          Welcome to My Portfolio 📺
        </motion.h2>

        <p className="text-gray-300 mt-6 max-w-4xl mx-auto text-center text-lg">
          Explore my futuristic UI/UX designs, conceptual artworks, and creative
          projects.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-3 gap-8 mt-14 px-10">
          {projects.map((title, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-black/80 border border-cyan-400 shadow-lg rounded-xl flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-500"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
                alt={title}
                className="w-60 h-40 object-cover rounded-lg shadow-md border border-gray-700"
                whileHover={{ rotate: 5 }}
              />
              <h3 className="mt-4 text-xl font-semibold text-white text-center">
                {title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* TV Stand/Base */}
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-64 h-20 bg-gray-900 rounded-b-lg shadow-lg"></div>
      </motion.div>
    </section>
  );
};

export default PortfolioTV;
