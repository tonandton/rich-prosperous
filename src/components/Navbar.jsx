import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleToggle = () => {
    setIsopen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsopen(false);
  };
  const handleScroll = () => {
    const sections = [
      "home",
      "services",
      "about",
      "howtowork",
      "pricing",
      "testimonial",
    ];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          className={`text-black ${activeSection === "home" ? "isActive" : ""}`}
        >
          หน้าแรก
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          className={`text-black ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          บริการ
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          className={`text-black ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          เกี่ยวกับ
        </motion.a>
      </li>
      {/* <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#howtowork"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("howtowork");
          }}
          className={`text-black ${
            activeSection === "howtowork" ? "isActive" : ""
          }`}
        >
          How To Work
        </motion.a>
      </li> */}
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
          className={`text-black ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          ข้อกำหนด
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          href="#testimonial"
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
          className={`text-black ${
            activeSection === "testimonial" ? "isActive" : ""
          }`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-heroBg text-black py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/">
            {/* <img src="/rich-icon.svg" alt="logo" /> */}
            Rich | Prosperous
          </a>
        </div>

        {/* navitems */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        {/* button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-blue-700 hover:bg-blue-700/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* hamburger menu */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-black focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <HiOutlineMenuAlt3 className="size-6" />
          </button>
        </div>
      </div>

      {/* mobile nav items */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navLinks.props.children}
            <li className="py-2 ">
              <a
                href="#contact"
                className="text-white bg-blue-800 hover:bg-blue-800/90 px-4 py-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
