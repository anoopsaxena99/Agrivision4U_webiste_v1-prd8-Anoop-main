import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./tabs";
import Appun from "../testseries/Test/yes";
import Courses from "../../../pages/Courses";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

export default function Appa({ user, userprog }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="My courses" value={0} ></Tab>
          <Tab label="My Test-Series" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Appun testSeries={user.testSeries} />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={0}>
          {/* <Videolecture /> */}
          <Courses course={user.courses} />
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}
