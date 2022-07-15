import React from "react";
import PropTypes from "prop-types";
import App from "../sprd6";

function prd6Main(props) {
  console.log(props.match.params);
  return (
    <div>
      <App
        courseId={props.match.params.id1}
        chapterId={props.match.params.id2}
        topicId={props.match.params.id3}
      />
    </div>
  );
}

export default prd6Main;
