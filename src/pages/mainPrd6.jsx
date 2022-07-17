import React, { useState } from "react";
import Sidebar from "../components/prd6/Sidebar";
import TopicMaterial from "../components/prd6/TopicMaterial";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TopBreadCrumbs from "../components/prd6/TopBreadCrumbs";
import "../App.css";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
function MainPrd6(props) {
  // console.log(props.topicInfo);
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState(-1);
  const [currentOpenTopicId, setCurrentOpenTopicId] = useState(-1);
  const [ctype, setctype] = useState(2);
  const handleSetctype = (data) => {
    setctype(data);
  };
  const handleSetContent = (data) => {
    setContent(data);
  };

  const handleSetContentType = (data) => {
    setContentType(data);
  };

  const handleSetCurrentOpenTopicId = (data) => {
    setCurrentOpenTopicId(data);
  };
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Box
        sx={{
          flexGrow: 1,
          margin: "40px",
          height: `calc(100vh - 80px)`,
          overflow: "hidden",
        }}
      >
        <Grid
          container
          columnSpacing={2}
          sx={{ height: "100%", overflow: "auto" }}
        >
          <Grid item xs={3} sx={{ height: "100%", overflow: "scroll" }}>
            <Sidebar
              handleSetContent={handleSetContent}
              handleSetContentType={handleSetContentType}
              handleSetCurrentOpenTopicId={handleSetCurrentOpenTopicId}
              currentOpenTopicId={currentOpenTopicId}
              topicInfo={props.topicInfo}
              handleSetctype={handleSetctype}
              ctype={ctype}
            />
          </Grid>
          <Grid item xs={9} sx={{ height: "100%", overflow: "scroll" }}>
            <div style={{ width: "100%" }}>
              <TopBreadCrumbs props={props} />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TopicMaterial
                contentType={contentType}
                content={content}
                topicId={currentOpenTopicId}
                ctype={ctype}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPrd6;
