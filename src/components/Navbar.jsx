import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 relative z-50">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          AlishbaDev
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-blue-500 transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none text-gray-200 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <motion.div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 shadow-lg px-6 py-6 space-y-4 z-40
          ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block text-gray-200 hover:text-blue-500 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </motion.div> */}
      <motion.div
  className="md:hidden absolute left-0 w-full bg-gray-900 shadow-lg px-6 py-6 space-y-4 z-50"
  style={{ top: "100%" }} // ensures it starts right below navbar
  initial={{ opacity: 0, y: -20 }}
  animate={{
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : -20,
    pointerEvents: isOpen ? "auto" : "none",
  }}
  transition={{ duration: 0.3 }}
>
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      onClick={() => setIsOpen(false)}
      className="block text-gray-200 hover:text-blue-500 transition-colors duration-300"
    >
      {link.name}
    </a>
  ))}
</motion.div>


    </nav>
  );
};

export default Navbar;
