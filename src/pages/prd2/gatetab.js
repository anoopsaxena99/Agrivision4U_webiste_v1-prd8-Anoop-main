import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "./tabs/tabss";
//import { Card } from "react-bootstrap";
import ImageSlider2 from "./Sliderrr";
//import Modals from "../../components/prd6/Modal";
//import { MdBookmarkBorder, MdLens} from "react-icons/md";
import Navbar from "../../components/global/Navbar";
import styles from "./styles.module.css";
//import autoprefixer from "autoprefixer";
//import Sarthak from "../../components/prd6/Topic/NavBar";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  margin-top: 4%;
`;

export default function Appk({ pack }) {
  const [activeTab, setActiveTab] = useState(2);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div>
        <TabsContainer className={styles.nav2}>
          <Tabs
            className={styles.lines}
            selectedTab={activeTab}
            onChange={handleChange}
          >
            {pack.map((p, i) => {
              return (
                <>
                  <Tab label={p.name} value={i}></Tab>
                  <hr
                    style={{
                      color: "black",
                      width: "40%",
                      height: "2px",
                    }}
                  />
                </>
              );
            })}
          </Tabs>
        </TabsContainer>
        <TabPanelContainer>
          {pack.map((p, i) => {
            return (
              <>
                <TabPanel
                  value={activeTab}
                  selectedIndex={i}
                  onClick={() => {
                    setActiveTab(i);
                  }}
                ></TabPanel>
              </>
            );
          })}
          <ImageSlider2 pack={pack} value={activeTab} />
        </TabPanelContainer>
      </div>
    </div>
  );
}
