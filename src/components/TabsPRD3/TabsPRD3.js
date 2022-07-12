import React from "react";
import styled from "styled-components";
import { Tab } from "./Tabs";
import { TabPanel } from "./Tabs";
import { Tabs } from "./Tabs";
import { useState } from "react";
import styles from "./TabsPRD3.module.css";

function TabsPRD3(props) {
  // console.log(props.repo[0][1]);
  return (
    <div className={styles.TabsContainer}>
      <Tabs selectedTab={props.activeTab} onChange={props.handleChange}>
        {props.repo.map((Obj, i) => {
          return Obj[0] != null ? (
            <Tab label={Obj[0]} value={i}></Tab>
          ) : (
            <h1></h1>
          );
        })}
      </Tabs>
    </div>
  );
}

export default TabsPRD3;
