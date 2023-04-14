import React, { useEffect, useState } from "react";

import Menu from "./Menu";

import s from "./Nav.module.css";
import {images} from "../../utils";
import { Twirl as Hamburger } from "hamburger-react";

const Nav = () => {
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 350);
      setIsMenuVisible(false);
    } else {
      setIsMenuOpen(true);
      setIsMenuVisible(true);
    }
  };

  //aca cierro el menu, si el ancho de la pantalla es mayor a 980px
  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth >= 1300) {
        setIsMenuOpen(false);
        setIsMenuVisible(false);
      } else {
        return null;
      }
    };
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className={s.header}>
      {!(screenWidth <= 1300) ? (
        <div className={s.contentPrimary}>
          <a href="/#top">
            <img src={images.logoNav} alt="xd" />
          </a>

          <a href="#top">
            <h1>HOME</h1>
          </a>

          <a href="#aboutme">
            <h1>ABOUT_ME</h1>
          </a>

          <a href="#techskills">
            <h1>TECH_&_SKILLS</h1>
          </a>

          <a href="#formation">
            <h1>FORMATION</h1>
          </a>

          <a href="#projects">
            <h1>MY_PROJECTS</h1>
          </a>

          <a href="#contact">
            <h1>CONTACT</h1>
          </a>
        </div>
      ) : (
        <div className={s.contentSecondary}>
          <a href="#top"><img src={images.logoNav} alt="xd" /></a>
          <Hamburger
            rounded
            role="button"
            label="Toggle menu"
            hideOutline={true}
            color="#272727"
            toggled={isMenuOpen}
            size={35}
            toggle={toggleMenu}
          ></Hamburger>
        </div>
      )}

      <div className={`${s.divmenu} ${!isMenuVisible ? s.closing : s.opening}`}>
        {isMenuOpen ? (
          <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        ) : null}
      </div>
    </header>
  );
};

export default Nav;
