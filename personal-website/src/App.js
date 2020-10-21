import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Main></Main>
      <About></About>
      <Experience></Experience>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
