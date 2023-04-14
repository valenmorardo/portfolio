import React from "react";
import { useState, useEffect } from "react";

import s from "./Hero.module.css";
import {images} from "../../utils";


const Home = () => {


  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const actualizarScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", actualizarScreenWidth);

    // Limpia el listener del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", actualizarScreenWidth);
    };
  }, []);



  
  return (
    <>
    {!(screenWidth <= 1300) ? (
         <section id="home" className={s.container}>
         <div className={s.data}>
           <span>Hello there! I&#39;m</span>
           <h1>Valentin Morardo</h1>
           <span>A full stack web developer</span>
   
           <h4>
             "Working hard is important, but there is something that matters more,
             believing in yourself"
           </h4>
   
           <a href="/CV_ValentinMorardo.pdf" target="_blank" rel="noreferrer">
             <button className={s.button}>GET_CURRICULUM</button>
           </a>
   
           <a href="/#contact" >
             <button className={s.button}>CONTACT_ME</button>
           </a>
         </div>
   
         <div className={s.img}>
           <img src={images.profilePic} alt="img not found" />
         </div>
       </section>
    ) :

    <section id="home" className={s.container}>
      
      <div className={s.img}>
           <img src={images.profilePic} alt="img not found" />
      </div>

      <div className={s.data}>
           <span>Hello there! I&#39;m</span>
           <h1>Valentin Morardo</h1>
           <span>A full stack web developer</span>
   
           <h4>
             "Working hard is important, but there is something that matters more,
             believing in yourself"
           </h4>
   
           <a href="/CV_ValentinMorardo.pdf" target="_blank" rel="noreferrer">
             <button className={s.button}>GET_CURRICULUM</button>
           </a>
   
           <a href="/#contact" >
             <button className={s.button}>CONTACT_ME</button>
           </a>
         </div>

    </section>
    }
    </>
   
  );
};

export default Home;
