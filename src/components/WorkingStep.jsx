import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";

const WorkingStep = () => {
  return (
    <div
      id="howtowork"
      className="relative bg-cover bg-center py-12 bg-working-img"
    >
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="text-white text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">
            How it works
          </h2>
          <p className="text-lg md:1/2 w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            dolorem dignissimos recusandae aliquid, dicta quae voluptatem et!
            Magni, ab quos at ut non omnis a. Vero officiis adipisci quod
            beatae.
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg font-medium mt-8">
              <p className="my-2">
                Step 1 description goes here. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </h3>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">
              <p className="my-2">
                Step 2 description goes here. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </h3>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white size-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">
              <p className="my-2">
                Step 3 description goes here. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingStep;
