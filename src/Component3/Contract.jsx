import React from "react";
import "./Contract.css"
import Header from "../Components/Header";
import Contractsupply from "../Component3/Contractsupply";
import Contbody from "../Component3/Contbody";
import Contsupp from "../Component3/Contsupp";
import Relatedplan from "../Components2/Relatedplan"
import Test from "../Components2/Test"
import Testimony from "../Components/Testimony";
import Experience from "../Components2/Experience";
import Footer from "../Components/Footer";
import Otherplan from "../Components2/Otherplan";


const Insurance =()=>{
    return(
        <div>
            <Header />
            <Contractsupply />
            <Contbody />
            <Contsupp />
            <Relatedplan />
            <Otherplan />
            <Test />
            <Testimony />
            <Experience />
            <Footer />
        </div>
    )
}
export default Insurance;