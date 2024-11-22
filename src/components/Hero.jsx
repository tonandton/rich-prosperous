import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import logoimg from "../../public/promo-1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-black flex items-center pt-28 md:h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 top-20"
        >
          <img
            src={logoimg}
            alt="logo"
            className="w-full object-cover rounded-xl"
          />
        </motion.div>

        {/* right side */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Rich Prosperous
          </h1>
          <p className="text-lg mb-12 md:pr-8">
            รับเหมาก่อสร้างโกดัง โรงงานด้วยระบบ Pre-Engineered Building(PEB)
            ดำเนินการครบวงจร
            มีการวางแผนการควบคุมงานตั้งแต่ต้นจนจบงานด้วยวิศวกรที่มีประสบการณ์งานสร้างมากกว่า
            1,000 โครงการ พร้อมรับประกันโครงสร้าง 10 ปี
          </p>
          <button className="bg-blue-700 hover:bg-blue-700/90 text-white py-3.5 px-8  font-medium rounded-md">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
