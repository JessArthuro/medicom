import styles from "./Hero.module.scss";

function BtnHero({ title, btn_primary }) {
  return (
    <button
      className={`${styles.btn_hero} ${
        btn_primary ? `${styles.btn_departments}` : ""
      }`}
    >
      {title}
    </button>
  );
}

export default BtnHero;
