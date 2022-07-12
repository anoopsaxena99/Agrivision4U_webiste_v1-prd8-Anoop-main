import HeaderPRD3 from "../../components/HeaderPRD3/HeaderPRD3";
import TabsPRD3 from "../../components/TabsPRD3/TabsPRD3";
import FreeAndMegaTestSeries from "../../components/FreeAndMegaTestSeries/FreeAndMegaTestSeries";
import { useState, useEffect } from "react";
function Prd3() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
    console.log(value);
  };
  const [repo, setRepo] = useState([]);
  const [Exam, setExam] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  // const [Exam, setExam] = useState();
  const getRepo = async () => {
    const res = await fetch(
      "https://api.agrivision4u.com/v1/testseries?page=0"
    );
    const response = await res.json();

    // console.log(myrepo.examTestSeries[0]);
    if (res.status === 200) {
      const myrepo = response.data;
      // console.log(typeof myrepo.examTestSeries);
      // setRepo(myrepo.examTestSeries);
      setRepo(
        myrepo.examTestSeries.filter((a) => {
          return a[0] !== null;
        })
      );
      // console.log(repo);
    }
  };

  useEffect(() => {
    getRepo();
    console.log(activeTab);

    repo.length && repo[activeTab].length && setExam(repo[activeTab][1]);
    // repo.length && repo[activeTab].length && console.log(repo[activeTab][1]);
    for (var i = 0; i < Exam.length; i++) {
      if (Exam[i].price) {
        // console.log(Exam[i], "exam hai ");
        arr1.push(Exam[i]);
      } else {
        arr2.push(Exam[i]);
      }
    }
    setArr1(arr1);
    if (arr2.length > 1) {
      setArr2(arr2.slice(0, 1));
    }
    console.log(arr1, "array hai price wale"); // mega test mein
    console.log(arr2, "array hai free wale"); // free test mein
  }, [activeTab]);
  return (
    <>
      <TabsPRD3
        activeTab={activeTab}
        handleChange={handleChange}
        repo={repo}
      ></TabsPRD3>
      <HeaderPRD3 repo={repo}></HeaderPRD3>
      <FreeAndMegaTestSeries arr1={arr1} arr2={arr2}></FreeAndMegaTestSeries>
    </>
  );
}

export default Prd3;
