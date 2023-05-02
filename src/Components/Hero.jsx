import "./Hero.css"
// import hero from "../image/hero.png"
import tel from "../image/tel.png"

const Hero = ()=>{
    return(
        <section className="hero">
            <h2>Looking for consultancy, <br /> contracts and other services?</h2>
            <p>Matmos International Limited is a Private Company that engage in training for hospital, private and government institutions through Information 7and communication  technology</p>
            <div className="search">
                <input type="search" placeholder="Search Plans" name="" id="" />
                <button>Search</button>
            </div>
            <div className="tel">
                <img src={tel} alt="" />
                <div>
                    <ol className="number">
                        <li>08064034888,</li>
                        <li>07087557554,</li>
                        <li>08034886315</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
export default Hero;

