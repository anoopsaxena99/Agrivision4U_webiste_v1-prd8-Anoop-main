import styled from "styled-components";
import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Alert = () => {

  
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box1>
            <div style={{display:'flex', flexDirection:'row'}}>
            <Subheading style={{marginLeft:'1vw'}}>Course: 001</Subheading>
            <Time><img src="images/icons/Ellipse 134.png" style={{transform:'scale(0.4)'}} alt="dot" />You have a class today from 5pm -6pm</Time>
            <Subheading style={{textAlign:'right', marginRight:'1vw'}}>Batch: Achiever</Subheading>
            </div>
            <Heading>Engineering Mathematics</Heading>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Text>Exam Target:</Text>
                <Text style={{marginLeft:'1vw'}}>GATE</Text>
            </div>

            <div style={{display:'flex', flexDirection:'row'}}>
                <Text>Instructor:</Text>
                <Text style={{marginLeft:'1.75vw'}}>Shubrodip Chatterjee</Text>
            </div>
            <Box2 style={{display:'flex', justifyContent:'center', alignItems:'center'}}><PlayCircleOutlineIcon style={{transform: 'scale(2)', color: '#0B6E4F'}}></PlayCircleOutlineIcon></Box2>
        </Box1>
          
    </div>

  );
};

const Box1 = styled.div`
  width: 40vw;
  height: 26vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #FEFEFE;
  position: relative;
  margin: 5vw 2.66vw 0vw 2vw;
  padding-top: 1.5vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    height: 32vw;
    margin-top:17%;
    }

  @media screen and (max-width: 900px) {
    width: 60vw;
    margin-top: 16%;
    height: 35vw;
    }
    @media screen and (max-width: 850px) {
      width: 60vw;
      margin-top: 10%;
      height: 35vw;
      }
      @media screen and (max-width: 750px) {
        width: 60vw;
      margin-top: 12%;
      height: 35vw;
      }
    
  @media screen and (max-width: 601px) {
    width: 60vw;
    height: 35vw;
    margin-top:55%;
    margin-left:6%;
    }
    @media screen and (max-width: 540px) {
      margin-top:51%;
  
      }

`;

const Box2 = styled.div`
  width: 25vw;
  height: 10vw;
  background: rgba(196, 196, 196, 0.5);
  position: relative;
  margin: 1vw 7.5vw 0px 7.5vw;
  border-radius: 12px;
  @media screen and (max-width: 1000px) {

    }

  @media screen and (max-width: 900px) {
    width: 35vw;
    height: 15vw;
    margin: 2vw 17.5vw 0 13vw;
    }
 
 
  @media screen and (max-width: 601px) {
    width: 30vw;
    height: 12vw;
    margin-left: 15.5vw;
    }
`;

const Time = styled.div`
    width: 25vw;
    color: #474A50;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 900px) {
      width: 45vw;
      font-size: 11px;
    }

    @media screen and (max-width: 601px) {
      width: 55vw;
      font-size: 10px;
    }
    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
`;

const Subheading = styled.div`
    width: 10vw;
    color: #474A50;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;

    @media screen and (max-width: 900px) {
      width: 9vw;
      font-size:8px;
    }
    @media screen and (max-width: 601px) {
      font-size: 6px;
    }
    @media screen and (max-width: 400px) {
      font-size: 7px;
    }
`;

const Heading = styled.div`
    width: 55vw;
    text-align:left;
    color: #0B6E4F;
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 600;
    margin: 2vw 0 0 2vw;
    @media screen and (max-width: 1000px) {
      width: 100%;
      font-size: 10px;
      text-align:left;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
      font-size: 10px;
      text-align:left;
    }

    @media screen and (max-width: 601px) {
      width: 50vw;
      font-size: 10px;
    }
    @media screen and (max-width: 400px) {
      width: 40vw;
      font-size: 10px;
    }
`;

const Text = styled.div`
    margin: 0.5vw 0 0 2vw;
    color: #474A50;
    font-family: 'Roboto';
    font-size: 10px;
    font-weight: 500;

    @media screen and (max-width: 900px) {
      font-size: 8px;
    }
    @media screen and (max-width: 601px) {
      font-size: 7px;
    }
    @media screen and (max-width: 400px) {
      font-size: 7px;
    }
`;

 



export default Alert;
