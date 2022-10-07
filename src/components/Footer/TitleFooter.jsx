import style from "./Footer.module.scss";

function TitleFooter({ text }) {
  return <h4 className={style.title_footer}>{text}</h4>;
}

export default TitleFooter;
