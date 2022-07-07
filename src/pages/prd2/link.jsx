import { useState } from "react";
import "./Coursepage.css";
import "react-tabs/style/react-tabs.css";
import Appa from "./Aptab";
import { Card } from "react-bootstrap";
export default function CoursePages() {
  const [tab] = useState("GATE");

  console.log("tab1", tab);
  return (
    <div className="App5">
      <div className="container5">
     
        <Card.Img
          className="img5"
          variant="left"
          src="images/cover.jpg"
        />
      </div>
      <Appa/>
    </div>
  );
  
}
