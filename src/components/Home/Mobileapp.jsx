import styled from "styled-components";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
import useWindowDimensions from "../Util/useWindowDimensions";
import React from "react";


function Mobileapp(){
    return(
        <Screen style ={{}}>
            <div style ={{color:'white',margin:'auto',marginLeft:"20px"}}><h1><strong>Download our mobile app</strong></h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi fuga deserunt voluptas sit optio architecto quidem quaerat, consequuntur alias. Fuga explicabo laudantium velit et mollitia error unde pariatur voluptatem quaerat!
            <button style ={{ width:'150px',backgroundColor:"white",marginTop:"20px",color:"#0d7e57",height:'30px',borderRadius:"5px"}}><span style ={{margin:'auto'}}>Download Now</span></button></div>
        </Screen>
    )
}
const Screen = styled.div`
background-color:#0d7e57;
height:17rem;
border-radius:15px;
display:flex;
flex-direction:column;
margin-right:800px;
margin-left:150px;
margin-bottom:80px;
}
${device.tablet}{
    margin:0;
    margin-bottom:150px;
    margin-bottom:80px;
}
`
export default Mobileapp;