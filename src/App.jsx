import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./components/Skills";
import SkillsRadial from "./components/SkillsRadial";
import Services from "./components/Service";
import Experience from "./components/Experience";

// 1. IMPORT YOUR RESUME PAGE
import ResumePage from "./pages/ResumePage";

function App() {
  return (
    <>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE (SCROLL-BASED LANDING) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <SkillsRadial />
              <Services />
              <Experience />
            </>
          }
        />

        {/* STATIC PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/projects/:slug" element={<ProjectDetails />} />

        {/* 2. ADD THE RESUME ROUTE */}
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </>
  );
}

export default App;
