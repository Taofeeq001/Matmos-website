import React from "react";
import "./Insurance.css"
import Header from "../Components/Header";
import InsurManag from "../Component4/InsurManag";
import Insurancebody from "../Component4/Insurancebody";
import Insurplan from "../Component4/Insurplan";
import Relatedplan from "../Components2/Relatedplan"
import Otherplan from "../Components2/Otherplan";
import Test from "../Components2/Test";
import Testimony from "../Components/Testimony";
import Experience from "../Components2/Experience";
import Footer from "../Components/Footer";

const Insurance = ()=>{
    return(
        <div>
            <Header />
            <InsurManag />
            <Insurancebody />
            <Insurplan />
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