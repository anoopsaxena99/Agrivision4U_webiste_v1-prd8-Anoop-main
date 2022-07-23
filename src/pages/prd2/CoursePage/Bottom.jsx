import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { baseURL } from "../../../Apis";
import Loader from "react-spinners/BarLoader";
const Bottom = ({ item }) => {
  const [packs, setpacks] = useState(null);
  let Exam = item.courses[0].exam;
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/package`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setpacks(json.data);
      }
    };

    fun();
    // eslint-disable-next-line
  }, []);
  let packages = [];
  let x = 0;
  if (packs) {
    packs.map((e) => {
      if (e.exam[0] == Exam[0] && e.exam.length === Exam.length) {
        e.packages.map((f) => {
          if(f.packageId!=item.packageId)packages.push(f);
        });
      }
    });
  }

  // console.log(packages);
  return (
    <>
      {packages ? (
        <Box>
          <Heading>Your Peers also bought this</Heading>
          <Block>
            {packages.map((e, i) => {
              return <Card pack={e} key={i} />;
            })}
          </Block>
        </Box>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

const Box = styled.div`
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  width: 90%;
  margin: auto;
  padding: 20px;
  font-weight: 600;
  font-size: 35px;
  line-height: 59px;
  color: #0b6e4f;
`;

const Block = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  gap: 20px;
  width: 90%;
  margin: auto;
  ::-webkit-scrollbar {
    width: 3px;
    height: 2px;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      86.94deg,
      #1bbc9b 0%,
      #1bbc9b 0.01%,
      #16a086 100%
    );
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 50%;
  }
`;

export default Bottom;
