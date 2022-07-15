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
import PricedLayout from "./PricedLayout";
import { Link } from "react-router-dom";

const FreeAndMegaTestSeries = (props) => {
  
  return (
    <div className={styles.main}>
      
          <div className={styles.left}>
           
            <p className={styles.mainHeading}>Free Test</p>
            <Slider
          arrows={true}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={false}
          infinite={true}
          prevArrow={<img src={leftarrow} alt="left arrow" />}
          nextArrow={<img src={rightarrow} alt="right arrow" />}
        >
            {props.free.length &&
        props.free.map((f, i) => {
          let url = "/testseries/" + f._id;

          return(
            <ViewLink key ={f._id} to={{pathname: url, state: { testSeriesId: f._id, name: f.name }}}>
            <div className={styles.container}>
              <div className={styles.imageContainer}>
                <img src={f.bigImage? f.bigImage: image1} className={styles.img} />
              </div>
              <div className={styles.top}>
                {console.log(f.name)}
                <p className={styles.heading}>{f.name}</p>
                <p className={styles.amount}>₹ {f.price}</p>
              </div>
              <div className={styles.enroll}>1.2k students enrolled</div>
              <div className={styles.feature}>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  {f.fullLengthTestCount} Full Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  {f.sectionalTestCount} Sectional Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  {f.previousTestCount} Previous Tests
                </div>
                <div className={styles.points}>
                  <img
                    src={tick}
                    style={{ transform: "scale(0.75)" }}
                    alt="tick mark"
                  />{" "}
                  {f.modelTestCount} Mockups
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.but}>View Test</button>
              </div>
            </div>
            </ViewLink>)})}
            </Slider>
            
          </div>

      <div className={styles.right}>
        <p className={styles.mainHeading}>Mega Test Series</p>
        <Slider
          arrows={true}
          slidesToShow={3}
          slidesToScroll={2}
          autoplay={false}
          infinite={false}
          prevArrow={<img src={leftarrow} alt="left arrow" />}
          nextArrow={<img src={rightarrow} alt="right arrow" />}
        >
          {props.priced.length &&
            props.priced.map((p, i) => {
              let url = "/testseries/" + p._id;
              return (
                <ViewLink key ={p._id} to={{pathname: url, state: { testSeriesId: p._id, name: p.name }}}>
              <PricedLayout p={p} i={i}/>
              </ViewLink>
              )
            })}
        </Slider>
      </div>
    </div>
  );
};
const ViewLink = styled(Link)`
text-decoration: none;
color: black;
font-style: normal;
font-weight: normal;
`;

export default FreeAndMegaTestSeries;
