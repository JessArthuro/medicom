import styles from "./Header.module.scss";

function SocialLink({ link, icon }) {
  return (
    <a
      className={styles.social__link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default SocialLink;
