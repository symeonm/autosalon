import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../images/desktopImages/slide1.png";
import slide2 from "../../images/desktopImages/slideLeft.png";
import slide3 from "../../images/desktopImages/slide3.png";
import { CentralSlider, Paragraph } from "./HeroStyledComponent";
import { NavLink } from "react-router-dom";
import { AddButton } from "../Buttons/AddButton/AddButton";

// import EffectCoverflow from "swiper";
// import Pagination from "swiper";
// import Navigation from "swiper";

export const Hero = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        className="swiper"
      >
        <SwiperSlide>
          <AddButton />
          <img
            src={slide2}
            alt="slide_image"
            style={{
              width: "27%",
            }}
          />
          <CentralSlider src={slide1} alt="slide_image" />
          <img
            src={slide3}
            alt="slide_image"
            style={{
              width: "27%",
            }}
          />
        </SwiperSlide>
      </Swiper>
      <Paragraph>
        Citroën Jumper oder Peugeot Boxer 3,5t Light oder 3,5t Heavy Chassis
        4-Zylinder Turbodiesel, Euro 6d, Rußpartikelfilter Fahrerairbag
        Elektronische Wegfahrsperre, Zentralverriegelung mit Funkfernbedienung
        Scheibenbremsen vorne und hinten...
        <NavLink
          style={{
            marginLeft: "7px",
            color: "#000",
            fontFamily: "Roboto",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            textDecorationLine: "underline",
          }}
        >
          Mehr
        </NavLink>
      </Paragraph>
    </div>
  );
};
