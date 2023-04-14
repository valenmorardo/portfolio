import React from "react";
import s from "./AboutMe.module.css";

import {images} from "../../utils";

const AboutMe = () => {
  return (
    <section  className={s.container}>

      <div className={s.img}>
        <img src={images.typingBro} alt="Code Typing bro" />
      </div>

      <div className={s.content}>
        <h1>About_Me</h1>

        

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          itaque ab ullam eos exercitationem fugiat ea fugit ipsam nesciunt
          minima placeat assumenda dolorum aliquam? Corporis odit at nisi nobis
          vitae.
        </p>
        
      </div>
    </section>
  );
};

export default AboutMe;
