import React from "react";
import s from "./AboutMe.module.css";

import { images } from "../../utils";

const AboutMe = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>ABOUT_ME</h3>

      <div className={s.container}>
        <div className={s.divImg}>
          <img
            src={images.typingBro}
            alt="Code Typing bro"
            className={s.image}
          />
        </div>

        <div className={s.divP}>
          <p>
            I'm a backend developer with strong expertise in Golang and
            Node.js. I design and build APIs and backend systems focused on
            performance, scalability, and reliability. My background as a full
            stack developer gives me a complete understanding of web
            applications, but today my passion lies in mastering backend
            development and cloud infrastructure
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
