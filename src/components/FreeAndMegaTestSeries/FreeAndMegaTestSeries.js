import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./m2.jpeg";
import tick from "./Rightmark.png";
import leftarrow from "./lefticon.png";
import rightarrow from "./righticon.png";
import styles from "./FreeAndMegaTestSeries.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const renderSlides = () =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
    <div className={styles.slider}>
      <div className={styles.container} key={num}>
        <div className={styles.imageContainer}>
          <img src={image1} className={styles.img} />
        </div>

        <div className={styles.top}>
          <p className={styles.heading}>XE - A : Mega Test Series {num}</p>
          <p className={styles.amount}>₹ 3,999</p>
        </div>
        <div className={styles.enroll}>1.2k students enrolled</div>
        <div className={styles.feature}>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}> 4 Full Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}> 0 Sectional Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}>8 Previous Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}>8 Mockups</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.but}>View Test</button>
        </div>
      </div>
    </div>
  ));
const FreeAndMegaTestSeries = (props) => {
  console.log(props.arr2[0], "props wale array");
  return (
    <div className={styles.main}>
      {props.arr2.length &&
        props.arr2.map((Obj, i) => (
          <div className={styles.left}>
            <p className={styles.mainHeading}>{Obj.name}</p>
            <div className={styles.container}>
              <div className={styles.imageContainer}>
                <img src={image1} className={styles.img} />
              </div>
              <div className={styles.top}>
                <p className={styles.heading}>XE - A : Mega Test Series </p>
                <p className={styles.amount}>₹ 3,999</p>
              </div>
              <div className={styles.enroll}>1.2k students enrolled</div>
              <div className={styles.feature}>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  4 Full Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  0 Sectional Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  8 Previous Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  8 Mockups
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.but}>View Test</button>
              </div>
            </div>
          </div>
        ))}
      <div className={styles.right}>
        <p className={styles.mainHeading}>Mega Test Series</p>
        <Slider
          arrows={true}
          slidesToShow={3}
          slidesToScroll={2}
          autoplay={false}
          infinite={true}
          prevArrow={<img src={leftarrow} alt="left arrow" />}
          nextArrow={<img src={rightarrow} alt="right arrow" />}
        >
          {renderSlides()}
        </Slider>
      </div>
    </div>
  );
};

export default FreeAndMegaTestSeries;
