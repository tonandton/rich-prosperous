import React from "react";
import footerLogo from "../../public/rich-icon.svg";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-12 bg-blue-100 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8">
        <div className="space-y-6 mr-14">
          <div className="flex items-center space-x-2">
            <img
              src={footerLogo}
              alt=""
              className="w-10 h-auto rounded-md bg-blue-700"
            />
            <span>RICH | PROPEROUS</span>
          </div>
          <p className="text-para">
            ที่อยู่ สถานที่ตั้งบริษัท 999/99 ซอย99 รายละเอียด
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-200 text-blue-700 rounded-full size-10 flex items-center justify-center hover:bg-blue-700 hover:text-white"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-blue-700 rounded-full size-10 flex items-center justify-center hover:bg-blue-700 hover:text-white"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-blue-700 rounded-full size-10 flex items-center justify-center hover:bg-blue-700 hover:text-white"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-blue-700 rounded-full size-10 flex items-center justify-center hover:bg-blue-700 hover:text-white"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-700">
                บริการ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700">
                เกี่ยวกับ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                ติดต่อ
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-700">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700">
                Support Center
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" />
              <p className="text-gray-700">999 ถนนที่อยู่ 999 ซอย 99</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-700" />
              <p className="text-gray-700">999-999-9999</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-700" />
              <p className="text-gray-700">info@company.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
