import Alert from "./Alert";
import React from "react";
import styled from "styled-components";
import Courses from "./Courses";
import Appun from "../Testseries/yes";
import { makeStyles } from "@material-ui/styles";

const Videolecture = () => {
  const classes = useStyles();
  // Active Button State
  const [active, setActive] = React.useState("My Courses");
  const SetView = (active) => {
    setActive(active);
  };

  return (
    <div>
      {active === "My Courses" ? <Alert /> : ""}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button1
          className={active === "My Courses" ? `${classes.activeButton1}` : ""}
          onClick={() => SetView("My Courses")}
        >
          My Courses
        </Button1>
        <Button1
          className={
            active === "My Test-Series" ? `${classes.activeButton1}` : ""
          }
          onClick={() => SetView("My Test-Series")}
        >
          My Test-Series
        </Button1>
      </div>
      {active === "My Courses" ? <Courses /> : <Appun />}
    </div>
  );
};
export default Videolecture;

const Button1 = styled.button`
  width: 10vw;
  background-color: #ffffff;
  color: #0b6e4f;
  font-family: "Roboto";
  font-size: 12px;
  margin: 1vw 2vw 0vw 2vw;
  border-radius: 8px;
  padding: 0.5vw 0;
  font-weight: 700;
  border: 2px solid #0b6e4f;

  @media screen and (max-width: 900px) {
    font-size: 11px;
    width: 15vw;
  }

  @media screen and (max-width: 600px) {
    font-size: 9px;
    width: 18vw;
  }

  @media screen and (max-width: 400px) {
    width: 22vw;
  }
`;

const useStyles = makeStyles(() => ({
  activeButton1: {
    background: "#0B6E4F !important",
    color: "#FFFFFF !important",
    fontWeight: "700 !important",
  },
}));
