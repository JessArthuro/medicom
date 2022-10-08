import iconGinecology from "../../img/icons/departments/ginecologia.svg";
import iconNeurology from "../../img/icons/departments/neurologia.svg";
import iconCardiology from "../../img/icons/departments/cardiologia.svg";
import iconPulmonology from "../../img/icons/departments/neumologia.svg";
import iconOphthalmology from "../../img/icons/departments/oftalmologia.svg";
import iconPediatrics from "../../img/icons/departments/pediatria.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";

import CardDepartment from "./CardDepartment";
import style from "./Departments.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

function Departments() {
  return (
    <section className={`${style.section_departments} container`} id="departments">
      <SectionTitle text="departamentos médicos" navigation={true} />
      <Swiper
        spaceBetween={20}
        // slidesPerView={4}
        navigation={{
          prevEl: `#prev_department`,
          nextEl: `#next_department`,
        }}
        speed={700}
        breakpoints={{
          980: {
            slidesPerView: 4,
          },
          750: {
            slidesPerView: 3,
          },
          560: {
            slidesPerView: 2,
          },
        }}
        modules={[Navigation]}
        className={style.slider_content}
      >
        {/* Department #1 */}
        <SwiperSlide>
          <CardDepartment imgref={iconGinecology} titlecard="Ginecología" />
        </SwiperSlide>

        {/* Department #2 */}
        <SwiperSlide>
          <CardDepartment imgref={iconNeurology} titlecard="Neurología" />
        </SwiperSlide>

        {/* Department #3 */}
        <SwiperSlide>
          <CardDepartment imgref={iconCardiology} titlecard="Cardiología" />
        </SwiperSlide>

        {/* Department #4 */}
        <SwiperSlide>
          <CardDepartment imgref={iconPulmonology} titlecard="Neumología" />
        </SwiperSlide>

        {/* Department #5 */}
        <SwiperSlide>
          <CardDepartment imgref={iconOphthalmology} titlecard="Oftalmología" />
        </SwiperSlide>

        {/* Department #6 */}
        <SwiperSlide>
          <CardDepartment imgref={iconPediatrics} titlecard="Pediatría" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Departments;
