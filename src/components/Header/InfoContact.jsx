import styles from "./Header.module.scss";

function InfoContact({ icon, title, description }) {
  return (
    <div className={styles.info__contact}>
      <span className={styles.icon__contact}>{icon}</span>
      <div className="contact__details">
        <p className={styles.title__contact}>{title}</p>
        <span className={styles.description__contact}>{description}</span>
      </div>
    </div>
  );
}

export default InfoContact;
