import "./Mat.css"
import building from "../image/icon-building.png"
import contract from "../image/icon-contract.png"
import skyscraper from "../image/icon-skyscraper.png"

const Mat = () =>{
    return(
        <section className="matservice">
            <h4>Matmos services</h4>
            <div className="matserviceContent">
                <div>
                    <img src={contract} alt="" />
                    <div className="mat1">
                        <h3>General Contracts and Supplies</h3>
                        <ul>
                            <li>Office and Residential Equipment Supplies</li>
                            <li>AC Installation and Servicing</li>
                            <li>Electrical Appliance and Installation</li>
                            <li>CCTV Camera and Installation Services</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={skyscraper} alt="" />
                    <div className="mat2">
                        <h3>Consultancy Service</h3>
                        <ul>
                            <li>Healthcare Consult </li>
                            <li>Start up Coach and Managerial Structural Consult</li>
                            <li>Grant and Business Proposal Consult</li>
                            <li>Growth and Business  Expansion Consult</li>
                            <li>Hospital Training and Staff Capacity development</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={building} alt="" />
                    <div  className="mat3">
                        <h3>Insurance Registration</h3>
                        <ul>
                            <li>Health Insurance Registration</li>
                            <li>Travel Insurance Registration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Mat;