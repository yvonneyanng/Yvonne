import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Intro></Intro>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
