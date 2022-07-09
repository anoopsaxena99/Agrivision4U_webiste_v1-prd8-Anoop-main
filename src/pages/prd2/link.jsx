import { useState } from "react";
import "./Coursepage.css";
import "react-tabs/style/react-tabs.css";
import Appa from "./Aptab";
import { Card } from "react-bootstrap";
import coverPhoto from "./CoverPhoto.jpg";
// import { StylesContext } from "@material-ui/core/node_modules/@material-ui/styles";
import styles from "./link.module.css";
export default function CoursePages() {
  const [tab] = useState("GATE");

  // console.log("tab1", tab);
  return (
    <div className="App5">
      <div className={styles.container}>
        <img src={coverPhoto} alt="CoverPhoto" className={styles.img} />
      </div>
      <Appa />
    </div>
  );
}
