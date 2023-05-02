import "./About.css"
import abt from "../image/AboutUs.png"

const About = ()=>{
    return(
        <section className="AboutUs">
            <div className="imgAbt">
                <img src={abt} alt="" />
            </div>
            <div className="aboutContent">
                <h4>About</h4>
                <div className="abtContent">
                    <h2>About Us</h2>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                </div>
                <div>
                    <button><a href="">Get in Touch</a></button>
                </div>
            </div>
        </section>
    )
}
export default About;