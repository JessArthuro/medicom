import style from "./Footer.module.scss";

function SocialLinkFooter({ link, icon }) {
  return (
    <a
      className={style.social_linkfooter}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

export default SocialLinkFooter;
