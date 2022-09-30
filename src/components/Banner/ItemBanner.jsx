import style from "./Banner.module.scss";

function ItemBanner({ iconref, number, info }) {
  return (
    <div className={style.banner_item}>
      <img className={style.item_img} src={iconref} alt="icon_banner" />
      <h2 className={style.item_number}>{number}</h2>
      <span className={style.item_info}>{info}</span>
    </div>
  );
}

export default ItemBanner;
