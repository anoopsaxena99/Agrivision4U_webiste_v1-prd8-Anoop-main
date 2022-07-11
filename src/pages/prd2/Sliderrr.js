import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { FaStar } from "react-icons/fa";
import Feature from "../../components/prd2/Feature/Feature";
import { useState } from "react";
// import { SlideFocus } from "embla-carousel/embla-carousel-vanilla/slideFocus";
//import styled from 'styled-components';
function ImageSlider2({ pack, value }) {
  // console.log(value);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: value,
  };

  return (
    <Slider {...settings} className="sli">
      {pack.map((p, i) => {
        return (
          <>
            <div className="card-wrapper7">
              <div className="cardy7">
                <div className="card-ima7">
                  <Feature onepack={p} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
}
export default ImageSlider2;
