import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Loader from "../../pages/Loader";
import styled from "styled-components";
import { borderRadius } from "@mui/system";

const TopBreadCrumbs = ({props}) => {
  // console.log('props', props.topicInfo.topicsData.chapter.topics)
  if(props){
      var Course=props.topicInfo.topicsData.course[0];
      var Chapter=props.topicInfo.topicsData.chapter;
      var topic=props.topicInfo.topicsData.chapter.topics[props.topicInfo.topicIndex.i];
    }

  // console.log('Course', Course);
  // console.log('Chapter', Chapter);
  // console.log('topic', topic);
  // props.topicInfo.topicIndex.i
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
    {props?(
    <div
      role="presentation"
      style={{
        backgroundColor: "white",
        paddingBottom: "10px",
        display: "flex",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator="›" >
        <a style={mystyle} href="/dashboard">
          Dashboard
        </a>
        <a style={mystyle} href={`/course/${Course._id}`}>
          {Course.name}
        </a>
        <a style={mystyle} href={`/course/${Course._id}/${Chapter._id}`}>
          {Chapter.name}
        </a>
        <Typography color="#0B6E4F">{topic.name}</Typography>
      </Breadcrumbs>
    </div>) : (<Loader/>)
    }
    </>
  );
};
const mystyle = {
  color: "#39ac73	",
  backgroundColor: "#F7F7F7",
  padding: "10px",
  fontFamily: "Arial",
  borderRadius:"10px"
};

export default TopBreadCrumbs;
