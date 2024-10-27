import React, { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUserAlt } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      country,
      message,
    };

    if (!data) {
      alert("Please fill all fields");
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  return (
    <div
      className="bg-slate-100 flex items-center justify-center py-28  px-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8 text-black bg-opac-90">
          {/* left side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-secondary mb-4 text-black">
              Male an appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
              <div className="flex items-start gap-4">
                <div className="flex items-center  justify-center rounded-full bg-[fff] p-3">
                  <FaUserAlt className="text-blue-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Export Theropist</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center  justify-center rounded-full bg-[fff] p-3">
                  <FaEnvelope className="text-blue-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">High Quality Care</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center  justify-center rounded-full bg-[fff] p-3">
                  <FaPhoneAlt className="text-blue-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium"></h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center  justify-center rounded-full bg-[fff] p-3">
                  <FaGlobe className="text-blue-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">Trusted Clinic</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <h2>ขอบคุณสำหรับข้อมูล</h2>
                <p>ขอบคุณ, {name}, ที่ส่งข้อมูลมาให้ Admin </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md"
                >
                  ปิด
                </button>
              </div>
            </div>
          )}

          {/* right side */}
          <div>
            <div className="space-y-8 p-8 bg-slate-200 shadow-xl rounded-md">
              <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex sm:flex-row flex-col gap-4">
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 shadow"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 shadow"
                  />
                </div>
                <div className="flex sm:flex-row flex-col gap-4">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone"
                    placeholder="Contact Number"
                    className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 shadow"
                  />
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="Country"
                    className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 shadow"
                  />
                </div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700 shadow"
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-blue-700 text-white rounded-md hover:bg-blue-700/90"
                >
                  ส่งข้อความ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
