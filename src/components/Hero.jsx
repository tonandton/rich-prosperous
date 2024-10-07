import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import logoimg from "../../public/rich-icon.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-black flex items-center pt-28 md:max-h-screen"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Rich Prosperous
          </h1>
          <p className="text-lg mb-12 md:pr-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe rem
            in eos, similique, aspernatur est a aliquid maiores numquam ex autem
            tempora, enim provident. Quos illum quis corporis sit? Eligendi.
          </p>
          <button className="bg-blue-700 hover:bg-blue-700/90 text-white py-3.5 px-8  font-medium rounded-md">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </div>
        {/* right side */}
        <div className="md:w-1/2 top-20">
          <img
            src={logoimg}
            alt="logo"
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
