import React from "react";
import s from './TechCard.module.css'

const TechCard = ({ data }) => {

  return (
    <>
      {data.JavaScript ? (
        <div className={s.card}>
          <img src={data.JavaScript} alt="JavaScript" />
          <h2>JavaScript</h2>
        </div>
      ) : data.ReactJS ? (
        <div className={s.card}>
          <img src={data.ReactJS} alt="ReactJS"/>
          <h2>ReactJS</h2>
        </div>
      ) : data.Redux ? (
        <div className={s.card}>
          <img src={data.Redux} alt="Redux"/>
          <h2>Redux</h2>
        </div>
      ) : data.HTML5 ? (
        <div className={s.card}>
          <img src={data.HTML5} alt="HTML5"/>
          <h2>HTML5</h2>
        </div>
      ) : data.CSS3 ? (
        <div className={s.card}>
          <img src={data.CSS3} alt="CSS3"/>
          <h2>CSS3</h2>
        </div>
      ) : data.NodeJS ? (
        <div className={s.card}>
          <img src={data.NodeJS} alt="NodeJS"/>
          <h2>NodeJS</h2>
        </div>
      ) : data.ExpressJS ? (
        <div className={s.card}>
          <img src={data.ExpressJS} alt="ExpressJS"/>
          <h2>ExpressJS</h2>
        </div>
      ) : data.MongoDB ? (
        <div className={s.card}>
          <img src={data.MongoDB} alt="MongoDB"/>
          <h2>MongoDB</h2>
        </div>
      ) : data.PostgreSQL ? (
        <div className={s.card}>
          <img src={data.PostgreSQL} alt="PostgreSQL"/>
          <h2>PostgreSQL</h2>
        </div>
      ) : data.Git ? (
        <div className={s.card}>
          <img src={data.Git} alt="Git"/>
          <h2>Git</h2>
        </div>
      ) : data.GitHub ? (
        <div className={s.card}>
          <img src={data.GitHub} alt="GitHub"/>
          <h2>GitHub</h2>
        </div>
      ) : null}
    </>
  );
};

export default TechCard;
