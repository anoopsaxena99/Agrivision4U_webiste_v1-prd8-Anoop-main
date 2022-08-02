import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
import useWindowDimensions from "../Util/useWindowDimensions";
import React from "react";
//import ReactDOM from "react-dom";
//import Carousel from "react-elastic-carousel";
//import Item from "./Item";
//import "./reviews.css";

const data = [
  {
    reviewer: "Pooja Prakash Kesarkar",
    review:
      "The manner of teaching is so wonderful and refreshing! They are patient, supportive and know how to motivate students.",
    image: "/images/Testi/Pooja.png",
  },
  {
    reviewer: "Ansu Mary Varghese",
    review:"I firmly believe that the support and guidance of AgriVision4U helped me clear the GATE 2021 for the 1st time.",
    image: "/images/Testi/Ansu.png",
  },
  {
    reviewer: "Arpit Patel",
    review:"When I started my Preparation for GATE, I was very concerned. AgriVison4U played a vital role throughout my preparation journey.",
    image: "/images/Testi/Arpit.png",
  },
  {
    reviewer: "Venkatalakshmi D",
    review:"AgriVision4U is a great learning platform. It helped me gain a lot of experience through my internship and helped me build a robust skillset.",
    image: "/images/Testi/Venkatalakshmi.png",
  },
  {
    reviewer: "Ritika Padmakar Chaudhari",
    review:"Absolutely Awesome All the learning through Agrivision4U is totally worth it. Entire Manuals are very informative and easy to understand.",
    image: "/images/Testi/Ritika.png",
  },
  {
    reviewer: "Vibha Bhatt",
    review:"AgriVision4U brings to me exclusive detailed coverage of the entire syllabus of GATE. ",
    image: "/images/Testi/Vibha.png",
  },
  {
    reviewer: "Abhilash Arbal",
    review:"I am very thankful towards AgriVision4U for training me for GATE exam. I have had a great experience at AgriVision4U.",
    image: "/images/Testi/Abhilash.png",
  },
];




const Reviews = () => {
  const { width } = useWindowDimensions();
  function right(){
    if(width<=device.mobileL){
      document.querySelector(".slider").scrollLeft +=440;
    }
    if (width>=device.tablet){
      document.querySelector(".slider").scrollLeft += 1240;
    }
    else{
      document.querySelector(".slider").scrollLeft +=920;
    }
  }
  function left(){
    if(width<=device.mobileL){
      document.querySelector(".slider").scrollLeft -=440;
    }
    if (width>=device.tablet){
      document.querySelector(".slider").scrollLeft -= 1240;
    }
    else{
      document.querySelector(".slider").scrollLeft -=920;
    }
  }
  return (
    <Wrapper>
      <ReviewContainer>
        <MainHeader>Testimonial</MainHeader>
        <SubHeader>What our clients have to say</SubHeader>
        <Box>
          <Img onClick={()=>left()} src="/images/buttonLeft.svg" alt="" />
          <ReviewSlider className="flex flex-aic flex-jcc slider">
            {data.map(data => {
              return (
                <>
                <ReviewBox>
              <Innertext style={{padding:"10px",marginTop:'10px',fontSize:'20px'}} >
                {data.review}
              </Innertext>
              <div style={{display: "flex", flexDirection:"row",marginTop:"10px"}} >

                <div style={{margin:"auto"}}>
                  <img  style={{borderRadius: "50%"}}  src={data.image} alt="" />
                  <strong style={{marginLeft:'12px'}}>{data.reviewer}</strong>

                </div>
                
              </div>
            </ReviewBox>
              </>
              )
            })}
          </ReviewSlider>
          <Img onClick={()=>right()} src="/images/buttonRight.svg" alt="" />
        </Box>
      </ReviewContainer>
    </Wrapper>
  );
};


const Innertext = styled.div`
margin-bottom:30px;
}
${device.mobileM}{
  margin-bottom:0;
  font-size:15px;
}

`

const Wrapper = styled.section`
  background: white;

`
const Img = styled.img`
width: 55px;
  cursor: pointer;
}
${device.mobileM}{
  display:none;
}
${device.mobileL}{
  display:none;
}

`
const ReviewBox = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    color:#5F5F5F;
    margin-right: 140px;
    flex-direction: column;
    overflow: hidden;
    height: 300px;
    font-size: 15px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 12%);
    border-radius: 10px;
    &:last-child{
      margin-right: 0px;
    }
    ${device.mobileM}{
      font-size:11px;
      margin-right:120px;
      padding:13px;
    }
    ${device.mobileL}{
      padding:15px;
      margin-right:100px;
    }
      
    }
    ${device.tablet}{
      font-size:15px;
      height:400px;
      width:21rem;
    }
    `
const ReviewSlider = styled.div`
      width: 90%;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      align-items: center;
      justify-content: center;
      height: 20rem;
      margin: 0 auto;
      padding: 1rem;
      font-size: 1.25rem;
      border-radius: 0.5rem;
      ::-webkit-scrollbar {
        width: 5px;
        height: 4px;
        color: #0B6E4F;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #0B6E4F;
        width:px;
        // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
     }
     ${device.laptop}{
      
      align-items: center;
      justify-content: center;
    }
    ${device.tablet}{
      width:23rem;
      height:25rem;

    }
    ${device.mobileM}{
      width:20rem;
      margin:8px;
      padding:0.5rem;
    }
    `;
const SubHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0;
  color: #5F5F5F;
  }
  
  
`
const Box = styled.div`
  display: flex;
  
  flex-direction: row;
  }
  ${device.mobileM} {
    padding:25px;
    
    }


`
const MainHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  font-weight: 800;
  padding: 0;
  color: #0B6E4F;
  }
  ${device.tablet} {
    font-size: 1.5rem;
  }

`
const ReviewContainer = styled(Container)`
min-height: 35rem;
padding: 1rem 0;
color: black;
}
${device.mobileM}{
  padding:0;
  height:4orem;
}
`

export default Reviews;
