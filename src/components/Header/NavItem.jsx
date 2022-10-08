import styles from "./Header.module.scss";

function NavItem({ href, title, active, closeMenu }) {
  return (
    <li>
      <a
        // La propiedad closeMenu ejecutara la funcion closeMenu declara en su contenedor padre.
        className={`${styles.nav__link} ${active ? `${styles.active}` : ""}`}
        href={href}
        onClick={closeMenu}
      >
        {title}
      </a>
    </li>
  );
}

export default NavItem;
