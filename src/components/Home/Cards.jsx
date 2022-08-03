import styled, { css } from "styled-components";
import { Container } from "../global/Global";
import { Button } from "../global/Global";
import device from "../Util/MediaQuery";
const CardData = [
  {
    img: "/images/learning_girl.svg",
    heading: "Learning"
  },
  {
    img: "/images/practice_girl.svg",
    heading: "Practice and Testing"
  },
  {
    img: "/images/lecture_boy.svg",
    heading: "Expert Lectures"
  },
];

const Cards = () => {
  return (
    <Wrapper>
 {/*     <StyledCards>
        
        {CardData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        
      </StyledCards>
        */}
  <h1 style= {{marginLeft:"2rem", color:"rgb(26,26,26)",marginTop:"65px"}}> A  Message  from  our  founder</h1>
      <Background>
      <StyledMsgs>
        
         
          
          <MessageBox2>
            <h4 style={{margin:"0px 0px 30px"}}>To share great modern and contemporary art with the public</h4>
            <p style={{margin:"30px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <div style={{display: "flex",padding:"2rem",justifyContent: "space-between"}}>
              <StyledButton style = {{backgroundColor:"rgb(19,174,126)"}}>Explore courses</StyledButton>
              <StyledButton style = {{backgroundColor:"rgb(19,174,126)"}}>Test yourself</StyledButton>
            </div>
          
          </MessageBox2>
          <MessageBox>
            <div style={{width:"120px", height: "120px",margin:'auto',borderRadius:"100%", background: "grey"}}></div>
      
            <p style={{margin:"20px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <h6 style={{float:"right"}}><strong> -Raju Prajapati </strong></h6>
          </MessageBox>
         
      </StyledMsgs>
      </Background>      
      <StyledMsgs2>
        <Img src="/images/sneakpeakpic.svg" alt="sneak-peak"/>
        <MessageBox3>
            <h2 style={{marginLeft:"12px"}}>A <span style={{color:"rgba(11, 110, 79, 1)"}}>sneak-peak</span> under our courses</h2>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic1.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic2.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            <TextCont>
              <img style={{width:"80px"}} src="/images/sneakpeakpic3.svg" alt="1"/>
              <p style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do</p>
            </TextCont>
            {/* <p style={{margin:"20px 0px", fontSize:"14px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu. 
adipiscing elit, sed do eiusmod tempor incididunt ut labo.</p>
            <h5 style={{float:"right"}}>-Raju Prajapati</h5> */}
          </MessageBox3>
      </StyledMsgs2>
      <StyledMsgs3>
            <div style={{width: "450px"}}>
              <h2>Subject</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div style={{width: "450px"}}>
              <h2>Faculty</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
      </StyledMsgs3>
    
    </Wrapper>
  );
};
/*
const Card = ({ item }) => {
  return (
    <StyledCard>
      <img src={item.img} alt="" />
      <>
        <CardHeader>{item.heading}</CardHeader>
      </>
    </StyledCard>
  );
};
*/
const Background = styled.div`
background-color:rgb(197,220,213);
height:24rem;

`
const Img = styled.img`
    width: 750px;
    ${device.tablet}{
      width: 400px;
    }
`

const Wrapper = styled.section`
  background: white;
  margin-bottom: 5rem;
  font-family: 'Poppins', 'Roboto', sans-serif;
`;

const StyledCards = styled.div`
border-radius:15px;
  min-height: 29rem;
  color: black;
  margin-top: 64px;
  margin-bottom:45px;
  margin-left:55px;
  margin-right:55px;
  display: flex;
  flex-wrap: wrap;
  box-shadow:2px 2px 8px 10px rgb(240,239,239);
  align-items: center;
  justify-content: center;
  gap: 55px;
`;

const StyledMsgs = styled(Container)`
  color: black;
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 120px;
  
`;

const StyledMsgs2 = styled(Container)`
  color: black;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  }
  ${device.mobileL}{
    margin-top:700px;
  };
  ${device.tablet}{
    margin-top:700px;
  }
  ${device.laptop}{
    margin-top:700px;
  }
`;

const StyledMsgs3 = styled(Container)`
  color: white;
  width: 75%;
  background: #0B6E4F;
  margin-top: 64px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  gap: 60px;
`
const TextCont = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;

`

const MessageBox = styled.div`
    width: 28.12rem;
    height:31.25rem;
    margin-top:-60px;
    margin-bottom:-60px;
    background: white;
    border:30px solid rgb(197,220,213);
    padding: 20px;
  }
    ${device.mobileL}{
    width:20rem;
    }
    ;
`

const MessageBox3 = styled.div`
    width: 400px;
    background: white;
    padding: 20px;
`

const MessageBox2 = styled.div`
    width: 37.5rem;
    height:22rem;
    background: white;
    padding: 35px;
    border:25px solid rgb(197,220,213);
      }
    ${device.mobileL}{
    width:8 rem;
    height:auto;
    border:15px solid rgb(197,220,213);
    }
    
`

const StyledButton = styled(Button)`
  background: #0B6E4F;
  font-size: 12px;
  color: white;
`;

const StyledCard = styled.div`
  width: 420px;
  img {
    width: 21rem;
    height: 18.5rem;
    object-fit: cover;
  }
`

const CardHeader = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-top: 28px;
  text-align: center;
`

export default Cards;
