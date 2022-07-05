import React from 'react'
import styled from "styled-components";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import styles from "./alertcorrect.module.css";
function AlertCorrect() {
  return (
    <>
    <div className={styles.AlertContainer}>
        <div className={styles.top}>
            <p className={styles.course}>Course: 001</p>
            <p className={styles.courseTiming}> <span className={styles.dot}></span>You have a class today from 5pm -6pm</p>
            <p className={styles.courseBatch}>Batch: Achiever</p>
        </div>
        <div className={styles.mid}>
            <p className={styles.midHeading}>
            Engineering Mathematics
            </p>
            <div className={styles.midSubContainer}>
                <p className={styles.textP}>Exam Target:</p>
                <p className={styles.text}>GATE</p>
            </div>
            <div className={styles.midSubContainer}>
                <p className={styles.textP}>Instructor:</p>
                <p className={styles.text}>Shubrodip Chatterjee</p>
            </div>
        </div>
        <div className={styles.bottomContainer}>
            <div className={styles.bottom}>
            <PlayCircleOutlineIcon style={{transform: 'scale(5)', color: '#0B6E4F'}}></PlayCircleOutlineIcon>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default AlertCorrect