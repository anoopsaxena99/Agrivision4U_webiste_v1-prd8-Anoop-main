import ImageSlider from "../../components/prd2/Sliderr";
import { Tabs, Tab, TabPanel } from "../../components/prd2/tabs/SubjectTabbs";

import styled from "styled-components";
import { useState } from "react";
//import "./css/App.css";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;
function Aplp({ subjects }) {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  console.log("subjects :>> ", subjects);
  return (
    <div>
      <ImageSlider subject={subjects} />
    </div>
  );
}

export default Aplp;
