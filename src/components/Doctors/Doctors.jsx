import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import SectionTitle from "../SectionTitle/SectionTitle";
import style from "./Doctors.module.scss";
import ItemDoctor from "./ItemDoctor";

function Doctors() {
  return (
    <section className={`${style.section_doctors} container`} id="doctors">
      <SectionTitle text="equipo de doctores" />

      <Swiper
        loop={true}
        spaceBetween={20}
        speed={700}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: "#pagination-doctors",
          clickable: true,
        }}
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
        modules={[Autoplay, Pagination]}
        className={style.doctors_slider}
      >
        {/* Doctor #1 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="1"
            name="dr. victor cabrera"
            specialty="neurología"
          />
        </SwiperSlide>

        {/* Doctor #2 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="2"
            name="dra. ana estrada"
            specialty="ginecología"
          />
        </SwiperSlide>

        {/* Doctor #3 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="3"
            name="dr. ricardo escobar"
            specialty="neumología"
          />
        </SwiperSlide>

        {/* Doctor #4 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="4"
            name="dra. carmen tapia"
            specialty="pediatría"
          />
        </SwiperSlide>

        {/* Doctor #5 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="5"
            name="dr. mario vázquez"
            specialty="cardiología"
          />
        </SwiperSlide>

        {/* Doctor #6 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="6"
            name="dra. isabel beltran"
            specialty="oftalmología"
          />
        </SwiperSlide>

        {/* Doctor #7 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="7"
            name="dr. sergio delgado"
            specialty="neurología"
          />
        </SwiperSlide>

        {/* Doctor #8 */}
        <SwiperSlide>
          <ItemDoctor
            imgnumber="8"
            name="dra. diana guzmán"
            specialty="ginecología"
          />
        </SwiperSlide>
      </Swiper>

      <div className={style.pagination_doctors} id="pagination-doctors"></div>
    </section>
  );
}

export default Doctors;
