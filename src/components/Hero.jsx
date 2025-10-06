import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between relative items-center bg-white/95 z-10 overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center relative z-10 w-full px-4 mt-[20vh] ">
        <motion.h1
          className="font-roboto text-4xl md:text-5xl font-extrabold text-primary text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Good Food.
          <br />
          Good Mood.
        </motion.h1>
        <motion.p
          className="font-poppins text-lg md:text-xl text-gray-700 text-center mb-6 px-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Because life's too short for boring meals. Pick your favorites, relax,
          and let us handle the rest.
        </motion.p>
        <motion.button
          className="text-white font-poppins text-lg bg-secondary py-2 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-secondary/90 transition duration-300 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Grab a Bite <FaArrowRight />
        </motion.button>
      </div>

      {/* Hero Pizza */}
      <motion.img
        src="/images/hero-pizza.png"
        alt="An image of Half Pizza"
        className="w-full max-w-2xl mx-auto mb-0 absolute left-1/2 bottom-0 -translate-x-1/2 drop-shadow-2xl "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default Hero;
