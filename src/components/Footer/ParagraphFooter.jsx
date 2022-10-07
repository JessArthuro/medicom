import style from "./Footer.module.scss";

function ParagraphFooter({ text }) {
  return <p className={style.paragraph_footer}>{text}</p>;
}

export default ParagraphFooter;
