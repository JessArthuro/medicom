// Segunda opcion de importacion de archivos svg. Se manda a llamar como un componente: <SvgMedicine />
// import { ReactComponent as SvgMedicine } from "../../img/icons/facilities/ambulance.svg";
import style from "./Facilities.module.scss";

function ItemFacilities({ svgicon, title }) {
  return (
    <div className={style.item_facilities}>
      <div className={style.item_picture}>
        <img className={style.item_img} src={svgicon} alt="icon_facilities" />
      </div>

      <div className={style.item_data}>
        <h3 className={style.item_title}>{title}</h3>
        <p className={style.item_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi
          minus animi. Dolor, harum ea?
        </p>
      </div>
    </div>
  );
}

export default ItemFacilities;
