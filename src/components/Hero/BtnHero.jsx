import styles from "./Hero.module.scss";

function BtnHero({ href, title, btn_primary }) {
  return (
    <a
      href={`#${href}`}
      className={`${styles.btn_hero} ${
        btn_primary ? `${styles.btn_departments}` : ""
      }`}
    >
      {title}
    </a>
  );
}

export default BtnHero;
