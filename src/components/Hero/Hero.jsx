import React from "react";

import s from "./Hero.module.css";
import { images } from "../../utils";

const Home = () => {

  return (
    <section id="home" className={s.section}>
      <h3 className={s.title}>HERO</h3>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.data}>
            <span>Hello there! I&#39;m</span>
            <h1>Valentin Morardo</h1>
            <span>A full stack web developer</span>
          </div>

          <div className={s.frase}>
            <h4>
              "Working hard is important, but there is something that matters
              more, believing in yourself"
            </h4>
          </div>

          <div className={s.botones}>
            <a href="/CV_Valentin_Morardo.pdf" target="_blank" rel="noreferrer">
              <button className={s.button}>GET_CURRICULUM</button>
            </a>

            <a href="/#contact">
              <button className={s.button}>CONTACT_ME</button>
            </a>
          </div>
        </div>

        <div className={s.divImg}>
          <img src={images.profilePic} alt="img not found"     className={s.image}/>
        </div>

      </div>
    </section>
  );
};

export default Home;
