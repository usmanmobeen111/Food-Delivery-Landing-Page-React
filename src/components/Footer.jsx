import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "#home" },
    { name: "Features", path: "#features" },
    { name: "Menu", path: "#menu" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#cta" },
  ];

  const socials = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/usmanmobeen111" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/usmanmobeen111" },
    { icon: <FaTwitter />, link: "https://www.twitter.com/usmanmobeen111" },
  ];

  return (
    <footer id="footer" className="bg-accent-dark text-neutral py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* ================= BRAND SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Grill & Chill
          </h2>
          <p className="text-neutral/80 leading-relaxed text-sm max-w-sm mx-auto md:mx-0">
            Serving smiles one bite at a time 🍔. Experience handcrafted meals
            made with love, flavor, and passion since 2021.
          </p>
        </motion.div>

        {/* ================= QUICK LINKS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-secondary font-poppins">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-neutral/80 text-sm">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.path}
                  className="relative group hover:text-primary transition duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ================= CONTACT & SOCIALS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold mb-4 text-secondary font-poppins">
            Get in Touch
          </h3>
          <ul className="space-y-3 text-neutral/80 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-primary" /> +92 300 1234567
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-primary" /> hello@grillchill.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaLocationDot className="text-primary" /> Lahore, Pakistan
            </li>
          </ul>

          {/* ========== SOCIAL ICONS ========== */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            {socials.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all p-3 rounded-full shadow-md"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM LINE ================= */}
      <motion.div
        className="border-t border-neutral/20 mt-12 pt-6 text-center text-sm text-neutral/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">Grill & Chill</span>. All
        Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
