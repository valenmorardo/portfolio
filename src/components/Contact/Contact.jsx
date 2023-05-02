import React from "react";
import s from "./Contact.module.css";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import externalLink from "../../assets/externalLink.png";

const Contact = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>CONTACT</h3>

      <div className={s.container}>
        <a
          href="https://www.linkedin.com/in/valentin-morardo/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
          className={s.card}
        >
          <div>
            <BsLinkedin className={s.icon} />
            <h1>Linkedin</h1>
            <span>linkedin.com/in/valentin-morardo</span>
          </div>
        </a>

        <a
          href="https://github.com/valenmorardo"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={s.card}
        >
          <div>
            <BsGithub className={s.icon} />
            <h1>GitHub</h1>
            <span>github.com/valenmorardo</span>
          </div>
        </a>

        <a href="mailto:valentin.morardo@gmail.com" aria-label="Email"  className={s.card}>
          <div>
            <GrMail className={s.icon} />
            <h1>Mail</h1>
            <span>valentin.morardo@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
