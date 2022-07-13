import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";
import { makeStyles } from "@material-ui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DoneIcon from "@mui/icons-material/Done";
import CurrentCourses from "../components/prd8/CurrentCourses";
import styles from "./coursescorrect.module.css";
import "../components/prd8/App.css";
import CourseSuggestion from "./CourseSuggestion";
import DashCourseCard from "../components/Dashboard/DashCourseCard";
import MyCalendar from "../components/Dashboard/MyCalendar.js";
const Courses = ({ course }) => {
  //  styling should always be constant
  // Slider buttons
  const slider = React.createRef();
  const classes = useStyles();
  // Active Button State

  // Active List Selection
  const [activeListItem, setActiveListItem] = React.useState("Algebra");
  const SetItemView = (activeListItem) => {
    setActiveListItem(activeListItem);
  };

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    appendDots: (dots) => (
      <div
        style={{
          width: "auto",

          left: "33%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="custom-dots">{i + 1}</div>,
  };

  const subjects = [
    "Algebra",
    "Statistics",
    "Arithmetics",
    "Geometry",
    "Trigonometry",
    "Calculus",
  ];
  // console.log(course);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5%",
        }}
      >
        <courseCssProperties
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="testki2">
            {course.map((e) => {
              return <CurrentCourses courseItem={e} />;
            })}
          </div>
        </courseCssProperties>
        {/* <CourseSuggestion /> */}
      </div>
      
    </>
  );
};

const Dash = styled.div`
  .navbar {
    background-color: #ffffff;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .menu-bars {
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: white;
    width: 480px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    border-left: 1px solid black;
    z-index: 100;
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }
  .nav-menu {
    overflow-y: auto;
  }
  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: white;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (max-width: 580px) {
    .nav-menu {
      width: 100%;
    }
  }
`;

const DashWrapper = styled.div`
  margin: 25px;

  h1 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 760px) {
    padding: 0:
    margin: 1rem;
    h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 1110px) {
    .flexCont {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 1224px) {
    .flexCont {
      display: flex;
    }
  }
  

`;

const DashHead = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 2rem;
  margin-bottom: 4rem;
  margin-left: 1rem;
  .Welcome {
    min-width: 0;
    position: relative;
    min-height: 16.0625rem;
    margin-top: 20px;
    margin-right: 25px;
    margin-left: 10px;
    background: #ecf2f1;
    box-shadow: 0rem 0.1875rem 0.75rem rgba(0, 0, 0, 0.12);
    border-radius: 0.375rem;
  }

  .welcome a {
    text-decoration: none;
  }
  .Welcome-krishna {
    width: 38.1875rem;
    min-height: 3rem;
    margin-left: 5.3%;
    margin-top: 1.75rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;

    color: #12806b;
  }

  .P1 {
    max-width: 12.375rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 2.5rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

    color: #000000;
  }
  .L1 {
    max-width: 14.1875rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    clear: right;

    color: #0e6656;
  }
  .P2 {
    max-width: 20.875rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 0.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

    color: #000000;
  }
  .L2 {
    max-width: 6.6875rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    clear: right;
    line-height: 1.6875rem;

    color: #0e6656;
  }
  .P3 {
    max-width: 16.875rem;
    min-height: 1.6875rem;
    margin-left: 13.5%;
    margin-top: 0.5rem;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

    color: #000000;
  }
  .L3 {
    max-width: 12.3125rem;
    min-height: 1.6875rem;
    margin-left: 5%;
    margin-top: 0.5rem;
    clear: right;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.6875rem;

    color: #0e6656;
  }
  .Content {
    margin-top: 3rem;
  }

  @media (max-width: 600px) {
    .Welcome {
      margin-right: 2.5%;
    }

    .P1,
    .P2,
    .P3 {
      margin-left: 20px;
      display: block;
    }
  }

  @media (max-width: 956px) {
    .Welcome span {
      font-size: 14px;
    }
    .Welcome a {
      font-size: 14px;
    }

    .Welcome-krishna {
      font-size: 1.46rem !important;
    }
  }

  @media (max-width: 767px) {
    display: flex !important;
    flex-direction: column;
  }
`;

const DashBody = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4rem
  margin: 3rem 0rem;
  @media (max-width: 1000px) {
    flex-direction: column;
    column-gap: 4rem;
  }

`;

const DashCardCont = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  flex-basis: 0;
  min-width: 0;
  margin-right: 60px;
  margin-bottom: 20px;
  margin-left: 1rem;
  position: relative;
  .dashCard__viewAll {
    right: 0.1%;
    position: absolute;
  }
  .dashCard__ongoing {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    color: #17a388;
  }

  p {
    margin-left: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const DashCardContHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    p {
      position: relative;
      top: 3px;
      font-size: 11px;
    }

    span {
      font-size: 11px;
    }
  }
`;

const DashCardWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
  overflow-x: auto;
  column-gap: 2rem;
`;

const DashBottom = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  h1 {
    margin-bottom: 6px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const DashProgress = styled.div`
  position: relative;
  flex-basis: 0;
  min-width: 0;
  flex-grow: 2;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`;

const DashBarBorder = styled.div`
  position: relative;
  padding: 6px 23px;
  border-radius: 3px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  flex-grow: 1;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media screen and (min-width: 1140px) {
    width: 100%;
  }
`;

const DashQuiz = styled.div`
  flex-basis: 0;
  min-width: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    margin-top: 16px;
  }
`;

const DashGlobalContainer = styled.div`
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 400px;

  overflow-y: auto;
  align-items: center;
  flex-grow: 1;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

const courseCssProperties = styled.div`
  display: flex;
  flexdirection: row;
`;

const NavBarunit = styled.button`
  color: #5f5f5f;
  font-family: "Roboto";
  text-align: justify;
  font-weight: 500;
  font-size: 15px;
  margin: 1vw 2.66vw 0px 2vw;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`;

const Line = styled.div`
  width: 12vw;
  height: 0px;
  left: 1.8vw;
  border: 0.5px solid #d8d8d8;
  @media screen and (max-width: 500px) {
    width: 25vw;
  }
  @media screen and (max-width: 300px) {
    width: 30vw;
  }
`;

const NavBar = styled.div`
  width: 15vw;
  height: 9vw;
  border-radius: 12px;

  margin: 0.5vw 1vw 0px 2vw;
  overflow: scroll;

  @media screen and (max-width: 900px) {
    height: 15vw;
    width: 20vw;
  }

  @media screen and (max-width: 600px) {
    height: 20vw;
    width: 25vw;
    margin: 3vw 0 0 2vw;
  }

  @media screen and (max-width: 400px) {
    height: 24vw;
  }
`;

const useStyles = makeStyles(() => ({
  activeButton1: {
    background: "#0B6E4F !important",
    color: "#FFFFFF !important",
    fontWeight: "700 !important",
  },
  activeButton2: {
    color: "#0B6E4F !important",
    marginLeft: "0 !important",
  },
}));

export default Courses;
