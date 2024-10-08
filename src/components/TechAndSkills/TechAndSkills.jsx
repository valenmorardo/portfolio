import React from "react";

import TechCard from "./TechCard";

/* import {images} from "../../utils/index"; */
import { techStack, skills } from "../../utils/index";
import s from "./TechSkills.module.css";

const TechAndSkills = () => {
  return (
    <section className={s.container}>
      <h3 className={s.title}> TECHNOLOGIES and SKILLS</h3>
      <div className={s.techs}>
        <h1>TECHNOLOGIES</h1>
        <div className={s.cardsTechContainer}>
          {techStack.map((e) => (
            <TechCard data={e} />
          ))}
        </div>
      </div>

      <div className={s.skills}>
        <h1>SKILLS</h1>
        <div className={s.cardsSkillsContainer}>
          {skills.map((skill) => (
            <h2>{skill}</h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechAndSkills;
