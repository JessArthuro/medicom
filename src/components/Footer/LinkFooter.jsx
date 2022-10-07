import style from "./Footer.module.scss";

function LinkFooter({ includeicon, href, icon, name }) {
  return (
    <a
      // Creacion de condicional en los estilos para agregar un column-gap si el link incluye icono.
      className={`${style.link_footer} ${
        includeicon ? `${style.include_icon}` : ""
      }`}
      href={href}
    >
      <span className={style.icon_link}>{icon}</span> {name}
    </a>
  );
}

export default LinkFooter;
