import React, { useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  'Home',
  'Features',
  'Menu',
  'Testimonials',
  'CTA',
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <nav className="flex justify-between items-center p-4 fixed top-0 left-0 w-full shadow-md px-10 z-50 bg-transparent backdrop-blur-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 text-gray-900 text-2xl font-bold font-roboto">
          <FaHamburger className="w-10 h-10 text-primary" />
          <span>Grill & Chill</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-gray-700 font-poppins font-semibold text-lg">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative hover:text-primary transition duration-300 cursor-pointer group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-900 z-[100] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed top-0 right-0 h-screen w-[90vw] bg-white z-[90] transition-transform duration-300   ${
            mobileOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-8  text-gray-900 font-poppins font-semibold text-xl items-center justify-center h-full">
            {navLinks.map((link) => (
              <li
                key={link}
                className="relative hover:text-primary transition duration-300 cursor-pointer group"
                onClick={() => setMobileOpen(false)}
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
