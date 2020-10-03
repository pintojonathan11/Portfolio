import React from "react";

import "./App.css";
import Header from "./components/Main/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import NavigationBar from "./components/NavigationBar/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
