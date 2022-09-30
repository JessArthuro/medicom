import styles from "./Header.module.scss";

function NavItem({ href, title, active }) {
  return (
    <li>
      <a
        className={`${styles.nav__link} ${active ? `${styles.active}` : ""}`}
        href={href}
      >
        {title}
      </a>
    </li>
  );
}

export default NavItem;
