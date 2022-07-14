import styled from "styled-components";
import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Alert = () => {

  
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box1>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Subheading style={{textAlign:'left', marginRight:'13vw'}}>Course: 001</Subheading>
            <Time><img src="images/icons/Ellipse 134.png" style={{transform:'scale(0.4)'}} alt="dot" />You have a class today from 5pm -6pm</Time>
            <Subheading style={{textAlign:'right', marginLeft:'13vw'}}>Batch: Achiever</Subheading>
            </div>
            <Heading style={{paddingLeft: '2vw'}}>Engineering Mathematics</Heading>
            <div style={{display:'flex', flexDirection:'row', marginLeft: '2vw'}}>
                <Text>Exam Target:</Text>
                <Text style={{marginLeft:'1vw'}}>GATE</Text>
            </div>

            <div style={{display:'flex', flexDirection:'row', marginLeft: '2vw'}}>
                <Text>Instructor:</Text>
                <Text style={{marginLeft:'1.75vw'}}>Shubrodip Chatterjee</Text>
            </div>
            <Box2 style={{display:'flex', justifyContent:'center', alignItems:'center'}}><PlayCircleOutlineIcon style={{transform: 'scale(2)', color: '#0B6E4F'}}></PlayCircleOutlineIcon></Box2>
        </Box1>
          
    </div>

  );
};

const Box1 = styled.div`
  width: 75vw;
  height: 30vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #FEFEFE;
  position: relative;
  margin: 4vw 2.66vw 2vw 2vw;
  padding-top: 1.5vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    height: 32vw;
    }

  @media screen and (max-width: 900px) {
    width: 70vw;
    height: 40vw;
    }
 
  @media screen and (max-width: 600px) {
    width: 80vw;
    height: 50vw;
    }

  @media screen and (max-width: 400px) {
    height: 70vw;
    }
`;

const Box2 = styled.div`
  width: 45vw;
  height: 15vw;
  background: rgba(196, 196, 196, 0.5);
  position: relative;
  margin: auto;
  margin-top: 2vw;
  border-radius: 12px;
  @media screen and (max-width: 1000px) {

    }

  @media screen and (max-width: 900px) {
    width: 35vw;
    height: 15vw;
    margin: 4vw 17.5vw 0 17.5vw;
    }
 
 
  @media screen and (max-width: 600px) {
    width: 35vw;
    height: 18vw;
    margin-left: 22.5vw;
    }

  @media screen and (max-width: 400px) {
    width: 45vw;
    height: 25vw;
    margin: 6vw 17.5vw 0 17.5vw;
    }
`;

const Time = styled.div`
    width: 25vw;
    color: #474A50;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 900px) {
      width: 45vw;
    }

    @media screen and (max-width: 600px) {
      width: 55vw;
      font-size: 11px;
    }
    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
`;

const Subheading = styled.div`
    width: 10vw;
    color: #474A50;
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 400;

    @media screen and (max-width: 900px) {
      width: 12vw;
    }

    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
`;

const Heading = styled.div`
    width: 20vw;
    color: #0B6E4F;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 600;
    margin: 2vw 0 0 2vw;

    @media screen and (max-width: 900px) {
      width: 35vw;
    }

    @media screen and (max-width: 600px) {
      width: 35vw;
      font-size: 13px;
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
    font-size: 15px;
    font-weight: 500;

    @media screen and (max-width: 900px) {
      font-size: 12px;
    }

    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
`;

 



export default Alert;
