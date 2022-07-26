import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { baseURL } from "../../Apis";
import courseData from "../../data.json";
import Loader from "../../pages/Loader";
const SidebarNav = styled.nav`
  background: #e9f0ef;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const SidebarWrap = styled.div``;

const Sidebar = ({
  handleSetContent,
  handleSetContentType,
  handleSetCurrentOpenTopicId,
  currentOpenTopicId,
  courseId,
  chapterId,
  topicId,
}) => {
  const [coursedata, setcoursedata] = new useState(null);
  const [subdata, setsubdata] = new useState([]);
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/course/${courseId}?queryParam=1&chapterID=${chapterId}`,
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
        setcoursedata(json);
        setsubdata(
          json.data.chapter.topics.filter((t) => {
            return t._id === topicId;
          })
        );
      }
    };
    fun();

    // eslint-disable-next-line
  }, []);
  console.log("hello ", coursedata);
  console.log(subdata);
  // if (subdata != null)
  //   subdata = subdata.filter((t) => {
  //     return t._id === topicId;
  //   });

  const [subTopics, setSubTopics] = new useState([]);

  const handleSetSubTopics = (courseData) => {
    if (subTopics.length == 0)
      courseData.data.chapter.topics.map((topicData) =>
        setSubTopics([...subTopics, ...topicData.subTopics])
      );
  };
  console.log("subdata => ", subdata);
  useEffect(() => {
    handleSetSubTopics(courseData);
  }, []);

  const [sidebar] = useState(true);
  return (
    <>
      {subdata.length === 0 ? (
        <Loader />
      ) : (
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {subdata[0].subTopics.map((chapter, index) => {
              return (
                <SubMenu
                  item={chapter}
                  key={index}
                  handleSetContent={handleSetContent}
                  handleSetContentType={handleSetContentType}
                  handleSetCurrentOpenTopicId={handleSetCurrentOpenTopicId}
                  isActive={currentOpenTopicId === chapter._id}
                />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      )}
    </>
  );
};

export default Sidebar;
