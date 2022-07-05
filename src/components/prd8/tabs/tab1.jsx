import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./tabs";
import Apn from "../testseries/notests/no";
import Videolecture from "../../../pages/Videoleture";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

export default function Baln() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div className="App">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="My courses" value={0}></Tab>
          <Tab label="My Test-Series" value={1}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={0}>
          <Apn />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <Videolecture />
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}
