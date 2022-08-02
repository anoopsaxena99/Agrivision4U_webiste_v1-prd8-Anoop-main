import React from 'react';
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
import styled from "styled-components";

const Servicesdata = [
    {
        image:"/images/icons/Agriabhyas.svg",
        heading:'Agriabhyas',
        data:'lorem ipsumn evnijbnnsbnb bnwonbw jbmwnjnb',
    },
    {
        image:"/images/icons/Skillbazaar.svg",
        heading:'Skillbazaar',
        data:'lorem ipsumn evnijbnnsbnb bnwonbw jbmwnjnb',
    },
    {
        image:"/images/icons/Labconnect.svg",
        heading:'Lab Connect',
        data:'lorem ipsumn evnijbnnsbnb bnwonbw jbmwnjnb',
    },
    {
        image:"/images/icons/Grains.svg",
        heading:'Grains',
        data:'lorem ipsumn evnijbnnsbnb bnwonbw jbmwnjnb',
    }
]
const Services =()=>{
    return (
        <>
            <MainHeader>Services</MainHeader>
            <Wrapper>
         
                {Servicesdata.map(Servicesdata => {
                  return (
                    <>
                    <ReviewBox>
                    <div>
                      <img  style={{ maxHeight:'45px',marginLeft: "20px",marginTop:"25px"}}  src={Servicesdata.image} alt="" />
                    </div>
                    <div style={{marginTop:"20px",marginLeft: "20px"}} ><h3><strong>{Servicesdata.heading}</strong></h3></div>
                  <div style={{padding:"20px",height:"11rem"}} >
                    {Servicesdata.data}
                  </div>
                </ReviewBox>
                  </>
                  )
                })}
                
                </Wrapper>
                </>
                );
            }
            

//const ReviewContainer = styled(Container)``
//min-height: 35rem;
//padding: 1rem 0;
//color: black;`

const Wrapper = styled.section `
display:flex;
          }
${device.mobileM}{
  flex-direction:column;
}
${device.mobileL}{
flex-direction:column;
}

`;
const MainHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  font-weight: 800;
  padding: 0;
  color: #0B6E4F;
  ${device.tablet} {
    font-size: 1.5rem;
  }

`
const ReviewBox = styled.div`
width:22%;
margin-left:35px;
border-radius:10px;
box-shadow: 2px 2px 8px 10px rgb(240,239,240);
${device.mobileL}{
  width: 15rem;
  height: 17rem;
  padding: 5px;
}
`
export default Services;