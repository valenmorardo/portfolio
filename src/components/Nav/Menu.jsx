import React from "react";

import s from "./Menu.module.css";

const Menu = ({ toggleMenu }) => {
  return (
    <section className={`${s.container}`}>
      <div className={s.content}>
        <a href="/#top" onClick={() => toggleMenu()}>
          <h1 className={s.options}>HOME</h1>
        </a>

        <a href="/#aboutme" onClick={() => toggleMenu()}>
          <h1 className={s.options}>ABOUT_ME</h1>
        </a>

        <a href="/#techskills" onClick={() => toggleMenu()}>
          <h1 className={s.options}>TECH_&_SKILLS</h1>
        </a>

        <a href="/#formation" onClick={() => toggleMenu()}>
          <h1 className={s.options}>FORMATION</h1>
        </a>

        <a href="/#projects" onClick={() => toggleMenu()}>
          <h1 className={s.options}>MY_PROJECTS</h1>
        </a>

        <a href="/#contact" onClick={() => toggleMenu()}>
          <h1 className={s.options}>CONTACT</h1>
        </a>
      </div>
    </section>
  );
};

export default Menu;
