import React from "react";

import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ParticleAnimation from "./components/Main/ParticleAnimation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Main></Main>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
