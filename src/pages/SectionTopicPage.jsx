import React from 'react';
import TopicPageLayout from "../components/Section/TopicPageLayout"
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";


function SectionTopic(props) {
    return (
        <>
            <Navbar />
            {/* {console.log("ajit", props)}; */}
            <TopicPageLayout courseId={props.match.params.id1} chapterId={props.match.params.id2} />
            <Footer />
        </>
    )
}

export default SectionTopic
