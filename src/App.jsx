import "./App.css";
import AboutMe from "./sections/AboutMe/AboutMe";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import TopProject from "./sections/Projects/TopProject";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TopProject />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
