import React from "react";
import "./Consultancy.css"
import Header from "../Components/Header"
import Buzcons from "../Components2/Buzcons"
import Bodycons from "./Bodycons";
import Service from "./Service";
import Otherplan from "./Otherplan";
import Relatedplan from "./Relatedplan"
import Test from "./Test";
import Testimony from "../Components/Testimony";
import Experience from "../Components2/Experience";
import Footer from "../Components/Footer";

const Consultancy = ()=>{
    return(
        <div>
            <Header />
            <Buzcons/>
            <Bodycons />
            <Service />
            <Relatedplan />
            <Otherplan />
            <Test />
            <Testimony />
            <Experience />
            <Footer />
        </div>
    )
}
export default Consultancy;