import style from "./Departments.module.scss";

function CardDepartment({ imgref, titlecard }) {
  return (
    <div className={style.card_department}>
      <img
        className={style.img_department}
        src={imgref}
        alt="icon_department"
      />
      <h3 className={style.title_department}>{titlecard}</h3>
      <p className={style.description_department}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        veniam minus sapiente veritatis consectetur ad.
      </p>
      <button className={style.btn_department}>leer más</button>
    </div>
  );
}

export default CardDepartment;
