import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Markdown from "../Util/Markdown";

const TopicMaterial = ({ contentType, content }) => {
  console.log(content);
  return (
    <div sx={{ position: "relative" }}>
      <div>
        {contentType == -1 ? "Select the topic to start reading" : null}
        {contentType === 1 ? (
          <video width="750" height="500" controls>
            <source src={content} type="video/mp4" />
          </video>
        ) : (
          <>
            {/* <section>
              <Markdown source={content}></Markdown>
            </section> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </>
        )}
      </div>

      <Stack
        direction="row"
        spacing={2}
        sx={{
          position: "absolute",
          bottom: "20px",
          bgcolor: "white",
          zIndex: 10,
        }}
      >
        <Button variant="contained" color="success">
          Marked as complete
        </Button>
        <Button variant="outlined" color="success">
          Join the Discussion
        </Button>
      </Stack>
    </div>
  );
};

export default TopicMaterial;
