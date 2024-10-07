import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import TechAndSkills from "./components/TechAndSkills/TechAndSkills";
import Formation from "./components/Formation/Formation";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import s from "./App.module.css";

function App() {
  return (
    <>
      <div className={s.mainContainer}>
        <Nav />

        <main className={s.main}>
          <Hero />
          <div id="aboutme"></div>
          <AboutMe />
          <div id="techskills"></div>
          <TechAndSkills />
          <div id="formation"></div>
          <Formation />
          <div id="projects"></div>
          <Projects />
          <div id="contact"></div>
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
