import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Alishba is an exceptional developer! Her UI designs are pixel-perfect and her code is clean and maintainable.",
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Working with Alishba was amazing. She translates complex requirements into beautiful, responsive designs.",
  },
  {
    name: "Michael Lee",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Her attention to detail and dedication to quality are unmatched. A top-tier frontend engineer!",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    className="relative bg-white shadow-xl rounded-3xl p-6 md:p-8 flex flex-col items-center text-center
               hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-transform duration-500"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    {/* Avatar */}
    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-400 mb-4">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Message */}
    <p className="text-gray-700 text-base md:text-lg italic mb-4">&quot;{testimonial.message}&quot;</p>

    {/* Name & Role */}
    <h4 className="text-gray-900 font-bold text-lg md:text-xl">{testimonial.name}</h4>
    <span className="text-gray-500 text-sm">{testimonial.role}</span>
  </motion.div>
);

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-gray-100 via-white to-gray-100 overflow-hidden"
    >
      {/* Floating blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"
        animate={{ x: [-30, 30, -15, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Testimonials
      </motion.h2>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard testimonial={t} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
