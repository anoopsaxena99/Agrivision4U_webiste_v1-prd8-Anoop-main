import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import TestDetailCard from "./testDetailCard";
import Apn from "./no";
export default function Appun({ testSeries }) {
  // console.log(testSeries.length == 0);
  return (
    <div className="horizontalscrollbar">
      {testSeries.length == 0 ? <Apn /> : <></>}
      <div className="testki">
        {testSeries.map((e) => {
          return <TestDetailCard test={e} />;
        })}
      </div>
    </div>
  );
}
