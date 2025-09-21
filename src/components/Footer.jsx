import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/in/alishba-awan-23b030298" },
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
          {/* About / Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-white">Alishba Dev</h3>
            <p className="text-gray-300 max-w-xs">
              Full-stack developer focused on building clean, modern UI/UX and responsive web applications.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>alishawan2301@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span>+92 3112533575</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            {quickLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Alishba Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
