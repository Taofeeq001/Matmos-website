import "./Footer.css"
import log from "../image/Frame 27.png"
import instagram from "../image/instagram.png"
import fb from "../image/facebook.png"
import linkedin from "../image/linkedin.png"
import twitter from "../image/twitter.png"
import copy from "../image/copyright.png"

const Footer = ()=>{
    return(
        <section className="foot">
            <div className="footTop">
                <div className="log">
                    <img src={log} alt="" />
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery.</p>
                </div>
                <div>
                    <h3>Platform</h3>
                    <p>Insurance Management</p>
                    <p>Business Consultancy</p>
                    <p>Contract & Supply</p>
                </div>
                <div>
                    <h3>Company</h3>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Strategy</p>
                    <p>FAQS</p>
                </div>
            </div>
            <div className="socialMedia">
                <div className="socialImg">
                    <a href=""><img src={instagram} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={fb} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>
                </div>
                <div className="copyright">
                    <div>
                    <img src={copy} alt="" />
                    </div>
                    <p>2023-2024 Matmos International Limited. All Rights Reserved</p>
                </div>

            </div>
        </section>
    )
}
export default Footer;

