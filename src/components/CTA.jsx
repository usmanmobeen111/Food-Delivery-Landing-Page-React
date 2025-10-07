import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative py-20 px-6 bg-white text-gray-900 text-center overflow-hidden">

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto "
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-roboto"
        >
          <span className="text-primary">Hungry?</span> We're Just One Call Away
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-700 mb-10 font-body"

        >
          Satisfy your cravings with freshly grilled goodness — straight to your
          doorstep. Call now or order online and taste perfection.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:bg-primary hover:text-white cursor-pointer transition-all duration-300"
          >
            <FaPhoneAlt className=" text-lg" />
            Call Us Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary-alt text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary shadow-sm cursor-pointer transition-all duration-300"
          >
            Order Online
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
