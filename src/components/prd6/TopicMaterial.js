import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Markdown from "../Util/Markdown"
import NoVideo from "./noVideoLecture.jpg"
import NoNotes from "./noNotesAvailable.png";
import styled from "styled-components";

const TopicMaterial = ({ contentType, content ,ctype }) => {
  console.log('content', content)
  return (
    <div sx={{position: 'relative'}}>
      <div>

        {contentType == -1 ? <img style={{ height: "82vh", width: "60vw" ,'margin-left':'100px' ,'padding':'2%' }} src="/images/ChapterPageLogo.svg" alt="Select any subtopic to start learning"/> : null}
        {contentType === 1 ? (
          (ctype == 1)?(
          <video width="1080" height="570" controls controlsList="nodownload">
            <source src={content} type="video/mp4" />
          </video>):(<img src={NoVideo} alt="No Video Available" style={{height: '82vh', width: '60vw','margin-left':'130px' ,'padding':'3%'}}/>)
        ) :(contentType === 0 ? (
          (ctype == 0)?(
          <section>
            <Markdown source={content}></Markdown>
          </section>):(<img src={NoNotes} alt="No Notes Available" style={{height: '82vh', width: '40vw','margin-left':'250px', 'padding':'3%'}}/>)
         
        ):(<></>))}

      </div>
      
      
      <Stack direction="row" spacing={2} sx={{  marginLeft:'30%', bgcolor:'white', zIndex: 10}}>
        {contentType!=-1? (
          <>
        <Button variant="contained" color="success">
          Marked as complete
        </Button>
        <Button variant="outlined" color="success">
        Join the Discussion
      </Button>
      </>
      ):(<></>)}
        
      </Stack>
    </div>
  );
};

export default TopicMaterial;
