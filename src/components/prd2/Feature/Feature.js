import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import styles from "./feature.module.css";
import books from "./Books.jpg";
import Rating from "./Rating";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Feature({ onepack }) {
  // console.log("hello",onepack);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={books} alt="books" className={styles.img} />
          <p className={styles.count}>
            {onepack.userEnrolled / 1000}k enrolled
          </p>
          <div className={styles.rating}>
            <h4 className={styles.ratingCount}>{onepack.rating}</h4>
            <Rating value="4" color="#E59819" />
            <h4
              style={{
                fontSize: "12px",
                margin: "auto",
                padding: "0px",
                color: "#5F5F5F",
              }}
            >
              ( {Math.floor(onepack.userEnrolled * 0.4)} )
            </h4>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.text}>{onepack.name}</p>
          <div className={styles.list}>
            {onepack.subject.map((s) => {
              return (
                <>
                  <div className={styles.point}>
                    <CheckCircleOutlineOutlinedIcon
                      className={styles.icon}
                    ></CheckCircleOutlineOutlinedIcon>
                    <p className={styles.topic}>{s}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.btn52}>
            <ViewLink to={{ pathname: `/package/${onepack.packageId}` }}>
              <Button className={styles.btn007}>View Packages</Button>
            </ViewLink>
          </div>
        </div>
      </div>
    </div>
  );
}
const ViewLink = styled(Link)`
  text-decoration: none;
`;
export default Feature;
