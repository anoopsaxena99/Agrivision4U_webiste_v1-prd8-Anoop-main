import React from "react";
import styles from "./sliderr.module.css";
import Book from "./imageofbook.jpg";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
function SubjectCard({ onesub }) {
  console.log("kh", onesub);
  const history = useHistory();
  const handleClick =()=> history.push(`/courses/subject=${onesub}` )
  
  return (
    <>
            <div className={styles.SliderContainer} onClick={handleClick}>
            <div className={styles.cardContainer}>
              <img className={styles.img} src={Book} alt="" />

              <div className={styles.cardHeading}>
                <p>{onesub.name}</p>
              </div>
              <div className={styles.cardEnrolled}>
                <p>1.2k students</p>
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
    </>
  );
}
const ViewLink = styled(Link)`
  text-decoration: none;
`;
export default SubjectCard;
