import React from "react";
import './Home.css'
import Header from "./Header";
import Hero from "./Hero";
import "./Home.css"
import About from "./About";
import Mat from "./Mat";
import Feature from "./Feature";
import Testimony from "./Testimony";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ()=>{
    return(
        <section>
            <Header />
            <Hero />
            <About />
            <Mat />
            <Feature />
            <Testimony />
            <Contact />
            <Footer />
        </section>
    )
}
export default Home;
