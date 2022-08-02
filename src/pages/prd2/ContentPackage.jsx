import React from "react";
import PropTypes from "prop-types";
import Aplp from "./slide";
import Appk from "./gatetab";
import "./Coursepage.css";
import { useState, useEffect } from "react";
import { baseURL } from "../../Apis";
import Loader from "../Loader";


function ContentPackage({ subject }) {
  const [packs, setpacks] = useState(null);
  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(`${baseURL}/package?exam=${subject}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const json = await response.json();
      if (json.success) {
        setpacks(json.data);
      }
    };
    fun();
    // eslint-disable-next-line
  }, [subject]);
  let pack = [];
  let subjects = new Set();
  // console.log(packs);
  if (packs) {
    packs.map((type) => {
      type.packages.map((p) => {
        pack.push(p);
        p.subject.map((s) => {
          subjects.add(s);
        });
      });
    });
  }
  subjects = Array.from(subjects);

  return (
    <>{ pack.length?
      (<>
      <span className="heading">
        <span className="heading1">{subject} -2016 </span>
        Winner's Preparation Package
      </span>
      <div className="description">
        WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec
        odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per
        conubia nostra, per inceptos himenaeos. ante dapibus diam.
      </div>
      <Appk pack={pack} />
      {/* <Card1/> */}
      <span className="heading7">
        <span className="heading1">
          {subject} - Subject Wise Preparation Packages
        </span>
        
      </span>
      <Aplp subjects={subjects} />
    </>):( subject=="CFS/SO" || subject=="ICAR" ?(<img src="/images/coming-soon.svg" 
    alt="coming-soon" style={{height:'600px' ,'margin-left':'250px'}}></img>):(<Loader/>))
    }</>
  );
}

export default ContentPackage;
