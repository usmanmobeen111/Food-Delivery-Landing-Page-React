import { useState, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Features", path: "#features" },
  { name: "Menu", path: "#menu" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "CTA", path: "#cta" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center p-4 px-8 md:px-10 shadow-md bg-transparent backdrop-blur-lg relative">
        {/* Logo */}
        <div className="flex items-center gap-2 text-slate-900 text-2xl font-bold font-roboto">
          <FaHamburger className="w-9 h-9 text-primary" />
          <span>Grill & Chill</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-slate-900 font-poppins font-semibold text-lg">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a
                href={link.path}
                className="hover:text-primary transition duration-300 cursor-pointer"
              >
                {link.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full rounded"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-900 z-[110] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-[80vw] max-w-sm bg-white shadow-xl z-[100] flex flex-col items-center justify-center transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-8 text-slate-900 font-poppins font-semibold text-xl items-center">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onClick={() => setMobileOpen(false)}
              >
                <a
                  href={link.path}
                  className="hover:text-primary transition duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full rounded"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
