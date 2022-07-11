import React from "react";
import subject from "./subject.jpg";
import { useEffect, useState } from "react";
import styles from "./lectures.module.css";
import { useLocation, Link } from "react-router-dom";
import { baseURL } from "../../../Apis";
import Search from "../Search";
const NotesCard = ({obj,i,pagenumber,handelSub,completed})=> {

  return (
    <>
        
        <div className={styles.cards}  onClick={()=> {console.log(obj.subTopics)}} >
          <img src={subject} alt="topic" className={styles.img} />
          <div className={styles.lower}>
            <div className={styles.about}>
              <p className={styles.number}>
                {i + 1 + (pagenumber - 1) * 9}.
              </p>
              <p className={styles.text}>{obj.name}</p>
            </div>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bookmark"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <p className={styles.time}>30mintutes</p>
        </div>
        </>
      
      );
        
  }

export default NotesCard;