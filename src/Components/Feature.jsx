import "./Feature.css"
import buz from "../image/Your-buz.png"
import assured from "../image/Rest-Assured.png"
import health from "../image/heathier.png"

const Feature = ()=>{
    return(
        <section className="features">
            <h4>Matmos services</h4>
            <h1>Matmos has become the best <br /> Consultancy Platform for Busineses.</h1>
            <div className="featuresDown">
                <img src={buz} alt="" />
                <div className="featureContent">
                    <h2>Take your Business to <br /> the Next Phase</h2>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                </div>
            </div>            
            <div className="featuresDown">
                <div className="featureContent">
                    <h2>Rest Assured and see the Differences</h2>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                </div>
                <img src={assured} alt="" />
            </div>            
            <div className="business">
                <div className="businessContent">
                    <h2>Become Heathier and Happier.</h2>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery.</p>
                    <div>
                        <button><a href="">Get in Touch</a></button>
                    </div>
                </div>
                <img className="health" src={health} alt="" />
            </div>            
        </section>
    )
}
export default Feature;