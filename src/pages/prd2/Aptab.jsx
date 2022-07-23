import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd2/tabs/tabbs";
import Card1 from "./cardd";
import "./Coursepage.css";
import Aplp from "./slide";
import Appk from "./gatetab";
import Sliderrr2 from "./Sliderrr2";
import ContentPackage from "./ContentPackage";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

//const TabPanelContainer = styled.div`
//  height: 100vh;
//`;

export default function Appa() {
  const [activeTab, setActiveTab] = useState(0);
  const Map = ["GATE", "CFTRI", "CFS/SO", "ICAR"];
  const [Exam, setExam] = useState("GATE");
  const handleChange = (e, value) => {
    setActiveTab(value);
    setExam(Map[value]);
  };

  return (
    <div className="App1">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="GATE" value={0}></Tab>
          <Tab label="CFTRI" value={1}></Tab>
          <Tab label="CFS/SO" value={2}></Tab>
          <Tab label="ICAR" value={3}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanel value={activeTab} selectedIndex={activeTab}>
        <ContentPackage subject={Exam} />
      </TabPanel>
    </div>
  );
}
