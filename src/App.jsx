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
import ResumePage from "./pages/ResumePage";

// IMPORT the Scroll Handler (we will create this below)
import ScrollToRoute from "./components/ScrollToRoute";

function App() {
  return (
    <>
      <Navbar />

      {/* This component will watch your scroll position and update the URL */}
      <ScrollToRoute />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
                <SkillsRadial />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="experience">
                <Experience />
              </section>
            </>
          }
        />
        {/* STATIC PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} /> {/* ADDED THIS */}
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
