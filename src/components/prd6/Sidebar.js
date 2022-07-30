import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

const SidebarWrap = styled.div``;

const Sidebar = ({
  handleSetContent,
  handleSetContentType,
  handleSetCurrentOpenTopicId,
  currentOpenTopicId,
  topicInfo,
  handleSetctype,
  ctype,
}) => {
  const [subTopics, setSubTopics] = new useState([]);
  const courseData = topicInfo.topicsData;

  const handleSetSubTopics = (courseData) => {
    if (subTopics.length == 0)
      courseData.chapter.topics[topicInfo.topicIndex.i].subTopics.map((s) =>
        setSubTopics((prevState) => [...prevState, s])
      );
  };

  useEffect(() => {
    handleSetSubTopics(courseData);
  }, []);

  const [sidebar] = useState(true);
  return (
    <>
      <div sidebar={sidebar}>
        <SidebarWrap>
          {subTopics.map((sub, index) => {
            return (
              <SubMenu
                sub={sub}
                key={index}
                handleSetContent={handleSetContent}
                handleSetContentType={handleSetContentType}
                handleSetCurrentOpenTopicId={handleSetCurrentOpenTopicId}
                isActive={currentOpenTopicId === sub._id}
                handleSetctype={handleSetctype}
                ctype={ctype}
              />
            );
          })}
        </SidebarWrap>
      </div>
    </>
  );
};

export default Sidebar;
