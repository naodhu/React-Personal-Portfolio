import React, { useState, useEffect } from "react";
import {
  FaUserAlt,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {isMounted && (
            <div className="sm:text-right pb-8 pl-4 animate-fadeIn">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                About
              </p>
            </div>
          )}
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {isMounted && (
            <div className="sm:text-right text-4xl font-bold animate-fadeIn delay-100">
              <p>
                Hi there! My name is Naod Hunde{" "}
                <FaUserAlt className="inline text-pink-600" />
              </p>
            </div>
          )}
          {isMounted && (
            <div className="animate-fadeIn delay-200">
              <p>
                I am a full stack web developer with a passion for creating
                beautiful and functional websites. I have a strong background in
                web development and design. I am a self-motivated, hardworking,
                and dedicated individual who is always looking to learn new
                skills and improve my knowledge. I am a fast learner and I am
                always looking for new opportunities to grow and expand my
                knowledge.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/naod-hunde/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 cursor-pointer" />
                </a>
                <a
                  href="https://github.com/naodhu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </a>
                <a href="mailto:Naodhunde@gmail.com">
                  <FaEnvelope className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </a>
                <a href="./assets/grayre.pdf" download="Myresume">
                  <FaDownload className="text-2xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
