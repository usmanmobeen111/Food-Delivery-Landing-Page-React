import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../utils/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-yellow-50 text-slate-900">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-roboto">
          What Our <span className="text-primary">Customers</span> Say
        </h2>
        <p className="text-gray-600 mt-3 font-roboto">
          Real voices from people who love our food ❤️
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-primary object-cover"
              />
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base font-roboto italic text-center mb-6 leading-relaxed">
              “{testimonial.review}”
            </p>

            {/* Name and Role */}
            <div className="text-center">
              <h3 className="font-semibold text-lg text-slate-900 font-poppins">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>

              {/* Rating */}
              <div className="flex justify-center text-primary gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
