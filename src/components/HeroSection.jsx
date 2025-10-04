// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ArrowRight, Code, Smartphone, Layers } from "lucide-react";

// const HeroSection = () => {
//   const textRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     // Text entrance animation
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -80 },
//       { opacity: 1, x: 0, duration: 1.3, ease: "power4.out" }
//     );

//     // Floating effect for image
//     gsap.fromTo(
//       imageRef.current,
//       { y: 0 },
//       {
//         y: -20,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//         duration: 3,
//       }
//     );
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-20 min-h-screen overflow-hidden
//                  bg-gradient-to-b from-blue-50 via-white to-gray-50"
//     >
//       {/* ====== Animated Background Blobs ====== */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

//       {/* ====== LEFT TEXT SECTION ====== */}
//       <div
//         ref={textRef}
//         className="text-center md:text-left space-y-6 max-w-2xl z-10 order-1 md:order-none"
//       >
//         <motion.h1
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Hi, I'm{" "}
//           <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Alishba
//           </span>
//           <br />
//           A Passionate Developer
//         </motion.h1>

//         <motion.p
//           className="text-gray-600 text-lg md:text-xl leading-relaxed"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           I craft <span className="font-semibold text-gray-800">modern, scalable</span> and
//           visually stunning applications. Skilled in{" "}
//           <span className="font-semibold text-gray-800">
//             Frontend, PHP, Laravel, .NET, JavaScript, and Flutter
//           </span>
//           , I bring ideas to life with creativity and precision.
//         </motion.p>

//         {/* ====== CTA BUTTONS ====== */}
//         <motion.div
//           className="flex flex-col md:flex-row items-center gap-4 pt-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <a
//             href="#projects"
//             className="group inline-flex items-center px-7 py-3 text-lg font-medium rounded-full 
//                        bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg
//                        hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
//           >
//             View My Work
//             <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//           </a>
//           <a
//             href="#contact"
//             className="inline-flex items-center px-7 py-3 text-lg font-medium rounded-full border 
//                        border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 
//                        transition-all duration-300"
//           >
//             Contact Me
//           </a>
//         </motion.div>

//         {/* ====== SKILLS ICONS ====== */}
//         <div className="flex gap-8 pt-10 justify-center md:justify-start">
//           <div className="flex flex-col items-center group">
//             <Code className="text-blue-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
//             <span className="text-gray-600 text-sm mt-1">Frontend</span>
//           </div>
//           <div className="flex flex-col items-center group">
//             <Layers className="text-purple-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
//             <span className="text-gray-600 text-sm mt-1">Backend</span>
//           </div>
//           <div className="flex flex-col items-center group">
//             <Smartphone className="text-green-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
//             <span className="text-gray-600 text-sm mt-1">Flutter</span>
//           </div>
//         </div>
//       </div>

//       {/* ====== RIGHT IMAGE SECTION ====== */}
//       <motion.div
//         ref={imageRef}
//         className="relative mb-12 md:mb-0 flex justify-center md:justify-end w-full md:w-1/2 order-2 md:order-none"
//       >
//         <div className="relative">
//           {/* Soft Glow Behind Image */}
//           <div className="absolute -inset-10 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

//           {/* Developer Horizontal Image */}
// <motion.img
//   src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
//   alt="Alishba Developer"
//   className="relative w-72 md:w-96 lg:w-[28rem] aspect-[4/4] rounded-3xl shadow-2xl object-cover ring-4 ring-white"
// //  className="relative w-72 md:w-96 lg:w-[28rem] aspect-[4/3] rounded-3xl shadow-2xl object-cover ring-4 ring-white"

//   initial={{ opacity: 0, scale: 0.9 }}
// //  animate={{ opacity: 1, scale: 1 }}
//   transition={{ delay: 0.4, duration: 1 }}
// />



//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
























import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Code, Smartphone, Layers } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Text entrance animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1.3, ease: "power4.out" }
    );

    // Floating effect for image
    gsap.fromTo(
      imageRef.current,
      { y: 0 },
      {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        duration: 3,
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-20 min-h-screen overflow-hidden
                 bg-gradient-to-b from-blue-50 via-white to-gray-50"
    >
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Left Text */}
      <div
        ref={textRef}
        className="text-center md:text-left space-y-6 max-w-2xl z-10 order-1 md:order-none"
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Alishba
          </span>
          <br />
          <span className="text-gray-900">
            <Typewriter
              words={["Frontend Developer", "Backend Developer", "Flutter Enthusiast","UI UX Designer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-600 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I craft <span className="font-semibold text-gray-800">modern, scalable</span> and
          visually stunning applications. Skilled in{" "}
          <span className="font-semibold text-gray-800">
            Frontend, PHP, Laravel, .NET, JavaScript, and Flutter
          </span>
          , I bring ideas to life with creativity and precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center px-7 py-3 text-lg font-medium rounded-full 
                       bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg
                       hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            View My Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 text-lg font-medium rounded-full border 
                       border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 
                       transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Skills Icons */}
        <div className="flex gap-8 pt-10 justify-center md:justify-start">
          <div className="flex flex-col items-center group">
            <Code className="text-blue-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-600 text-sm mt-1">Frontend</span>
          </div>
          <div className="flex flex-col items-center group">
            <Layers className="text-purple-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-600 text-sm mt-1">Backend</span>
          </div>
          <div className="flex flex-col items-center group">
            <Smartphone className="text-green-600 w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-gray-600 text-sm mt-1">Flutter</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
    {/* Right Image */}
<motion.div
  ref={imageRef}
  className="relative mb-12 md:mb-0 flex justify-center md:justify-end w-full md:w-1/2 order-2 md:order-none mt-10 md:mt-0"
>
  <div className="relative">
    {/* Soft Glow */}
    <div className="absolute -inset-10 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

    {/* Developer Image */}
    <motion.img
      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
      alt="Alishba Developer"
      className="relative w-72 md:w-96 lg:w-[28rem] aspect-square rounded-3xl shadow-2xl object-cover ring-4 ring-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    />
  </div>
</motion.div>

    </section>
  );
};

export default HeroSection;
