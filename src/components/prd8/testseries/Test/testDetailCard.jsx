import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";
import styled from "styled-components";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../Apis";
import styles   from "./testDetails.module.css";
import { style } from "@mui/system";
export default function TestDetailCard({ test }) {
  // const [testDetail, settestDetail] = useState(null);
  // useEffect(() => {
  //   const fun = async (e) => {
  //     const response = await fetch(
  //       `${baseURL}/testseries/${test._id}?queryParam=0`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );
  //     const json = await response.json();
  //     if (json.success) {
  //       settestDetail(json);
  //     }
  //   };
  //   fun();
  // }, []);
  // console.log(testDetail);
  return (
    <Card className="card5" style={{minWidth:"320px", padding:"3px"}}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src="images/images/m2.jpeg" alt="/" />
      </div>
      <Container className="list55">
        <p className={styles.title}>{test.name}</p>
        <div className="sel">
          <span>1.2k Students enrolled</span>
          <Row>
            <Col>
              <FaRegCheckCircle className="circle"></FaRegCheckCircle>
              <span className="text2">{test.totalQuizzes} Total Quizzes</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <FaRegCheckCircle className="circle"></FaRegCheckCircle>
              <span className="text2">0 Sectional tests</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <FaRegCheckCircle className="circle"></FaRegCheckCircle>
              <span className="text2">8 Previous Tests</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <FaRegCheckCircle className="circle"></FaRegCheckCircle>
              <span className="text2">8 Mockups</span>
            </Col>
          </Row>
        </div>
        <ViewLink to={{ pathname: `/testseries/${test._id}` }}>
        
            <button className={styles.button}>Take Test</button>
         
        </ViewLink>
      </Container>
    </Card>
  );
}
const ViewLink = styled(Link)`
  text-decoration: none;
`;
