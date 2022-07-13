import HeaderPRD3 from "../../components/HeaderPRD3/HeaderPRD3";
import TabsPRD3 from "../../components/TabsPRD3/TabsPRD3";
import FreeAndMegaTestSeries from "../../components/FreeAndMegaTestSeries/FreeAndMegaTestSeries";
import { useState, useEffect } from "react";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import { baseURL } from "../../Apis";
import Loader from "../../pages/Loader";


function Prd3() {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (e, value) => {
    setActiveTab(value);
    console.log(value);
  };
  const [repo, setRepo] = useState([]);
  const [Exam, setExam] = useState([]);



  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        `${baseURL}/testseries?page=0`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const json = await response.json();
      if(json.success){
       setRepo(
         json.data.examTestSeries.filter((a) => {
        return a[0] !== null;
        })
       )
      }

    };

    fun();
  }, []);
  
  // console.log("repocede", repo);



  useEffect(() => {

    repo.length && repo[activeTab].length && setExam(repo[activeTab][1]);

  }, [activeTab,repo]);

 

  let priced=[];  
  let free=[];  


for (var i = 0; i < Exam.length; i++) {
      Exam[i].price ? priced.push(Exam[i]) : free.push(Exam[i]);
    }

    if(priced.length) priced = priced;

    if (free.length > 1) {
      free = free.slice(0, 1);
    }

  return (
    <>
     
      <Navbar/>
      {(priced.length || free.length)?(

        <>
      <TabsPRD3
        activeTab={activeTab}
        handleChange={handleChange}
        repo={repo}
      ></TabsPRD3>
      <HeaderPRD3 repo={repo}></HeaderPRD3>
      <FreeAndMegaTestSeries priced={priced} free={free}/>
      </>) : <Loader/>
     }


     <Footer/>
    </>
  );
}

export default Prd3;
