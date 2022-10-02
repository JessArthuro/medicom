import SvgAmbulance from "../../img/icons/facilities/ambulance.svg";
import SvgNurse from "../../img/icons/facilities/nurse.svg";
import SvgChurch from "../../img/icons/facilities/church.svg";
import SvgWaiting from "../../img/icons/facilities/waiting-area.svg";
import SvgMedicine from "../../img/icons/facilities/medicine.svg";
import SvgParking from "../../img/icons/facilities/parking.svg";

import style from "./Facilities.module.scss";
import ItemFacilities from "./ItemFacilities";

function Facilities() {
  return (
    <section className={`${style.section_facilities} container`}>
      <ItemFacilities 
        svgicon={SvgAmbulance} 
        title="ambulancia 24 horas"
      />
      <ItemFacilities 
        svgicon={SvgNurse} 
        title="enfermeras especiales" 
      />
      <ItemFacilities 
        svgicon={SvgChurch}
        title="lugares de adoración"
      />
      <ItemFacilities 
        svgicon={SvgWaiting}
        title="áreas de espera"
      />
      <ItemFacilities 
        svgicon={SvgMedicine}
        title="medicamentos recetados"
      />
      <ItemFacilities 
        svgicon={SvgParking}
        title="estacionamiento"
      />
    </section>
  );
}

export default Facilities;
