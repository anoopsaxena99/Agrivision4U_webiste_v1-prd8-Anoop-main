import Layout from "../../components/Course/All Courses/Layout";
import Navbar from "../../components/global/Navbar";
import Sidebar from "../../components/Course/Sidebar";
import styled from "styled-components";
import useWindowDimensions from "../../components/Util/useWindowDimensions";
import CoursePages from "../prd2/link";
import Footer from "../../components/global/Footer";
function Learning() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Navbar course />
      <CoursePages />
      <Footer />
    </>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  overflow: hidden;
`;
const StyledLayout1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Learning;
