// import Navbar from "../../components/global/Navbar";
// import Footer from "../../components/global/Footer";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../Apis";
import Head from "./CoursePage/Head";
import Bottom from "./CoursePage/Bottom";
import Reviews from "./CoursePage/Reviews";
import Plans from "./CoursePage/Plans";
import Feedback from "./CoursePage/Feedback";
import Footer from "../../components/global/Footer";
import Loader from "../Loader";
// import Bottom from "./bottom";

const CoursePage = ({ active, packageId, notify, refral, resetRefral }) => {
  const [item, setitem] = useState(null);
  const [includes, setincludes] = useState(null);

  useEffect(() => {
    let url = `${baseURL}/package/${packageId}`;
    const fun = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      // console.log(json);
      // if (json.data.includes) {
      //   setincludes(
      //     json.data.includes.length !== 0 ? json.data.includes : null
      //   );
      // }
      setitem(json.data);
    };
    fun();
    // eslint-disable-next-line
  }, []);
  if (item) console.log("hello", item.name);
  return (
    <>
      {item ? (
        <>
          <Head item={item} />
          <Reviews item={item} />
          <Plans item={item} />
          <Feedback />
          <Bottom item={item} />
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default CoursePage;
