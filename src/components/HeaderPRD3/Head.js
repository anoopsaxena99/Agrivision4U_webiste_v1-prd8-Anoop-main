import React from "react";
import styles from "./head.module.css";
import { FcClock } from "react-icons/fc";
import image1 from "./image1.jpg";
function Head(props) {
  // console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Gate XE Mega Test Mock</h2>
        <div className={styles.questionpaper}>
          <div className={styles.questions}>
            <h6 className={styles.number}>100</h6>
            <h6 className={styles.text}>Question</h6>
          </div>
          <div className={styles.marks}>
            <h6 className={styles.number}>200</h6>
            <h6 className={styles.text}>Marks</h6>
          </div>
          <div className={styles.time}>
            <h6 className={styles.number}>60</h6>
            <h6 className={styles.text}>Minutes</h6>
          </div>
        </div>
        <div className={styles.footer}>
          <FcClock className={styles.symbol}></FcClock>
          <h3 className={styles.message}>Available till 23rd March 11:59 pm</h3>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.but}>
          <button className={styles.button1}>Take Test</button>
        </div>
        <img src={image1} className={styles.img} alt="Student" />
      </div>
    </div>
  );
}

export default Head;
