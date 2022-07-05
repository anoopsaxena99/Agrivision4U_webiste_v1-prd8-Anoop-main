import React from "react";
import styles from "./activity.module.css";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import food from "./food.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
function Activity({ items, name, courseId, progress }) {
  const percentage = 12.5;
  console.log(name);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.progressbar}>
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `#13AE7E`,
                textColor: "#0B6E4F",
                width: "100px",
              })}
            ></CircularProgressbarWithChildren>
          </div>
          <div className={styles.contentOfBar}>
            <p className={styles.number}>{percentage}%</p>
            <p className={styles.text}>PROGRESS</p>
          </div>
          <p className={styles.topic}>5/7 Topics Completed</p>
          <div className={styles.streak}>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Current Streak</p>
            </div>
            <div className={styles.streakContent}>
              <p className={styles.streakNumber}>8</p>
              <p className={styles.streakText}>Max Streak</p>
            </div>
          </div>
          <div className={styles.subjects}>
            <p className={styles.heading}>Start Learning</p>
            <Design1>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 1</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 2</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 3</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 4</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 5</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 6</p>
              </div>
              <div className={styles.list}>
                <CircleOutlinedIcon
                  className={styles.icon}
                ></CircleOutlinedIcon>
                <p className={styles.point}>Chapter 7</p>
              </div>
            </Design1>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.upper}>
            <img src={food} alt="food" className={styles.img} />
            <p className={styles.upperHeading}>{name}</p>
            <div className={styles.upperIcons}>
              <div className={styles.upperIcon}>
                <PlayCircleIcon className={styles.uicon}></PlayCircleIcon>
                <p className={styles.upperText}>Expert Lectures</p>
              </div>
              <div className={styles.upperIcon}>
                <BorderColorIcon className={styles.uicon}></BorderColorIcon>
                <p className={styles.upperText}>5 Sectional Tests</p>
              </div>
              <div className={styles.upperIcon}>
                <FormatListBulletedIcon
                  className={styles.uicon}
                ></FormatListBulletedIcon>
                <p className={styles.upperText}>20 Chapter Notes</p>
              </div>
            </div>
          </div>
          <div className={styles.lower}>
            <div className={styles.lowerTop}>
              <p className={styles.lowerHeading}>Mathematics</p>
              <div className={styles.horizontalProgressBar}>
                <div className={styles.horizontalbar}>
                  <div
                    className={styles.progressShow}
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className={styles.progressBarText}>5/7 Topics Completed</p>
              </div>
            </div>
            <div className={styles.lowerBottom}>
              <div className={styles.lowerBottomOptions}>
                <div className={styles.lowerBottomPoints}>
                  <CheckCircleRoundedIcon
                    className={styles.lowerBottomicons}
                  ></CheckCircleRoundedIcon>
                  <p className={styles.lowerBottomText}>Chap1Topic1</p>
                </div>
                <div className={styles.lowerBottomPoints}>
                  <CheckCircleRoundedIcon
                    className={styles.lowerBottomicons}
                  ></CheckCircleRoundedIcon>
                  <p className={styles.lowerBottomText}>Chap1Topic2</p>
                </div>

                <div className={styles.lowerBottomPoints}>
                  <CheckCircleRoundedIcon
                    className={styles.lowerBottomicons}
                  ></CheckCircleRoundedIcon>
                  <p className={styles.lowerBottomText}>Chap1Topic3</p>
                </div>
                <div className={styles.lowerBottomPoints}>
                  <CheckCircleRoundedIcon
                    className={styles.lowerBottomicons}
                  ></CheckCircleRoundedIcon>
                  <p className={styles.lowerBottomText}>Chap1Topic4</p>
                </div>
              </div>
              <button className={styles.lowerBottomButton}>
                Resume Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Design1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Activity;
