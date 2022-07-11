import React from "react";
import PropTypes from "prop-types";
import styles from "./coursescorrect.module.css";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/styles";
function CourseSuggestion(props) {
  const slider = React.createRef();
  const classes = useStyles();
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    appendDots: (dots) => (
      <div
        style={{
          width: "auto",

          left: "33%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dots">{i + 1}</div>,
  };
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6].map((num) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.box2}>
          <div className={styles.left}>
            <div className={styles.box2mini}></div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <p className={styles.heading}>Conquer CFTRI</p>
              <p className={styles.enrol}>1.3k Students Enrolled</p>
            </div>
            <div className={styles.bottom}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet,consecteturad Lorem ipsum dolor sit
                amet, consectetur ad. Lorem ipsum dolor sit amet,consecteturad
                Lorem ipsum dolor sit amet, consectetur a
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button3}>Enroll now</button>
                <button className={styles.button4}>Try for free</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.left}>
            <div className={styles.box2mini}></div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <p className={styles.heading}>Conquer CFTRI</p>
              <p className={styles.enrol}>1.3k Students Enrolled</p>
            </div>
            <div className={styles.bottom}>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet,consecteturad Lorem ipsum dolor sit
                amet, consectetur ad. Lorem ipsum dolor sit amet,consecteturad
                Lorem ipsum dolor sit amet, consectetur a
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.button3}>Enroll now</button>
                <button className={styles.button4}>Try for free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div>
      <div className="slider-width">
        <Slider ref={slider} {...settings}>
          {renderSlides()}
        </Slider>
        <button
          className={styles.button2}
          style={{ float: "left", marginLeft: "9vw", marginBottom: "4%" }}
          onClick={() => slider.current.slickPrev()}
        >
          Previous
        </button>
        <button
          className={styles.button2}
          style={{ float: "right", marginRight: "8vw", marginBottom: "5%" }}
          onClick={() => slider.current.slickNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
const useStyles = makeStyles(() => ({
  activeButton1: {
    background: "#0B6E4F !important",
    color: "#FFFFFF !important",
    fontWeight: "700 !important",
  },
  activeButton2: {
    color: "#0B6E4F !important",
    marginLeft: "0 !important",
  },
}));

export default CourseSuggestion;
