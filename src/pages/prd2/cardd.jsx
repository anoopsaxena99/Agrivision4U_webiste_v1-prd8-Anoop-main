import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Coursepage.css";
import { FaStar, FaRegCheckCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./ima.jpg";
function Card1() {
  return (
    <div id="small25">
      <Card className="card25">
        <div className="left5">
          <Card.Img className="img25"
            variant="left" src={logo} />
          <div className="product-rating">
            <span className="rating">4.7</span>
            <span className="star">
              <FaStar></FaStar>
            </span>
            <span className="star">
              <FaStar></FaStar>
            </span>
            <span className="star">

              <FaStar></FaStar>
            </span>
            <span className="star">
              <FaStar></FaStar>
            </span>
            <span className="star">
              <FaStar></FaStar>
            </span>
            <span className="detail1">(218248)</span>
          </div>
          <div className="detail">
            <p>
              <small>1.2k enrolled</small>
            </p>
          </div>
        </div>
        <div className="right5">
        <Card.Body className="table1">
          <Card.Title className="title">Gate XE Thermodynamics</Card.Title>
          <div className="table1">
            <Container className="list">
              <Row>
                <Col ><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">General Aptitude</span></Col>
                <Col className="col2"><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">General Aptitude</span></Col>
              </Row>
              <Row>
                <Col><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Fluid Mechanics</span></Col>
                <Col className="col2"><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Fluid Mechanics</span></Col>
              </Row>
              <Row>
                <Col ><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Food Technology</span></Col>
                <Col className="col2"><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Food Technology</span></Col>
              </Row>
              <Row>
                <Col><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Engineering Mathematics</span></Col>
                <Col className="col2"><FaRegCheckCircle className="circle"></FaRegCheckCircle><span className="text2">Engineering Mathematics</span></Col>
              </Row>

            </Container>
          </div>
          <div className="btn51">
            <Button className="btn05">View Packages</Button>
          </div>
        </Card.Body>
        
        </div>
      </Card>
    </div>
  );
}

export default Card1;
