import React from "react";
import subject from "./subject.jpg";
import MainPrd6 from "./mainPrd6";
function SubTopicPage(props){

  return (
    <>
    <MainPrd6 topicInfo={props.location.state} />
    </>)
}
export default SubTopicPage;
