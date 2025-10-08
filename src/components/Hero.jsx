import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const bgVariants = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
};

const imgVariants = {
  initial: { opacity: 0, x: 100, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1 },
};

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-primary/10 via-white to-primary/5 relative overflow-hidden">
      {/* Decorative Background Circles */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl z-0"
        variants={bgVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-primary-alt/20 rounded-full blur-3xl z-0"
        variants={bgVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full px-4 mt-[10vh] md:mt-0">
        <motion.h1
          className="mt-10 md:mt-0 font-roboto text-5xl md:text-7xl font-extrabold text-primary text-center mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Good Food.
          <br />
          <span className=" bg-gradient-to-r from-primary-alt to-primary-dark text-transparent bg-clip-text">
            Good Mood.
          </span>
        </motion.h1>
        <motion.p
          className="font-poppins text-xl md:text-2xl text-gray-700 text-center mb-8 px-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Because life's too short for boring meals. Pick your favorites, relax,
          and let us handle the rest.
        </motion.p>
        <motion.button
          className="text-white font-poppins text-lg bg-gradient-to-r from-primary to-primary-alt py-3 px-8 rounded-full flex items-center justify-center gap-3 shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Grab a Bite <FaArrowRight />
        </motion.button>
      </div>
      <motion.div
        className="flex-1 flex justify-center items-center relative z-10"
        variants={imgVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img
          src="/images/hero.png"
          alt="A picture of pizza"
          className="w-[350px] md:w-[500px]"
        />
        {/* Decorative floating food emoji */}
        <motion.span
          className="absolute top-5 -left-10 lg:top-10 lg:left-10 text-5xl lg:text-7xl md:top-10 md:left-10"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          🍕
        </motion.span>
        <motion.span
          className="absolute lg:bottom-10 lg:right-10 text-4xl lg:text-6xl md:bottom-10 md:right-10 bottom-7 -right-7"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          🍔
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Hero;
