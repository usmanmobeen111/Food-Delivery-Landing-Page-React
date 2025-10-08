import React from 'react';
import {
  FaBolt,
  FaFireAlt,
  FaPizzaSlice,
  FaHamburger,
  FaGlassWhiskey,
  FaLaughBeam,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: <FaBolt className="text-4xl text-primary" />,
    title: 'Fast Delivery',
    description: 'Get your food delivered in under 30 minutes.',
  },
  {
    id: 2,
    icon: <FaFireAlt className="text-4xl text-primary" />,
    title: 'Hot & Fresh',
    description: 'Enjoy your meal at the perfect temperature.',
  },
  {
    id: 3,
    icon: <FaPizzaSlice className="text-4xl text-primary" />,
    title: 'Affordable Prices',
    description: 'Enjoy quality meals without breaking the bank.',
  },
  {
    id: 4,
    icon: <FaHamburger className="text-4xl text-primary" />,
    title: 'Delicious Variety',
    description: 'From pizzas to burgers — satisfy every craving.',
  },
  {
    id: 5,
    icon: <FaGlassWhiskey className="text-4xl text-primary" />,
    title: 'Refreshing Drinks',
    description: 'Pair your meal with our premium beverage options.',
  },
  {
    id: 6,
    icon: <FaLaughBeam className="text-4xl text-primary" />,
    title: 'Friendly Service',
    description: 'We serve smiles with every order you make.',
  },
];

// Framer Motion animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1, ease: 'easeInOut', delay: 0.3 },
  },
};

const Features = () => {
  return (
    <section id='features' className="bg-yellow-50 min-h-screen flex flex-col items-center justify-center py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-roboto relative inline-block">
          Our <span className="text-primary">Features</span>
          {/* Animated underline */}
          <motion.div
            className="h-[3px] bg-dark absolute left-0 bottom-[-10px] rounded-full"
            variants={underlineVariants}
            initial="hidden"
            animate="visible"
            
          />
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-poppins">
          We bring you the ultimate food experience with speed, flavor, and care — because you deserve the best.
        </p>
      </div>

      {/* Features Grid */}
      <motion.div
        className="
          w-full max-w-6xl 
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          justify-items-center
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="
              bg-white 
              rounded-xl 
              shadow-lg 
              p-8 
              flex 
              flex-col 
              items-center 
              text-center 
              transition-transform 
              duration-300
              w-[80vw] 
              sm:w-[70vw] 
              md:w-[45vw] 
              lg:w-[25vw]
            "
            variants={cardVariants}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 font-poppins">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
