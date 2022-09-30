import iconYears from "../../img/icons/banner/years.svg";
import iconSmile from "../../img/icons/banner/smileyface.svg";
import iconHeart from "../../img/icons/banner/heart.svg";
import iconAwards from "../../img/icons/banner/awards.svg";

import ItemBanner from "./ItemBanner";
import style from "./Banner.module.scss";

function Banner() {
  return (
    <section className={style.banner_container}>
      <h2 className={style.banner_title}>
        Conoce porque Medicom es el mejor hospital del país.
      </h2>
      <p className={style.banner_description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        molestiae, laudantium ipsum sapiente consequatur totam provident impedit
        cupiditate, architecto minima, saepe nulla illum a. Alias.
      </p>

      <div className={style.banner_content}>
        <ItemBanner
          iconref={iconYears}
          number="25"
          info="años de experiencia"
        />
        <ItemBanner 
          iconref={iconSmile} 
          number="284" 
          info="caras sonrientes" 
        />
        <ItemBanner
          iconref={iconHeart}
          number="176"
          info="trasplantes de corazón"
        />
        <ItemBanner
          iconref={iconAwards}
          number="142"
          info="premios obtenidos"
        />
      </div>
    </section>
  );
}

export default Banner;
