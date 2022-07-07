import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd2/tabs/tabbs";
import Card1 from "./cardd";
import "./Coursepage.css";
import Aplp from "./slide";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

//const TabPanelContainer = styled.div`
//  height: 100vh;
//`;

export default function Appa() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (e, value) => {
    setActiveTab(value);
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
        <TabPanel value={activeTab} selectedIndex={0}>
        <span className="heading">
            <span className="heading1">GATE - </span>
            Winner's Preparation Package
          </span>
          <div className="description">
              WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
              nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
              Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
              diam.
            </div>
            <Card1/>
          <span className="heading">
            <span className="heading1">GATE - Subject Wise Preparation Packages</span>
          </span>
          <Aplp/>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
       
            <span className="heading">
              <span className="heading1">CFTRI- </span>
              Winner's Preparation Package
            </span>
            <div className="description">
              WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
              nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
              Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
              diam.
            </div>
            <Card1/>
          <span className="heading">
            <span className="heading1">CFTRI - Subject Wise Preparation Packages</span>
          </span>
          <Aplp/>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
        
        </TabPanel>
    </div>
  );
}
