import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-full bg-[#1e1e1e] text-gray-300">

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-8">
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Piyush Sangale</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-400 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer | final year student at IIT Mandi
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="https://github.com/piyushsangale13" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-white transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-sangale-561941224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-400 transition duration-300" />
          </a>
          <a href="mailto:piyushsangale13@gmail.com">
            <FaEnvelope className="text-3xl hover:text-red-400 transition duration-300" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
