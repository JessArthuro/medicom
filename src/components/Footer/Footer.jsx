import SocialLinkFooter from "./SocialLinkFooter";
import TitleFooter from "./TitleFooter";
import ParagraphFooter from "./ParagraphFooter";
import LinkFooter from "./LinkFooter";

import { FiMapPin, FiClock } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import * as GrommetIcons from "react-icons/gr";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.section_footer}>
      <div className="container">
        <div className={style.footer_content}>
          {/* Seccion logo principal y links a redes sociales. */}
          <div>
            <img
              className={style.footer_logo}
              src={require("../../img/logo-v2.png")}
              alt="Icono Medicom"
            />

            <div className={style.social_links}>
              <SocialLinkFooter
                link="https://www.facebook.com"
                icon={<GrommetIcons.GrFacebookOption />}
              />
              <SocialLinkFooter
                link="https://www.twitter.com"
                icon={<GrommetIcons.GrTwitter />}
              />
              <SocialLinkFooter
                link="https://www.pinterest.com.mx/"
                icon={<GrommetIcons.GrPinterest />}
              />
              <SocialLinkFooter
                link="https://mx.linkedin.com/"
                icon={<GrommetIcons.GrLinkedinOption />}
              />
            </div>
          </div>

          {/* Seccion sobre Medicom */}
          <div>
            <TitleFooter text="sobre medicom" />
            <ParagraphFooter text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium voluptatibus voluptas vitae quia. Enim et amet nulla officia architecto, magni necessitatibus eligendi fuga sequi esse impedit soluta tempora est." />
            <ParagraphFooter text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, accusantium eligendi nam maxime sint saepe consectetur! Animi officiis mollitia totam." />
          </div>

          {/* Seccion enlaces rapidos */}
          <div>
            <TitleFooter text="enlaces rápidos" />
            <div className={style.footer_links}>
              <LinkFooter href="#home" name="inicio" />
              <LinkFooter href="#departments" name="departamentos" />
              <LinkFooter href="#doctors" name="doctores" />
              <LinkFooter href="#blog" name="blog" />
              <LinkFooter href="#facilities" name="instalaciones" />
            </div>
          </div>

          {/* Seccion detalles de contacto */}
          <div>
            <TitleFooter text="detalles de contacto" />
            <div className={style.footer_links}>
              <LinkFooter
                includeicon={true}
                href="https://goo.gl/maps/byHWNtBbVprHeuq48"
                icon={<FiMapPin />}
                name="4800 Secc 16, Tlalpan, Ciudad de México, CDMX"
              />
              <LinkFooter
                includeicon={true}
                href="mailto:info@medicom.com"
                icon={<MdOutlineEmail />}
                name="info@medicom.com"
              />
              <LinkFooter
                includeicon={true}
                href="tel:+5218889863456"
                icon={<BiPhoneCall />}
                name="(+52) 888-986-3456"
              />

              <span className={style.hours_txt}>
                <FiClock className={style.hours_icon} />
                Lunes - Viernes: 09am - 18pm
              </span>
            </div>
          </div>
        </div>

        {/* Seccion sobre la informacion del desarrollador */}
        <div className={style.info_dev}>
          <span>
            Sitio web desarrollado por{" "}
            <a
              className={style.link_dev}
              href="https://github.com/JessArthuro?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              JS Arthuro
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
