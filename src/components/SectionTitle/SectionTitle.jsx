import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import style from "./SectionTitle.module.scss";

function SectionTitle({ text, navigation }) {
  return (
    <div className={style.title_container}>
      <h2 className={style.title}>{text}</h2>

      {/* Condicional para mostrar los botones de navegacion solo cuando navigation es un valor verdadero. */}
      {navigation ? (
        <div className={style.btn_content}>
          <button className={style.btn_navigation} id="prev_department">
            <BiChevronLeft className={style.icon_navigation} />
          </button>
          <button className={style.btn_navigation} id="next_department">
            <BiChevronRight className={style.icon_navigation} />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SectionTitle;
