import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Book from "./imageofbook.jpg";
import styles from "./sliderr.module.css";
function ImageSlider() {
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  return (
    <Slider {...settings}>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt=""/>

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
      <div className={styles.SliderContainer}>
        <div className={styles.cardContainer}>
          <img className={styles.img} src={Book} alt="" />

          <div className={styles.cardHeading}>
            <p>XE - A : Engineering Maths</p>
          </div>
          <div className={styles.cardEnrolled}>
            <p>1.2k students enrolled</p>
          </div>
          <div className={styles.cardProductRating}>
            <span className={styles.cardRating}>4.7</span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardStar}>
              <FaStar></FaStar>
            </span>
            <span className={styles.cardDetails}>(218248)</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default ImageSlider;
