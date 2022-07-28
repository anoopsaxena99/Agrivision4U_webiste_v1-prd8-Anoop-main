import React from "react";
import subject from "./subject.jpg";
import MainPrd6 from "./mainPrd6";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
function SubTopicPage(props) {
  return (
    <>
      <Navbar />
      <MainPrd6 topicInfo={props.location.state} />
      <Footer />
    </>
  );
}
export default SubTopicPage;
