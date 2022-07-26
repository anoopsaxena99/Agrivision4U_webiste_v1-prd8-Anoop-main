import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const TopBreadCrumbs = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div
      role="presentation"
      onClick={handleClick}
      style={{
        backgroundColor: "white",
        paddingBottom: "10px",
        display: "flex",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="#0B6E4F" href="/">
          Dashboard
        </Link>
        <Link underline="hover" color="#0B6E4F" href="/some-route/">
          Subject
        </Link>
        <Typography color="#0B6E4F">Topic</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default TopBreadCrumbs;
