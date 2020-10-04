import React from "react";

import "./App.css";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Main></Main>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
