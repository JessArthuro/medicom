import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";
import style from "./GoToTop.module.scss";

function GoToTop() {
  // Inicializacion del boton usando el hook useState.
  const [isVisible, setIsVisible] = useState(false);

  // Creacion de la funcion goToBtn para dirigir al usuario a la parte superior de la pagina.
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    // Establecimiento de medida para que a partir de esta cifra aparezca el boton.
    let heightToHidden = 400;
    // Por medio de esta funcion se obtiene la cantidad de scroll que se ha hecho en la pagina.
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winScroll);

    // Creacion de condicional, si el valor obtenido del scroll en el documento es mayor a la medida que se establecio, el boton aparece.
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Se hace uso del hook useEffect para añadir el evento de scroll a la funcion listenToScroll.
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <button
      // Creacion de estilo condicional para mostrarlo solo cuando isVisible es un valor verdadero.
      className={`${style.btn_top} ${isVisible ? `${style.isvisible}` : ""}`}
      onClick={goToBtn}
    >
      <BiChevronUp className={style.icon_top} />
    </button>
  );
}

export default GoToTop;
