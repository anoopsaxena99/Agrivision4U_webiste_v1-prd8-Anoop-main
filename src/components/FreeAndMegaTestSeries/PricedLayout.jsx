import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./m2.jpeg";
import tick from "./Rightmark.png";
import styles from "./PricedTestSeries.module.css";
import { useState, useEffect } from "react";


const PricedLayout = (props) => {
   const p=props.p;
   const i=props.i;
  return (
    
      <>
          <div className={styles.slider}>
      <div className={styles.container} key={i}>
        <div className={styles.imageContainer}>
          <img src={image1} className={styles.img} />
        </div>

        <div className={styles.top}>
          <p className={styles.heading}>{p.name} </p>
          <p className={styles.amount}>₹ {p.price}</p>
        </div>
        <div className={styles.enroll}>1.2k students enrolled</div>
        <div className={styles.feature}>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}> {p.fullLengthTestCount} Full Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}> {p.sectionalTestCount} Sectional Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}>{p.previousTestCount} Previous Tests</p>
          </div>
          <div className={styles.points}>
            <img
              src={tick}
              style={{ transform: "scale(0.75)", display: "inline" }}
              alt="tick mark"
            />{" "}
            <p className={styles.data}>{p.modelTestCount} Mockups</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.but}>View Test</button>
        </div>
      </div>
    </div>
    
       
      </>

  );
};

export default PricedLayout;
