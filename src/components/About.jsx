// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Layers, Smartphone, Monitor } from "lucide-react";

// const skills = [
//   { icon: <Code className="w-8 h-8 text-blue-500" />, label: "HTML, CSS, JS" },
//   { icon: <Layers className="w-8 h-8 text-purple-500" />, label: "PHP & Laravel" },
//   { icon: <Smartphone className="w-8 h-8 text-green-500" />, label: "Flutter UI" },
//   { icon: <Monitor className="w-8 h-8 text-pink-500" />, label: ".NET Backend" },
// ];

// const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-24 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
//     >
//       {/* Floating Background Shapes */}
//       <motion.div
//         className="absolute -top-32 -left-32 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"
//         animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
//         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20"
//         animate={{ x: [-20, 20, -10, 0], y: [0, 20, -10, 0] }}
//         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//       />

//       {/* Section Title */}
//       <motion.h2
//         className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         About Me
//       </motion.h2>

//       {/* About Content */}
//       <div className="grid gap-12 md:grid-cols-2 items-center">
//         {/* Text Info */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             Hi! I'm <span className="font-semibold text-blue-600">Alishba</span>, a passionate developer who
//             loves creating visually stunning UI/UX designs and building scalable, clean web applications.
//             I specialize in <span className="font-semibold text-purple-600">HTML, CSS, JavaScript, PHP, Laravel, Flutter, and .NET</span>.
//           </p>
//           <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//             Over the years, I have developed responsive websites, mobile apps, and admin dashboards,
//             focusing on <span className="font-semibold text-green-600">user-centric design</span> and
//             <span className="font-semibold text-pink-600"> seamless functionality</span>.
//           </p>
//         </motion.div>

//         {/* Skills Grid */}
//         <motion.div
//           className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="p-3 bg-gray-100 rounded-full">{skill.icon}</div>
//               <h4 className="text-gray-800 font-semibold text-center">{skill.label}</h4>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;











































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
      className="relative py-32 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-200 to-blue-400 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-200 to-purple-400 rounded-full blur-3xl opacity-30"
        animate={{ x: [-40, 40, -20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* Text Info */}
        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            Hi! I'm <span className="font-bold text-blue-600">Alishba</span>, a passionate developer creating 
            visually stunning UI/UX designs and scalable, clean web applications. 
            I specialize in <span className="font-bold text-purple-600">HTML, CSS, JavaScript, PHP, Laravel, Flutter, and .NET</span>.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Over the years, I have developed responsive websites, mobile apps, and admin dashboards,
            focusing on <span className="font-bold text-green-600">user-centric design</span> and
            <span className="font-bold text-pink-600"> seamless functionality</span>.
          </p>
        </motion.div>

        {/* Skills Grid with Glassmorphism */}
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
              className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-md">{skill.icon}</div>
              <h4 className="text-gray-800 font-semibold text-center">{skill.label}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.14,22.08,104.33,29.22,158,20,70-12.57,136.68-48.17,207-47.4,81.5.89,153.4,39.46,234,45.64,86,6.9,172-26.44,258-46.19C975,7.5,1050,0,1200,0V120H0Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
