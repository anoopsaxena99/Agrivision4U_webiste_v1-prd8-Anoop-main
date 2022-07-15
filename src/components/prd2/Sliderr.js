import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Book from "./imageofbook.jpg";
import styles from "./sliderr.module.css";
import SubjectCard from "./subjectCard";
import { useState, useEffect } from "react";
import { baseURL } from "../../Apis";

function ImageSlider({ subject }) {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  console.log(subject);

  const [packs, setpacks] = useState([]);
  let name = subject;
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/package?subject=${name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setpacks(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  }, [name]);

  if (packs != null) console.log("packs :- ", packs);

  return (
    <>
      {packs == 0 ? (
        <img
          src="/images/coming-soon.svg"
          alt="coming-soon"
          style={{ height: "600px", "margin-left": "250px" }}
        ></img>
      ) : (
        <>
          <Slider {...settings}>
            {packs[0].packages.map((s) => {
              return <SubjectCard onesub={s} />;
            })}
          </Slider>
        </>
      )}
    </>
  );
}

export default ImageSlider;
