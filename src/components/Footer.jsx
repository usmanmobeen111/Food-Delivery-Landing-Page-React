import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter,  FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-accent-dark text-neutral py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Grill & Chill
          </h2>
          <p className="text-sm text-neutral/80 leading-relaxed max-w-sm mx-auto md:mx-0">
            Serving smiles one bite at a time 🍔. Experience handcrafted meals made 
            with love, flavor, and passion since 2021.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-4 text-secondary font-poppins">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-neutral/80">
            {["Home", "Features", "Menu", "Testimonials", "Contact"].map((link, i) => (
              <li
                key={i}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-4 text-secondary font-poppins">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-neutral/80 text-sm">
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

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            {[
              { icon: <FaFacebookF />, link: "https://www.facebook.com/usmanmobeen111" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/usmanmobeen111" },
              { icon: <FaTwitter />, link: "https://www.twitter.com/usmanmobeen111" },
            ].map((item, i) => (
              <motion.a
                key={i}
                target="_blank"
                href={item.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-all p-3 rounded-full"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        className="border-t border-neutral/20 mt-10 pt-6 text-center text-sm text-neutral/70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">Grill & Chill</span>. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
