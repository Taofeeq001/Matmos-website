import styled from "styled-components";
import corpbuz from "../image/corpbuz.png"
import copy from "../image/copy2.png"
import start from "../image/startup.png"
import { Link } from "react-router-dom";

const Otherplan = ()=>{
    return(
        <Wrapper>
            <div className="planHead">
                <h4>Service</h4>
                <h1>Related Plan</h1>
            </div>
            <div className="otherPlan">
                <figure>
                    <img src={corpbuz} alt="" />
                    <h4>Start Up Coach & Managerial <br /> Structural Consult</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                        <button><Link>Get Started</Link></button>
                    </div>
                </figure>
                <figure>
                    <img src={copy} alt="" />
                    <h4>Grant and Business Funding Consult</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                        <button><Link>Get Started</Link></button>
                    </div>
                </figure>
                <figure>
                    <img src={start} alt="" />
                    <h4>Growth and Business Expansion Consult</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                        <button><Link>Get Started</Link></button>
                    </div>
                </figure>
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 13rem;
    margin-bottom: 5rem;
    text-align: left;
    .planHead{
        margin-bottom: 2rem;
    }

    .otherPlan{
        display: flex;
    }
    figure{
        width: 20%;
        background-color: white;
        text-align: left;
        margin-right: 7rem;
    }
    figure button{
        margin-top: 10px;
        padding: 10px 15px;
        background-color: #F305F8;
        border: none;
        border-radius: 15px;
    
    }
    figure button a{
        text-decoration: none;
        color: white;
    }
    @media screen and (max-width: 950px) {
        .planHead{
            margin-left: -10rem;
        }
        .planHead h1{
            font-size: 22px ;
        }
        .otherPlan{
            margin-left: -11rem;
            flex-direction: column;
            width: 100%;
            gap: 20px;
        }
        figure{
            width: 100%;
        }
    }
`
export default Otherplan;