import BtnHero from "./BtnHero";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.hero_data}>
          <h1 className={styles.data_title}>
            Servicios médicos en los que puedes{" "}
            <span className={styles.marked_txt}>Confiar.</span>
          </h1>
          <p className={styles.data_description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            eaque quis impedit recusandae, assumenda id!
          </p>

          <div className={styles.hero_buttons}>
            <BtnHero href="about" title="leer más" />
            <BtnHero href="departments" title="departamentos" btn_primary={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
