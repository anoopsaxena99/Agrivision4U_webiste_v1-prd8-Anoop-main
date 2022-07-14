import React from "react";
import Head from "./Head";
import Alert from "./Alert";
function HeaderPRD3(props) {
  return (
    <>
      <Alert></Alert>
      <Head array={props.examTestSeries}></Head>
    </>
  );
}

export default HeaderPRD3;
