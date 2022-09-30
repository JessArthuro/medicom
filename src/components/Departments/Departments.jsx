import iconGinecology from "../../img/icons/ginecologia.svg";
import iconNeurology from "../../img/icons/neurologia.svg";
import iconCardiology from "../../img/icons/cardiologia.svg";
import iconPulmonology from "../../img/icons/neumologia.svg";
import iconOphthalmology from "../../img/icons/oftalmologia.svg";
import iconPediatrics from "../../img/icons/pediatria.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

import CardDepartment from "./CardDepartment";
import style from "./Departments.module.scss";

function Departments() {
  return (
    <Swiper
      spaceBetween={20}
      // slidesPerView={4}
      navigation={{
        prevEl: `#prev_department`,
        nextEl: `#next_department`,
      }}
      speed={800}
      breakpoints={{
        980: {
          slidesPerView: 4
        },
        750: {
          slidesPerView: 3,
        },
        560: {
          slidesPerView: 2,
        }
      }}
      modules={[Navigation]}
      className={style.slider_content}
    >
      {/* Slide #1 */}
      <SwiperSlide>
        <CardDepartment imgref={iconGinecology} titlecard="Ginecología" />
      </SwiperSlide>

      {/* Slide #2 */}
      <SwiperSlide>
        <CardDepartment imgref={iconNeurology} titlecard="Neurología" />
      </SwiperSlide>

      {/* Slider #3 */}
      <SwiperSlide>
        <CardDepartment imgref={iconCardiology} titlecard="Cardiología" />
      </SwiperSlide>

      {/* Slider #4 */}
      <SwiperSlide>
        <CardDepartment imgref={iconPulmonology} titlecard="Neumología" />
      </SwiperSlide>

      {/* Slider #5 */}
      <SwiperSlide>
        <CardDepartment imgref={iconOphthalmology} titlecard="Oftalmología" />
      </SwiperSlide>

      {/* Slider #6 */}
      <SwiperSlide>
        <CardDepartment imgref={iconPediatrics} titlecard="Pediatría" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Departments;
