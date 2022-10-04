import SectionTitle from "../SectionTitle/SectionTitle";
import ArticleBlog from "./ArticleBlog";
import style from "./Blog.module.scss";

function Blog() {
  return (
    <section className={`${style.section_blog} container`} id="blog">
      <SectionTitle text="lo último del blog" />

      <div className={style.article_content}>
        <ArticleBlog
          imgnumber="1"
          imgalt="Doctor chocando la mano con un niño"
          title="Cómo manejar a sus hijos de dolencias misteriosas"
          date="30 sep, 2022"
          comments="22 comentarios"
        />
        <ArticleBlog
          imgnumber="2"
          imgalt="Mujer de la tercera edad saludando a un doctor"
          title="Mejora la tasa de supervivencia del cáncer de pulmón en España"
          date="22 ago, 2022"
          comments="18 comentarios"
        />
        <ArticleBlog
          imgnumber="3"
          imgalt="Doctores analizando estudios de rayos x"
          title="Estado actual de las disparidades en neurología y formación neurológica"
          date="14 jul, 2022"
          comments="08 comentarios"
        />
      </div>
    </section>
  );
}

export default Blog;
