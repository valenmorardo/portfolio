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
            Hello! My name is Valentín Morardo and I am a full-stack web
            developer. Since I was a child, I have always been fascinated by
            technology, especially computers, so I decided to dedicate myself to
            programming. I consider myself a passionate, optimistic, and
            self-taught person, always facing challenges with a positive
            attitude to overcome them.
          </p>
          <p className={s.parrafo}>
            I have experience using{" "}
            <a href="#techskills">technologies and tools</a> such as JavaScript,
            ReactJS, Redux, HTML5, CSS3, NodeJS, ExpressJS, MongoDB, PostgreSQL,
            and Git. Currently, I am dedicated to learning new content and
            carrying out new projects to apply all my knowledge and continue
            reinforcing it.
          </p>
          <p className={s.parrafo}>
            Furthermore, I am attending an English academy here in my city to
            improve and professionalize my English. During my free time, I enjoy
            playing video games since I am an enthusiast and also do physical
            training 2 or 3 times a week.
          </p>
          <p>
            I am a responsible and committed person, and I am open to new job
            opportunities and challenges. If you have any questions or if you
            think we can collaborate on a project, don't hesitate to{" "}
            <a href="#contact">contact me!</a> I am always willing to do my
            best!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
