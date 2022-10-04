import style from "./Doctors.module.scss";

function ItemDoctor({ imgnumber, name, specialty }) {
  return (
    <div className={style.item_doctor}>
      <img
        className={style.doctor_img}
        src={require(`../../img/doctors/doc${imgnumber}.jpg`)}
        alt={name}
      />

      <div className={style.doctor_info}>
        <h4 className={style.doctor_name}>{name}</h4>
        <span className={style.doctor_specialty}>{specialty}</span>
      </div>
    </div>
  );
}

export default ItemDoctor;
