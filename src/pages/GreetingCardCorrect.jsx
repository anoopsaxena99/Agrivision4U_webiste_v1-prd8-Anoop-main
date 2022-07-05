import React from 'react'
import styles from "./greetingcardcorrect.module.css"
function GreetingCardCorrect(props) {
  return (
   <>
   <div className={styles.GreetContainer}>
       <p className={styles.greeting}><b>Hello</b>, {props.name1} {props.name2}!</p>
        <p className={styles.moto}>Welcome to Agrivision4U, where vision turns into reality</p>
        <p className={styles.summary}>By being a part of Agrivision4U, you’ve taken your first step towards building your successful Agriculture career. All the best</p>
   </div>
   </>
  )
}

export default GreetingCardCorrect