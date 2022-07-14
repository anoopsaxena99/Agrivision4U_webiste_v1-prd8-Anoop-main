import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

// import courseData from "../../data.json";

const SidebarNav = styled.nav`
  background: #e9f0ef;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
`;

const SidebarWrap = styled.div``;

const Sidebar = ({ handleSetContent, handleSetContentType, handleSetCurrentOpenTopicId, currentOpenTopicId,topicInfo,handleSetctype,ctype }) => {
  const [subTopics, setSubTopics] = new useState([]);
  const courseData=topicInfo.topicsData;
  console.log(topicInfo);
  const handleSetSubTopics = (courseData) => {
    console.log(topicInfo.topicIndex.i)
    console.log(courseData.chapter.topics)
    if (subTopics.length == 0)
      courseData.chapter.topics[topicInfo.topicIndex.i].subTopics.map((s) =>
        setSubTopics(prevState =>[...prevState, s])
      );
  };

  useEffect(() => {
    handleSetSubTopics(courseData);
  }, []);

  const [sidebar] = useState(true);
  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {subTopics.map((sub, index) => {
            // console.log('sub', sub)
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
      </SidebarNav>
    </>
  );
};

export default Sidebar;
