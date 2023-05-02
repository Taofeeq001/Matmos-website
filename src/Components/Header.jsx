import { Link } from "react-router-dom";
import logo from "../image/logo.png"
import "./Header.css"
import hamburger from "../image/icon-hamburger.svg"
import close from "../image/icon-close.svg"
import { useState } from "react";

const Header = ()=>{
    const [openToggle, setOpenToggle] = useState(false);
    const handleToggle = () => {
        setOpenToggle(!openToggle)
    }

    return(
        <section className="head">
            <div>
                <img className="logo" src={logo} alt="" />  
            </div>
            <div className="desk-nav" >
                <ol>
                    <li><Link to ="/"> Home</Link></li>
                    <li><Link to={'/consultancy'}>Consultancy</Link></li>
                    <li><Link to = {'/contract'}>Contract & Supply</Link></li>
                    <li><Link to ={'/insurance'}>Insurance</Link></li>
                    <li><Link to ={'/about'}>About</Link></li>
                </ol>
            </div>
           <div className={`${openToggle? "mobile-nav nav-sub" : "mobile-nav"}`}>
                <ol>
                    <li><Link to ="/"> Home</Link></li>
                    <li><Link to={'/consultancy'}>Consultancy</Link></li>
                    <li><Link to = {'/contract'}>Contract & Supply</Link></li>
                    <li><Link to ={'/insurance'}>Insurance</Link></li>
                    <li><Link to ={'/about'}>About</Link></li>
                </ol>
            </div>
            <button onClick={handleToggle} className="hamburger">
                {openToggle? <img src={close} alt = "" /> : <img src={hamburger} alt = "" />}
            </button>
        </section>
        
    )
}
export default Header;