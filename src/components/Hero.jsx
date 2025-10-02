import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// Decorative images with simplified config
const decorImages = [
    { src: "/images/jalapeno-1.png", alt: "Jalapeno", style: { top: "18vh", left: "6vw" } },
    { src: "/images/jalapeno-2.png", alt: "Jalapeno", style: { top: "65vh", left: "88vw" } },
    { src: "/images/leaf-1.png", alt: "Leaf", style: { top: "35vh", left: "8vw" } },
    { src: "/images/leaf-2.png", alt: "Leaf", style: { top: "22vh", left: "90vw" } },
    { src: "/images/olive-1.png", alt: "Olive", style: { top: "45vh", left: "17vw" } },
    { src: "/images/olive-2.png", alt: "Olive", style: { top: "50vh", left: "80vw" } },
    { src: "/images/tomato-1.png", alt: "Tomato", style: { top: "70vh", left: "16vw" } },
    { src: "/images/tomato-2.png", alt: "Tomato", style: { top: "72vh", left: "80vw" } },
];

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between relative items-center bg-white/95 overflow-hidden">
            {/* Decorative Images */}
            {decorImages.map((img, idx) => {
                const isLeft = img.src.includes("-1"); // detect left side
                return (
                    <motion.img
                        key={idx}
                        src={img.src}
                        alt={`Picture of ${img.alt}`}
                        style={{
                            position: "absolute",
                            width: "clamp(40px, 7vw, 80px)",
                            ...img.style,
                            zIndex: 1,
                            pointerEvents: "none",
                        }}
                        className="drop-shadow-2xl blur-[2px] md:blur-none"
                        initial={{
                            opacity: 0,
                            rotate: isLeft ? 45 : -45,   // flipped
                            x: isLeft ? 60 : -60,        // flipped
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0,
                            x: 0,
                            y: [0, -6, 0], // subtle float animation
                        }}
                        transition={{
                            duration: 1,
                        }}
                    />
                );
            })}

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
                    Because life's too short for boring meals. Pick your favorites, relax, and let us handle the rest.
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
