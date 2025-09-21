import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import ProjectsSection from "./components/ProjectSection";
//import Contact from "./components/Contact";
import AboutSection from "./components/About";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Loader/>
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

 <section id="about" className="bg-gray-100 py-2">
        <AboutSection />
      </section>
      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-2">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-2">
        <Footer/>
      </section>
    </div>
  </>
  );
};

export default App;
