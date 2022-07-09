import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../pages/Styles.css";
import { makeStyles } from "@material-ui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DoneIcon from "@mui/icons-material/Done";
import { baseURL } from "../../Apis";
import { Link } from "react-router-dom";
import styles from "./currentcourse.module.css";
export default function CurrentCourses({ courseItem }) {
  const [activeListItem, setActiveListItem] = useState("Algebra");
  const [courseItemDetail, setcourseItemDetail] = useState(null);
  // console.log(courseItem);
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course/${courseItem._id}?queryParam=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if (json.success) {
        setcourseItemDetail(json.data);
      }
    };
    fun();
  }, []);
  let subjects = [
    "Algebra",
    "Statistics",
    "Arithmetics",
    "Geometry",
    "Trigonometry",
    "Calculus",
  ];

  let x;
  if (courseItemDetail != null) {
    x = courseItemDetail.chapters.map((x) => {
      return x.name;
    });
    // console.log(x);
    subjects = x;
  }

  const SetItemView = (activeListItem) => {
    setActiveListItem(activeListItem);
  };
  const classes = useStyles();

  return (
    <>
      <div className={styles.Box1}
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "fit-content",
        }}
      >
        <div className={styles.Box1mini}></div>
        <div className={styles.Heading}>{courseItem.name}</div>
        <div className={styles.NavBar}>
          {subjects.map((subject) => (
            <>
              <NavBarunit
                className={
                  activeListItem === subject ? `${classes.activeButton2}` : ""
                }
                onClick={() => SetItemView(subject)}
              >
                {activeListItem === subject ? (
                  <DoneIcon className="icon"></DoneIcon>
                ) : (
                  ``
                )}{" "}
                {subject}{" "}
                <ArrowDropDownIcon
                  className="icon"
                  style={{ position: "absolute", right: "1vw" }}
                ></ArrowDropDownIcon>
              </NavBarunit>
              <Line></Line>
            </>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <ViewLink to={{ pathname: `/course/${courseItem._id}` }}>
          <Button4
              style={{ width: "100%" ,paddingLeft:"12%",paddingRight:"12%",paddingTop:"7%",paddingBottom:"16%",textAlign:"center"}}
            >
              Go to Course
            </Button4>
          </ViewLink>
          <Button3 style={{ width: "100%" ,paddingLeft:"12%",paddingRight:"12%",paddingTop:"7%",paddingBottom:"16%",textAlign:"center"}}>
            Rate Course
          </Button3>
        </div>
      </div>
    </>
  );
}

const ViewLink = styled(Link)`
  text-decoration: none;
`;
const NavBarunit = styled.button`
  
  color: #5F5F5F;
   background: #e9f0ef;
  font-family: "Roboto";
  display:flex;
  align-items:center;
  justify-content:flex-start;
  font-weight: 500;
  font-size: 14px;
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
const Line = styled.div`
  position: absolute;
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



const Button4 = styled.button`
  width: 8vw;
  height: 3vw;
  border: 1px solid #0b6e4f;
  background-color: #ffffff;
  border-style:none;
  color: #0b6e4f;
  font-family: "Roboto";
  font-size: 17px;
  border-style:none;
  border-radius: 8px;
  font-weight: 700;
  border: 2px solid #0b6e4f;
  border-style:none;
  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 11px;
    width: 11vw;
  }
  @media screen and (max-width: 700px) {
    font-size: 7px;
    width: 15vw;
    height: 3.5vw;
    margin-top: 3vw;
  }
  @media screen and (max-width: 600px) {
    font-size: 9px;
    width: 15vw;
    height: 4vw;
    margin-top: 3vw;
  }

  @media screen and (max-width: 400px) {
    width: 18vw;
    font-size: 7px;
    margin-top: 0vw;
  }
`;
const Button3 = styled.button`
  width: 8vw;
  height: 2vw;

  background-color: #0b6e4f;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 17px;
  border-radius: 8px;
  
  font-weight: 700;
  border: 2px solid #0b6e4f;

  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 11px;
    width: 11vw;
  }
  @media screen and (max-width: 700px) {
    font-size: 7px;
    width: 15vw;
    height: 3.5vw;
    margin-top: 3vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 9px;
    width: 15vw;
    height: 4vw;
    margin-top: 3vw;
  }

  @media screen and (max-width: 400px) {
    width: 18vw;
    font-size: 7px;
    margin-top: 0vw;
  }
`;
