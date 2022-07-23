import React from 'react';
import styled from "styled-components";
import device from "../../../components/Util/MediaQuery";
import Rating from "./Rating";

const Reviews = ({item}) => {
  console.log(item);
  
  return (
    <Box>
        <Subjects>
            <Name>What you will learn</Name>
            <SubName>
                {item.highlights.map((it)=>{
                  return <>
                  <Row><Img src="/images/Tick.svg" alt="" /><Sub>{it}</Sub></Row>
                  </>
                })}
  
            </SubName>
        </Subjects>
        <Review>
            <Name1>Student reviews</Name1>
            <Ratings>
              <Stars>
                <Name2>{item.rating}</Name2>
                <Rating value={item.rating} color ="#E59819" />
                <Sub1>Course Rating</Sub1>
                <Sub1>(4500)</Sub1>
              </Stars>
              <Bars></Bars>
            </Ratings>
        </Review>
    </Box>
  )
}

const Name = styled.h2`
  color: #5F5F5F;
  font-weight: 450;
  font-size: 25px;
  margin-bottom: 30px;
`
const Ratings = styled.div`
  display: flex;
`
const Sub1 = styled.h2`
  color: #5F5F5F;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`
const Name2 = styled.h2`
  color: #5F5F5F;
  font-weight: 500;
  font-size: 30px;
  margin: auto;
`
const Stars = styled.div`
  padding: 20px;
  width: 24%;
  display: flex;
  flex-direction: column;
`
const Bars = styled.div`
  padding: 20px;
  width: 76%;
`
const Name1 = styled.h2`
  color: #0B6E4F;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 10px;
`
const Img = styled.img`
    width: 15px;
    margin-right: 5px;
    margin-top: -10px;
`
const Sub = styled.h2`
  color: #5F5F5F;
  font-weight: 400;
  font-size: 18px;
`
const Row = styled.div`
    display:flex;
    padding-bottom:15px;
`

const SubName = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Box = styled.div`
    width: 90%;
    display:flex;
    gap: 250px;
    margin: auto;
    padding: 20px;
    ${device.laptopL}{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
`
const Subjects = styled.div`
    display:flex;
    flex-direction: column;
    padding: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.13);
    border-radius: 12px;
    width: 35%;
    height: 250px;
    ${device.laptopL}{
      width: 70%;
    }
`
const Review = styled.div`
    width: 90%;
    display:flex;
    flex-direction:column;
    padding: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.13);
    border-radius: 12px;
    width: 45%;
    height: 250px;
    ${device.laptopL}{
      width: 70%;
    }
    
`


export default Reviews 