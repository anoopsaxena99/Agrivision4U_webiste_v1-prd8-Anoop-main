import React, { useState } from "react";
import Sidebar from "../components/prd6/Sidebar";
import TopicMaterial from "../components/prd6/TopicMaterial";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TopBreadCrumbs from "../components/prd6/TopBreadCrumbs";
import "../App.css";

import Drawer from "@mui/material/Drawer";
import { useMediaQuery } from "react-responsive";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function MainPrd6(props) {
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState(-1);
  const [currentOpenTopicId, setCurrentOpenTopicId] = useState(-1);
  const [ctype, setctype] = useState(2);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const sideBarComponentDrawer = () => {
    return (
      <div>
        {isTabletOrMobile ? (
          <Drawer
            open={isDrawerOpen}
            onClose={openDrawer}
            PaperProps={{
              sx: { width: "70%" },
            }}
          >
            <Sidebar
              handleSetContent={handleSetContent}
              handleSetContentType={handleSetContentType}
              handleSetCurrentOpenTopicId={handleSetCurrentOpenTopicId}
              currentOpenTopicId={currentOpenTopicId}
              topicInfo={props.topicInfo}
              handleSetctype={handleSetctype}
              ctype={ctype}
            />
          </Drawer>
        ) : (
          <Sidebar
            handleSetContent={handleSetContent}
            handleSetContentType={handleSetContentType}
            handleSetCurrentOpenTopicId={handleSetCurrentOpenTopicId}
            currentOpenTopicId={currentOpenTopicId}
            topicInfo={props.topicInfo}
            handleSetctype={handleSetctype}
            ctype={ctype}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <div style={{ width: "100%", margin: "40px", display: "flex" }}>
        {isTabletOrMobile ? (
          <MenuOpenIcon onClick={openDrawer} style={{ margin: "7px" }} />
        ) : null}
        <TopBreadCrumbs props={props} />
      </div>

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
          {isTabletOrMobile ? (
            <>{sideBarComponentDrawer()}</>
          ) : (
            <Grid
              item
              xs={isTabletOrMobile ? 0 : 3}
              sx={{ height: "100%", overflow: "scroll" }}
            >
              {sideBarComponentDrawer()}
            </Grid>
          )}

          <Grid
            item
            xs={isTabletOrMobile ? 12 : 9}
            sx={{ height: "100%", overflow: "scroll" }}
          >
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
    </div>
  );
}

export default MainPrd6;
