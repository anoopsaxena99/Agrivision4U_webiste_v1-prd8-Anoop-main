import React from 'react';
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import Rating from "../../../components/PaymentPg/Rating";
import device from "../../../components/Util/MediaQuery";
import useWindowDimensions from '../../../components/Util/useWindowDimensions';


const Feedback = () => {
    const ratingChanged = (newRating) => {
//   console.log(newRating);
};
const {width} = useWindowDimensions();
let x=["Ajit","Nikhil","Ritu","Shritij","Ramu","Hutesh","Vaibhav",];
  return (
    <Div>
        <FeedBack>
        <Name>Students Feedback</Name>
        <Block>
            <Name1>Course Rating</Name1>
            <Rate>0.0</Rate>
            <ReactStars
    count={5}
    onChange={ratingChanged}
    size={44}
    activeColor="#ffd700"
  />
            <Comment>Comments</Comment>
            <input style={{border: "1px solid black",background:'#EFEFEF'}} type="text" placeholder='Headline' disabled/>
            {width>1200?
            <textarea style={{border: "1px solid black",background:'#EFEFEF',padding: "5px",resize:"none"}} name="comment" cols="60" rows="10" placeholder='Please add your feedback and reviews here' disabled></textarea>
            :
            <textarea style={{border: "1px solid black",background:'#EFEFEF',padding: "5px",resize:"none"}} name="comment" cols="35" rows="10" placeholder='Please add your feedback and reviews here' disabled></textarea>

        }
            <Button1>Submit</Button1>
        </Block>
        </FeedBack>
        <Reviews>
        <Name>Students Reviews</Name>
        <Block1>
            {x.map((e)=>{
                return <>
                    <Comments>
                <Img src='/images/boy1.png' ></Img>
                <Matter>
                    <Name2>
                        {e}
                    </Name2>
                    <Rating value="4" color ="#E59819" />
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique amet minus soluta ea, officia accusamus excepturi vero. Asperiores, officiis, at illum dolorem soluta voluptatem nisi expedita, eum laudantium dolor culpa!</div>
                </Matter>
            </Comments>    
                </>
            })}
            
        </Block1>
        </Reviews>
    </Div>
  )
}

const Div = styled.div`
    width: 90%;
    margin: auto;
    padding: 20px;
    display: flex;
    gap: 40px;
    ${device.laptopL}{
        flex-direction:column;
    }
`

const Name2 = styled.h2`
  color: #5F5F5F;
  font-weight: 450;
  font-size: 25px;
  margin-bottom: 5px;
`
const Matter = styled.div`
display: flex;
flex-direction: column;
`
const Img = styled.img`
border-radius: 50%;
`
const Comment = styled.h2`
  color: #5F5F5F;
  font-weight: 400;
  font-size: 18px;
  
`
const Comments = styled.div`
//border: 1px solid green;
padding: 5px;
display: flex;
flex-direction: row;
padding: 10px;
gap: 40px;
`
const Button1 = styled.button`
display: block;
color:white;
background: #13AE7E;
border-radius: 8px;
padding: 8px 24px;
margin:5px;
font-size: 13px;
line-height: 1.5rem;
font-weight: 600;
cursor: pointer;
transition: opacity 0.3s ease-in-out;
&:hover {
  opacity: 0.9;
}
`;
const Rate = styled.div`
color: #696F79;
line-height: 30px;
margin-bottom: 20px;
font-size: 40px; 
`
const Name1 = styled.h2`
  color: #5F5F5F;
  font-weight: 450;
  font-size: 25px;
  margin-bottom: 30px;
`
const Reviews = styled.div`
width: 50%;
${device.laptopL}{
    width: 80%;
    margin: autp;
}
`
const FeedBack = styled.div`
width: 46%;
${device.laptopL}{
    width: 80%;
    margin: autp;
}
`
const Block = styled.div`
padding:20px;
height: 630px;
background: #FFFFFF;
border: 1px solid #5F5F5F;
box-sizing: border-box;
border-radius: 11.6865px;
`
const Block1= styled.div`
height: 630px;
padding:20px;
background: #FFFFFF;
//border: 1px solid #5F5F5F;
box-sizing: border-box;
display: flex;
gap: 40px;
flex-direction: column;
border-radius: 11.6865px;
overflow: auto;
::-webkit-scrollbar {
    width: 3px;
    height: 2px;
    border-radius:8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(86.94deg, #1BBC9B 0%, #1BBC9B 0.01%, #16A086 100%);
    
  }
  
  ::-webkit-scrollbar-thumb:hover {
    opacity:50%;
  }
`
const Name = styled.h2`
  color: #0B6E4F;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 35px;
`
export default Feedback 