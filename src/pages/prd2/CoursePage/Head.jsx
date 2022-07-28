import React from 'react';
import styled from "styled-components";
import device from "../../../components/Util/MediaQuery"
import { Link } from "react-router-dom";
import { baseURL } from "../../../Apis"; 
const Head = ({item}) => {
  // console.log("head:-->",item.packageId);

  let url =`/free-trial/package/${item.packageId}`
  // console.log(url);
  return (
    <Block>
        <Card>
        </Card>
        <Details>
          <Line1>
              <Name>{item.name}</Name>
              <Number>1.3K students Enrolled</Number>
          </Line1>
          <Matter>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis et deleniti officia, voluptates illum ullam neque temporibus sequi dolores incidunt odit aliquid similique quasi at aut qui cum praesentium.
          </Matter>
          <Line2>

          <a href="#enroll"><Button1 >Enroll Now</Button1></a>
          <ViewLink to={{pathname: url,state: {name: item.name, Id: item.packageId}}}>
          <Button2>Try for free</Button2>
          </ViewLink>
          </Line2>
        </Details>
    </Block>
  )
}
const ViewLink = styled(Link)`
`;

const Line1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  ${device.laptop}{
    margin-top: 40px;
    flex-direction: column;
    gap: 10px;
  }
`

const Button2 = styled.button`
  display: block;
  background:#0B6E4F;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  padding: 8px 24px;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

const Button1 = styled.button`
display: block;
color:#0B6E4F;
background: white;
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

const Line2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 20px 0;
`
const Matter = styled.div`
  color: white;
  font-weight: 300;
  font-size: 17px;
  margin-top: 30px;
`

const Number = styled.h5`
    color: white;
    font-weight: 300;
    font-size: 17px;
    line-height: 55px;
`

const Name = styled.h2`
  color: white;
  font-weight: 450;
  font-size: 45px;
  
  //line-height: 70px;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    //border : 2px solid red;
    margin-left: 40px;
    margin: 40px;
    width: 50%;
    ${device.laptop}{
      margin: auto;
      width: 100%;
    }
`

const Card = styled.div`
  display: flex;
  background-color: white;
  width: 350px;
  height: 230px;
  margin: 40px;
  border-radius: 10px;
  ${device.laptop}{
    margin: auto;
  }
  ${device.tablet}{
    width: 250px;
    height: 170px;
  }
  //margin: auto
`

const Block = styled.div`
    display: flex;
    width:90%;
    padding:20px 60px;
    margin:3rem auto;
    background-color:#0B6E4F;
    ${device.laptop}{
      flex-direction: column;
      padding: 20px 30px;
    }
`

export default Head 