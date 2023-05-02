import "./Testimony.css"
import ibrahim from "../image/ibrahim.png"
import female from "../image/ibr-female.png"

const Testimony = ()=>{
    return(
        <section className="testimony">
            <div className="top">
                <h4>Testimonies</h4>
                <h2>Here What Our Clients are Saying</h2>
            </div>
            <div className="testContent">
                <div className="test1">
                    <div className="picName">
                        <img src={ibrahim} alt="" />
                        <h3>Ibrahim Adebayo</h3>
                    </div>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery.</p>
                </div>
                <div className="test1">
                    <div className="picName">
                        <img src={female} alt="" />
                        <h3>Ibrahim Adebayo</h3>
                    </div>
                    <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery.</p>
                </div>
            </div>
        </section>
    )
}
export default Testimony;