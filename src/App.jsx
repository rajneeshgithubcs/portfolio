import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToRoute from "./components/ScrollToRoute";
import ScrollToTop from "./components/ScrollToTop";

// Eagerly loaded (above the fold — must be instant)
import Hero from "./components/Hero";

// Lazy loaded (below the fold — defer until needed)
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const SkillsRadial = lazy(() => import("./components/SkillsRadial"));
const Services = lazy(() => import("./components/Service"));
const Experience = lazy(() => import("./components/Experience"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

// Minimal fallback — keeps the dark bg while chunk loads
const PageLoader = () => (
  <div className="w-full min-h-[400px] bg-[#020306] flex items-center justify-center">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-full" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 border-t-cyan-500 rounded-full will-change-transform"
      />
    </div>
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      {/* Scroll to top on every route change */}
      <ScrollToTop />

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
              <Suspense fallback={<PageLoader />}>
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
              </Suspense>
            </>
          }
        />
        {/* STATIC PAGES */}
        <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<PageLoader />}><Projects /></Suspense>} />
        <Route path="/skills" element={<Suspense fallback={<PageLoader />}><Skills /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
        <Route path="/experience" element={<Suspense fallback={<PageLoader />}><Experience /></Suspense>} />
        <Route path="/projects/:slug" element={<Suspense fallback={<PageLoader />}><ProjectDetails /></Suspense>} />
        <Route path="/resume" element={<Suspense fallback={<PageLoader />}><ResumePage /></Suspense>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
