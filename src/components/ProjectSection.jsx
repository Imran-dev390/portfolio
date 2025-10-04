// import React from "react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Instagram Clone UI",
//     description:
//       "A fully responsive Instagram clone UI built with HTML, CSS, JavaScript, and Tailwind CSS for modern look & feel.",
//     skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
//   },
//   {
//     title: "E-commerce Landing Page",
//     description:
//       "A beautiful product landing page built using PHP & Laravel for backend structure with clean UI/UX.",
//     skills: ["PHP", "Laravel", "HTML", "CSS"],
//   },
//   {
//     title: "Flutter App UI",
//     description:
//       "Cross-platform mobile app UI designed in Flutter, focusing on responsive and modern design patterns.",
//     skills: ["Flutter", "Dart", "UI/UX"],
//   },
//   {
//     title: "Admin Dashboard UI",
//     description:
//       "A modern dashboard template built using .NET backend and clean HTML/CSS/JS frontend for admin operations.",
//     skills: [".NET", "HTML", "CSS", "JavaScript"],
//   },
// ];

// const ProjectCard = ({ project, index }) => (
//   <motion.div
//     className="bg-white rounded-3xl shadow-xl p-6 md:p-8 cursor-pointer
//                hover:-translate-y-3 hover:shadow-2xl transition-transform duration-500
//                flex flex-col justify-between group overflow-hidden relative"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ delay: index * 0.2, duration: 0.8 }}
//   >
//     {/* Decorative gradient overlay on hover */}
//     <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

//     <div className="relative z-10">
//       <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
//         {project.title}
//       </h3>
//       <p className="text-gray-600 text-sm md:text-base mb-4">{project.description}</p>

//       <div className="flex flex-wrap gap-2 mt-2">
//         {project.skills.map((skill, i) => (
//           <motion.span
//             key={i}
//             className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 * i }}
//           >
//             {skill}
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   </motion.div>
// );

// const ProjectsSection = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 md:px-20 lg:px-32 bg-gray-50 min-h-screen"
//     >
//       <motion.h2
//         className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;




















import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Instagram Clone UI",
    description:
      "A fully responsive Instagram clone UI built with HTML, CSS, JavaScript, and Tailwind CSS for modern look & feel.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "E-commerce Landing Page",
    description:
      "A beautiful product landing page built using PHP & Laravel for backend structure with clean UI/UX.",
    skills: ["PHP", "Laravel", "HTML", "CSS"],
  },
  {
    title: "Flutter App UI",
    description:
      "Cross-platform mobile app UI designed in Flutter, focusing on responsive and modern design patterns.",
    skills: ["Flutter", "Dart", "UI/UX"],
  },
  {
    title: "Admin Dashboard UI",
    description:
      "A modern dashboard template built using .NET backend and clean HTML/CSS/JS frontend for admin operations.",
    skills: [".NET", "HTML", "CSS", "JavaScript"],
  },
];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="relative bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg
               hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transition-transform duration-500
               p-6 md:p-8 flex flex-col justify-between cursor-pointer overflow-hidden group"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8 }}
  >
    {/* Gradient hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

    <div className="relative z-10 flex flex-col justify-between h-full">
      <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-700 text-sm md:text-base mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-2">
        {project.skills.map((skill, i) => (
          <motion.span
            key={i}
            className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-800 px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-sm"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-20 lg:px-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Decorative background shapes */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20"
        animate={{ x: [-30, 30, -15, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section title */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text
                   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Project cards grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
