import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Education } from "./pages/Education/Education";
import { Internship } from "./pages/Internship/Internship";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import "../src/App.css"

function App() {
  const theme = [];

  return (
    <>
      <div id={theme} className="app-container">
        <Layout className="layout" />
        
        <div className="content-container">
          
            <Home />
            <About />
            <Education />
            <Internship />
            <Skills />
            <Projects />
            <Contact />
         
          <div className="footer py-3 bg-primary">
            <h4 className="text-center">Made With Joy karmakar &copy; 2024</h4>
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ borderRadius: "50%", backgroundColor: "rgb(108, 17, 111)" }}
      />
    </>
  );
}

export default App;
