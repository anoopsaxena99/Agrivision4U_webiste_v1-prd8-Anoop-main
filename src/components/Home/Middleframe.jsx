import React from "react";
import { Container } from "../global/Global";
import device from "../Util/MediaQuery";
import styled from "styled-components";


function Middleframe(){
    return (
    <>
    <Center>
        <Headmsg>
            <div><h1><strong>Know about the <span  style ={{color:"#0d7e57"}}>Courses</span></strong></h1></div>
            <div><h1><strong> And select which suits to </strong></h1></div>
            <div><h1><strong>you</strong></h1></div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus inventore sit voluptates illum in, et blanditiis ea dolorem voluptas totam, nulla, quibusdam corrupti reiciendis similique debitis sed. Enim, nesciunt!</p>
        </Headmsg>
        <img src="/images/images/middleimg.svg"></img>
    </Center>
    </>
    )
}
const Center = styled.div`
margin-top:65px;
display:flex;
flex-direction:row;
margin-left:25px;
}
${device.tablet}{
    display:flex;
    flex-direction:column;
}
`
const Headmsg = styled.div`

`

export default Middleframe;