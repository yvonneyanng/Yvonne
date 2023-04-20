import React from "react";
import { styles } from "../styles";
import "../styles/About.css";

const About = () => {
  return (
    <div class="text-white text-left bg-sky-900" id="about">
      <h1 className="about-title">About me</h1>
      <p>I'm a Computer Science student at Feng Chia University.</p>
      <h2>
        Here are some technologies I've been working with:
        <l>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
        </l>
      </h2>
    </div>
  );
};

export default About;
