import React from 'react'
import styles from "./cardcorrect.module.css"
import image1 from "./imagecard.jpg";
function CardCorrect() {
  return (
      <>
      <div className={styles.cardContainer}>
        <div className={styles.top}>
            <p className={styles.cardHeading}>Refer and Earn</p>
            <p className={styles.cardSubHeading}>Earn upto Rs. 1000 when your friend purchases a course/ test-series using your referral code.</p>
        </div>
        <div className={styles.bottom}>
            <div className={styles.left}>
                <img src={image1} alt="" className={styles.img}/>
            </div>
            <div className={styles.right}>
                 <p className="sia">Your Referral code : <span className="why">SJDBPKOM</span>
                <button className={styles.button1}>Copy Code</button>
                </p>
                <p className="sia"> Your Earnings : <span className="why">500 points</span></p>
                <p className="sia"> No of Referral values : <span className="why">5</span>
                </p>
                <button className={styles.button2}>Visit Referral page</button>
            </div>
        </div>
      </div>
      </>
  )
}

export default CardCorrect