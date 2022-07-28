import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { baseURL } from "../../Apis";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import DescriptionIcon from "@mui/icons-material/Description";
import TopicIcon from "@mui/icons-material/Topic";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QuizIcon from "@mui/icons-material/Quiz";

const TopicHoverEffect = styled.div`
  &:hover {
    color: #0b6e4f;
  }
`;

const SubMenu = ({
  sub,
  handleSetContent,
  handleSetContentType,
  handleSetCurrentOpenTopicId,
  isActive,
  handleSetctype,
  ctype,
}) => {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = useState("");

  const [subTopicMaterial, setSubTopicMaterial] = useState([]);
  const [currentContentType, setCurrentContentType] = useState(-1);

  const fetchSubTopicMaterial = async (id) => {
    const response = await fetch(`${baseURL}/course/subtopics/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const json = await response.json();
    if (json.success) {
      setLink(json.data);
      handleSetctype(json.contentType);
    }
  };

  const handleMaterialClick = (contentType) => {
    handleSetCurrentOpenTopicId(sub._id);
    fetchSubTopicMaterial(sub._id);
    setCurrentContentType(contentType);
    handleSetContentType(contentType);

    if (link && ctype == 1) {
      handleSetContent(link);
      console.log("Material clicked for video");
      console.log("content type is: " + contentType);
    } else if (link && contentType == 0 && ctype == 0) {
      let mark;

      fetch(`${link}`)
        .then((response) => {
          return response.text();
        })
        .then((text) => {
          mark = text;
          handleSetContent(mark);
        });
    } else {
      // for other two sections
    }
  };

  const handleTopicClick = () => {
    setOpen(!open);
    if (subTopicMaterial.length == 0) {
      fetchSubTopicMaterial(sub._id);
    }
  };

  return (
    <TopicHoverEffect>
      <List
        sx={{
          width: "100%",
          bgcolor: "#E9F0EF",
          color: isActive ? "#0B6E4F" : null,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleTopicClick}>
          <ListItemIcon>
            <TopicIcon sx={{ color: isActive ? "#0B6E4F" : null }} />
          </ListItemIcon>
          <ListItemText
            primary={sub.name}
            sx={{ textTransform: "capitalize" }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            disablePadding
            onClick={() => handleMaterialClick(0)}
            sx={{
              borderLeft:
                isActive && currentContentType === 0 ? "5px solid green" : null,
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DescriptionIcon sx={{ color: isActive ? "#0B6E4F" : null }} />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItemButton>
          </List>
          <List
            component="div"
            disablePadding
            onClick={() => handleMaterialClick(1)}
            sx={{
              borderLeft:
                isActive && currentContentType === 1 ? "5px solid green" : null,
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <SlowMotionVideoIcon
                  sx={{ color: isActive ? "#0B6E4F" : null }}
                />
              </ListItemIcon>
              <ListItemText primary="Video" />
            </ListItemButton>
          </List>
          <List
            component="div"
            disablePadding
            onClick={() => handleMaterialClick(2)}
            sx={{
              borderLeft:
                isActive && currentContentType === 2 ? "5px solid green" : null,
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <OndemandVideoIcon
                  sx={{ color: isActive ? "#0B6E4F" : null }}
                />
              </ListItemIcon>
              <ListItemText primary="Watched Videos" secondary="Comming Soon" />
            </ListItemButton>
          </List>
          <List
            component="div"
            disablePadding
            onClick={() => handleMaterialClick(3)}
            sx={{
              borderLeft:
                isActive && currentContentType === 3 ? "5px solid green" : null,
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <QuizIcon sx={{ color: isActive ? "#0B6E4F" : null }} />
              </ListItemIcon>
              <ListItemText primary="Sectional Test" secondary="Comming Soon" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider />
    </TopicHoverEffect>
  );
};

export default SubMenu;
