import React, { useState } from "react";
import { BiPhoneCall, BiMenu, BiX } from "react-icons/bi";
import SocialLink from "./SocialLink";
import * as GrommetIcons from "react-icons/gr";

import logo from "../../img/logo.png";
import InfoContact from "./InfoContact";
import { VscDeviceMobile } from "react-icons/vsc";
import { FiMapPin } from "react-icons/fi";
import { BsCalendar3 } from "react-icons/bs";

import NavItem from "./NavItem";
import styles from "./Header.module.scss";

function Header() {
  const [menu, setMenu] = useState(false);

  // Funcion para alternar el valor de menu en el useState. Es decir, si el valor es true lo cambiara a false y viceversa.
  const handleMenu = () => {
    setMenu(!menu);
  };

  // Funcion para remover el menu cuando se hace click en un link de la navegacion.
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      {/* Seccion con el numero de emergencias y links a sus redes sociales. */}
      <div
        // Con ayuda del operador ternario preguntamos si el valor de menu es true, aplica el estilo open y sino, no aplica ningun estilo extra.
        className={`${styles.header__secondary} ${
          menu ? `${styles.open}` : ""
        }`}
        id="header-secondary"
      >
        <p className={styles.info__emergency}>
          <BiPhoneCall className={styles.info__icon} /> Servicio de emergencia y
          ambulancia las 24 horas: +321 789 65 4812
        </p>
        <div className={styles.social__content}>
          <SocialLink
            link="https://www.facebook.com"
            icon={<GrommetIcons.GrFacebookOption />}
          />
          <SocialLink
            link="https://www.twitter.com"
            icon={<GrommetIcons.GrTwitter />}
          />
          <SocialLink
            link="https://www.pinterest.com.mx/"
            icon={<GrommetIcons.GrPinterest />}
          />
          <SocialLink
            link="https://mx.linkedin.com/"
            icon={<GrommetIcons.GrLinkedinOption />}
          />
        </div>
      </div>

      {/* Seccion logo principal e informacion de contacto */}
      <div className={styles.header__main}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div
          className={`${styles.header__content} ${
            menu ? `${styles.open}` : ""
          }`}
        >
          <InfoContact
            icon={<VscDeviceMobile />}
            title="Llámanos ahora"
            description="+1 888-986-3456"
          />
          <InfoContact
            icon={<FiMapPin />}
            title="4800 Secc 16, Tlalpan"
            description="Ciudad de México, CDMX"
          />
          <InfoContact
            icon={<BsCalendar3 />}
            title="Lunes - Viernes"
            description="09:00am - 18:00pm"
          />
        </div>
        {/* Al hacer click en el boton llamamos a la funcion handleMenu que va alterar el valor del useState. */}
        <button className={styles.btn__menu} onClick={handleMenu}>
          <BiMenu />
        </button>
        <button
          className={`${styles.btn__close} ${menu ? `${styles.open}` : ""}`}
          onClick={handleMenu}
        >
          <BiX />
        </button>
      </div>

      {/* Seccion menu de navegacion principal. */}
      <nav className={styles.nav__menu}>
        <ul className={`${styles.nav__list} ${menu ? `${styles.open}` : ""}`}>
          <NavItem
            href="#home"
            title="inicio"
            active={true}
            closeMenu={closeMenu}
          />
          <NavItem
            href="#departments"
            title="departamentos"
            closeMenu={closeMenu}
          />
          <NavItem href="#doctors" title="doctores" closeMenu={closeMenu} />
          <NavItem href="#blog" title="blog" closeMenu={closeMenu} />
          <NavItem href="#contact" title="contáctenos" closeMenu={closeMenu} />
        </ul>
        <a href="#form-dating" className={styles.nav__btn}>
          Agendar una cita
        </a>
      </nav>
    </header>
  );
}

export default Header;
