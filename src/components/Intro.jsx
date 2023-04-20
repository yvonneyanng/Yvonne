import React from "react";
import { styles } from "../styles";

import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "../styles/Intro.css";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Intro = () => {
  return (
    <div class="text-left bg-slate-700">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          hi,
          <span className="intro-name"> yvonne </span>
          here.
        </span>
      </Typist>
      <p class="text-white">
        I'm a Computer Science student at Feng Chia University.
      </p>
      <a href="mailto:yvnyang@icloud.com" className="intro-contact">
        <EmailRoundedIcon />
        {" Say hi!"}
      </a>
    </div>
  );
};

export default Intro;
