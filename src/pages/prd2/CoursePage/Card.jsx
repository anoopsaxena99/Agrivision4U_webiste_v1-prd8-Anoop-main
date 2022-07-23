import React from "react";
import styled from "styled-components";
import Rating from "../../../components/PaymentPg/Rating";
import { Link } from "react-router-dom";
import { baseURL } from "../../../Apis";
const Card = ({ pack, key }) => {
  let url = `/package/${pack.packageId}`;
  return (
    <Box>
      <div style={{ margin: "1rem" }}>
        <Bg
          style={{
            background: "url(/images/CourseCard.svg) no-repeat center ",
            width: "285px",
            height: "150px",
            color: "white",
            position: "relative",
            borderRadius: "10px",
          }}
        >
          <Img src="/images/CardContent.png"></Img>
          <Head />
        </Bg>
        <BgTitle1>{pack.name}</BgTitle1>
        <h4
          style={{
            fontSize: "14px",
            margin: "auto",
            padding: "10px 5px 5px 0px",
            color: "#5F5F5F",
          }}
        >
          {pack.userEnrolled/1000}K Enrolled
        </h4>
        <Content1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <CourseRate>
              <h4
                style={{
                  fontSize: "18px",
                  margin: "auto",
                  padding: "5px",
                  color: "#E59819",
                }}
              >
                {pack.rating}
              </h4>
              <Rating value={pack.rating} color="#E59819" />
              <h4
                style={{
                  fontSize: "12px",
                  margin: "auto",
                  padding: "5px",
                  color: "#5F5F5F",
                }}
              >
                ( 12340 )
              </h4>
            </CourseRate>
            <ViewLink
              to={{
                pathname: url,
                state: { name: pack.name, Id: pack.packageId },
              }}
            >
              <Button1>View Package</Button1>
            </ViewLink>
          </div>
        </Content1>
      </div>
    </Box>
  );
};
const ViewLink = styled(Link)``;
const Img = styled.img`
  width: 300.58px;
  height: 160px;
  margin-left: -8px;
  top: 3392.04px;
  border-radius: 12px;
`;
const Box = styled.div`
  width: 320px;
  background: #ffffff;
  border: 1px solid #b1b1b1;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 1rem;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 150px;
  //background: url("/images/card-bg.svg") no-repeat center;
  color: white;
  position: relative;
`;
const Head = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const Button1 = styled.button`
  display: block;
  color: white;
  background: #13ae7e;
  border-radius: 8px;
  padding: 8px 24px;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
const BgTitle1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  //text-align:center;
  background-color: white;
  color: #0b6e4f;
  padding-top: 10px;
  //padding-left: 10px;
  border-radius: 4px 4px 0px 0px;
`;

const CourseRate = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
`;

const Content1 = styled.div`
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px 20px 18px 0px;
  background-color: white;
  font-size: 15px;
  font-weight: 400;
`;

export default Card;
