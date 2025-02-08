import React from "react";
import { motion } from "framer-motion";
import { GitHub, OpenInNew } from "@mui/icons-material";

const projects = [
  {
    title: "Phonopedia",
    description: "A mobile comparison site with user reviews and deals.",
    tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
    github: "https://github.com/piyushsangale13/phonopedia",
    live: "https://phonopedia-client.vercel.app/",
  },
  {
    title: "YouTube Clone",
    description: "A full-featured YouTube clone with video streaming",
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/piyushsangale13/youtubeClone",
    live: "https://youtube-clone-ten-sooty.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "A VS Code-themed personal portfolio showcasing my projects and skills.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/piyushsangale13/portfolio",
    live: "https://portfolio-xi-pied-64.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-700 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600 text-white text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHub className="text-gray-400 hover:text-white cursor-pointer" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <OpenInNew className="text-gray-400 hover:text-white cursor-pointer" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
