import React, { useState } from "react";
import { IoArrowForwardCircle, IoPlay } from "react-icons/io5";
import imgThumnal from "../../public/promo-3.png";
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
                  src={imgThumnal}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-contain"
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
              บริษัท ริช พอรสเพอร์รัส คอนสตรัคชั่น จำกัด
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              ดำเนินธุรกิจรับเหมาก่อสร้างโกดัง โรงงาน คลังสินค้า อาคารสำนักงาน
              ทั้งขนาดเล็กไปจนถึงขนาดใหญ่ โดยใช้ระบบ Pre-Engineered Building
              มีระบบใบเสนอราคา
              พร้อมกับทีมวิศวกรในการตรวจงานและควบคุมงานให้เป็นไปตามหลักวิศวกรรม
              และให้ได้รับมาตราฐานตามหลักสากล
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
                width="100%"
                height="630px"
                src="https://www.youtube.com/embed/7mgQ6Bh_7Ew?si=6C7R79eljgWma_oJ"
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
