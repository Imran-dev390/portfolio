import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const dotsRef = useRef([]);

  useEffect(() => {
    // Animate dots in a circle using GSAP
    dotsRef.current.forEach((dot, i) => {
      gsap.to(dot, {
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.15,
        duration: 0.6,
      });
    });

    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Animated Dot Circle */}
          <div className="relative w-32 h-32 mb-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                className="absolute top-1/2 left-1/2 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{
                  transform: `rotate(${i * 60}deg) translate(50px)`,
                }}
              />
            ))}
          </div>

          {/* Rotating Loader Text */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Loading Portfolio...
          </motion.h2>

          {/* Optional subtle pulse background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
