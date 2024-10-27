import React, { useState } from "react";
import { IoArrowForwardCircle, IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          {/* left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src="https://plus.unsplash.com/premium_photo-1665990294519-7f1b5b8bcfc2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <IoPlay className="size-12 text-white" />
                </button>
              </div>
            ) : null}
          </div>

          {/* right side */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl capitalize  font-secondary font-bold mb-4 md:w-3/5 leading-snug">
              amet consectetur adipisicing
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              rem in eos, similique, aspernatur est a aliquid maiores numquam ex
              autem tempora, enim provident. Quos illum quis corporis sit?
              Eligendi.
            </p>
            <button className="bg-blue-700 hover:bg-blue-700/90 text-white py-3.5 px-8  font-medium rounded-md">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </a>
            </button>
          </div>
        </motion.div>

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FmcLI-3Qe1M?si=lb9M4Icvkyg1lcNr"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
