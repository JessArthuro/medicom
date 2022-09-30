import style from "./Blog.module.scss";
import { GoCalendar, GoCommentDiscussion } from "react-icons/go";

function ArticleBlog({ imgnumber, imgalt, title, date, comments }) {
  return (
    <div className={style.article_blog}>
      <img
        className={style.article_img}
        src={require(`../../img/blog${imgnumber}.jpg`)}
        alt={imgalt}
      />

      <h4 className={style.article_title}>{title}</h4>
      <p className={style.article_description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
        perferendis delectus voluptates. Debitis ullam laboriosam quam eius
        accusamus quo consectetur.
      </p>

      <div className={style.article_details}>
        <span className={style.date}>
          <GoCalendar />
          {date}
        </span>
        <span className={style.comments}>
          <GoCommentDiscussion />
          {comments}
        </span>
      </div>
    </div>
  );
}

export default ArticleBlog;
