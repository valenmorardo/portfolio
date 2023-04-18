import React from "react";

import s from "./ProjectCard.module.css";

const ProjectCard = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.divImage}>
        <img src={data.logo} className={s.image}/>
      </div>

      <div className={s.content}>
        <h1 className={s.title}>{data.title}</h1>
        <span className={s.description}>{data.description}</span>

        <div className={s.techStack}>
          <h3>TechStack</h3>
          {data.techStack.map((e) => (
            <img src={e} width="5%"/>
          ))}
        </div>

        <div className={s.divBtn}>
          <a href={data.repositoryLink} target="_blank" rel="noreferrer">
            <button>GitHub</button>
          </a>

          <a href={data.demoLink} target="_blank" rel="noreferrer">
            <button>Demo</button>
          </a>

          <a href={data.videoLink} target="_blank" rel="noreferrer">
            <button>Video</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
