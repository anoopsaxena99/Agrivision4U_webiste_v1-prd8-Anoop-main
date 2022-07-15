import React, { useState } from "react";
import "./App.css";
import Sidebar from "../components/prd6/Sidebar";
import TopicMaterial from "../components/prd6/TopicMaterial";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TopBreadCrumbs from "../components/prd6/TopBreadCrumbs";

function App({courseId,chapterId,topicId}) {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState(-1);
  const [currentOpenTopicId, setCurrentOpenTopicId] = useState(-1);

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
    <>
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
              courseId={courseId}
              chapterId={chapterId}
              topicId={topicId}
            />
          </Grid>
          <Grid item xs={9} sx={{ height: "100%", overflow: "scroll" }}>
            <div style={{ position: "fixed", width: "100%" }}>
              <TopBreadCrumbs />
            </div>
            <div style={{ paddingTop: "40px" }}>
              <TopicMaterial
                contentType={contentType}
                content={content}
                topicId={currentOpenTopicId}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
