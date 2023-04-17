import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const navigateToProjects = () => {
    navigate("/work");
  };

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {isMounted && (
          <>
            <p className="text-pink-600 animate-fadeIn">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] animate-fadeIn delay-100">
              Naod Hunde.
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] animate-fadeIn delay-200">
              I'm a Full Stack Developer.
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] animate-fadeIn delay-300">
              I am a full stack web developer with a passion for creating
              beautiful and functional websites. I have a strong background in
              web development and design. I am a self-motivated, hardworking,
              and dedicated individual who is always looking to learn new skills
              and improve my knowledge.
            </p>
            <div className="animate-fadeIn delay-400">
              <button
                onClick={navigateToProjects}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              >
                View Projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
