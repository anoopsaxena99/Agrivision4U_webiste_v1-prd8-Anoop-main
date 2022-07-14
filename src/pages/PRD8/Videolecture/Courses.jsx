import styled from "styled-components";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";
import { makeStyles } from "@material-ui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DoneIcon from "@mui/icons-material/Done";

const Courses = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6].map((num) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Box1 style={{ display: "flex", flexDirection: "row" }}>
          <Box1mini></Box1mini>
          <div>
            <Heading>CFTRI</Heading>
            <NavBar>
              {subjects.map((subject) => (
                <div>
                  <NavBarunit
                    className={
                      activeListItem === subject
                        ? `${classes.activeButton2}`
                        : ""
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
                      style={{ position: "absolute", right: "2vw" }}
                    ></ArrowDropDownIcon>
                  </NavBarunit>
                  <Line></Line>
                </div>
              ))}
            </NavBar>
          </div>
          <div style={{ width: "25%" }}>
            <Button4
              style={{ margin: "3vw 0 0.5vw 2vw", width: "65%", border: "0px" }}
            >
              Go to Course
            </Button4>
            <Button3 style={{ width: "65%" }}>Rate Course</Button3>
          </div>
        </Box1>
        <Box2 style={{ display: "flex", flexDirection: "row" }}>
          <Box2mini></Box2mini>
          <div style={{ width: "50%" }}>
            <Heading>Conquer CFTRI</Heading>
            <Text>
              Lorem ipsum dolor sit amet,consecteturad Lorem ipsum dolor sit
              amet, consectetur ad. Lorem ipsum dolor sit amet,consecteturad
              Lorem ipsum dolor sit amet, consectetur a
            </Text>
            <Button3>Enroll now</Button3>
            <Button4>Try for free</Button4>
          </div>
          <Enrol>1.3k Students Enrolled</Enrol>
        </Box2>
        <Box2 style={{ display: "flex", flexDirection: "row" }}>
          <Box2mini></Box2mini>
          <div style={{ width: "50%" }}>
            <Heading>Conquer CFTRI</Heading>
            <Text>
              Lorem ipsum dolor sit amet,consecteturad Lorem ipsum dolor sit
              amet, consectetur ad. Lorem ipsum dolor sit amet,consecteturad
              Lorem ipsum dolor sit amet, consectetur a
            </Text>
            <Button3>Enroll now</Button3>
            <Button4>Try for free</Button4>
          </div>
          <Enrol>1.3k Students Enrolled</Enrol>
        </Box2>
      </div>
    ));

  // Slider buttons
  const slider = React.createRef();
  const classes = useStyles();
  // Active List Selection
  const [activeListItem, setActiveListItem] = React.useState("Algebra");
  const SetItemView = (activeListItem) => {
    setActiveListItem(activeListItem);
  };

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
  };

  const subjects = [
    "Algebra",
    "Statistics",
    "Arithmetics",
    "Geometry",
    "Trigonometry",
    "Calculus",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="slider-width">
        <Slider ref={slider} {...settings}>
          {renderSlides()}
        </Slider>
        <Button2
          style={{ float: "left", marginLeft: "9vw" }}
          onClick={() => slider.current.slickPrev()}
        >
          Previous
        </Button2>
        <Button2
          style={{ float: "right", marginRight: "8vw" }}
          onClick={() => slider.current.slickNext()}
        >
          Next
        </Button2>
      </div>
    </div>
  );
};

const Box1 = styled.div`
  width: 70vw;
  height: 15vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #e9f0ef;
  position: relative;
  margin: 4vw 2.66vw 0px 2vw;
  padding-top: 1vw;
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    height: 18vw;
  }

  @media screen and (max-width: 900px) {
    width: 70vw;
    height: 30vw;
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    height: 45vw;
  }

  @media screen and (max-width: 400px) {
  }
`;

const Box1mini = styled.div`
  width: 20vw;
  height: 11vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #ffffff;
  margin: 1vw 0 0vw 3vw;
  border-radius: 10px;

  @media screen and (max-width: 1100px) {
    height: 14vw;
  }

  @media screen and (max-width: 900px) {
    width: 30vw;
    height: 25vw;
  }

  @media screen and (max-width: 600px) {
    width: 30vw;
    height: 35vw;
    margin-top: 4vw;
  }

  @media screen and (max-width: 400px) {
  }
`;

const Box2 = styled.div`
  width: 80vw;
  height: 15vw;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 3vw auto;
  padding-top: 1vw;
  border-radius: 12px;
  @media screen and (max-width: 1100px) {
    height: 18vw;
  }

  @media screen and (max-width: 900px) {
    width: 70vw;
    height: 30vw;
  }

  @media screen and (max-width: 600px) {
    width: 80vw;
    height: 45vw;
  }

  @media screen and (max-width: 400px) {
  }
`;

const Box2mini = styled.div`
  width: 20vw;
  height: 11vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #e5e5e5;
  margin: 1vw 0 0vw 3vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    height: 14vw;
  }

  @media screen and (max-width: 900px) {
    width: 30vw;
    height: 25vw;
  }

  @media screen and (max-width: 600px) {
    width: 30vw;
    height: 35vw;
    margin-top: 4vw;
  }

  @media screen and (max-width: 400px) {
  }
`;

const Button2 = styled.button`
  width: 8vw;
  height: 2vw;
  background-color: #0b6e4f;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 12px;
  border-radius: 8px;
  padding: 0.5vw 0;
  font-weight: 700;
  border: 2px solid #0b6e4f;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    width: 10vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 9px;
    width: 15vw;
    height: 4vw;
  }

  @media screen and (max-width: 400px) {
    width: 18vw;
    padding: 0;
  }
`;

const Button3 = styled.button`
  width: 7vw;
  height: 2vw;
  background-color: #0b6e4f;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 12px;
  border-radius: 8px;
  margin: 1vw 2vw 1vw 2vw;
  font-weight: 700;
  border: 2px solid #0b6e4f;

  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }

  @media screen and (max-width: 900px) {
    font-size: 11px;
    width: 11vw;
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

const Button4 = styled.button`
  width: 7vw;
  height: 2vw;
  border: 1px solid #0b6e4f;
  background-color: #ffffff;
  color: #0b6e4f;
  font-family: "Roboto";
  font-size: 12px;
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

const Heading = styled.div`
  color: #0b6e4f;
  font-family: "Roboto";
  text-align: left;
  font-weight: 700;
  font-size: 22px;
  margin: 1vw 2.66vw 0px 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media screen and (max-width: 300px) {
    font-size: 11px;
  }
`;

const Text = styled.div`
  color: #474a50;
  font-family: "Roboto";
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
  margin: 1vw 2.66vw 0px 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
`;

const Enrol = styled.div`
  color: #0b6e4f;
  font-family: "Roboto";
  text-align: justify;
  font-weight: 500;
  font-size: 14px;
  margin: 1vw 2.66vw 0px 2vw;
  position: absolute;
  right: 1vw;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
    margin-right: 0;
    width: 20vw;
  }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
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

const NavBar = styled.div`
  width: 15vw;
  height: 9vw;
  border-radius: 12px;
  position: relative;
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
