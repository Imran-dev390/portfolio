import React from "react";
import { motion } from "framer-motion";
import { Code, Layers, Smartphone, Monitor } from "lucide-react";

const skills = [
  { icon: <Code className="w-8 h-8 text-blue-500" />, label: "HTML, CSS, JS" },
  { icon: <Layers className="w-8 h-8 text-purple-500" />, label: "PHP & Laravel" },
  { icon: <Smartphone className="w-8 h-8 text-green-500" />, label: "Flutter UI" },
  { icon: <Monitor className="w-8 h-8 text-pink-500" />, label: ".NET Backend" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [-20, 20, -10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Text Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Hi! I'm <span className="font-semibold text-blue-600">Alishba</span>, a passionate developer who
            loves creating visually stunning UI/UX designs and building scalable, clean web applications.
            I specialize in <span className="font-semibold text-purple-600">HTML, CSS, JavaScript, PHP, Laravel, Flutter, and .NET</span>.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Over the years, I have developed responsive websites, mobile apps, and admin dashboards,
            focusing on <span className="font-semibold text-green-600">user-centric design</span> and
            <span className="font-semibold text-pink-600"> seamless functionality</span>.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 bg-gray-100 rounded-full">{skill.icon}</div>
              <h4 className="text-gray-800 font-semibold text-center">{skill.label}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
