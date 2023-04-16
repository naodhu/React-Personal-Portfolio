import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const skills = [
    { Icon: FaHtml5, title: "HTML" },
    { Icon: FaCss3Alt, title: "CSS" },
    { Icon: FaJsSquare, title: "JavaScript" },
    { Icon: FaReact, title: "React" },
    { Icon: FaNodeJs, title: "Node.js" },
    { Icon: FaGithub, title: "GitHub" },
    { Icon: FaDatabase, title: "MongoDB" },
    { Icon: SiTailwindcss, title: "Tailwind" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {isMounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
            <p className="py-4">
              I have experience with the following technologies:
            </p>
          </motion.div>
        )}

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          variants={containerVariants}
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              variants={itemVariants}
            >
              <skill.Icon className="w-20 h-20 mx-auto text-5xl" />
              <p className="my-4">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
