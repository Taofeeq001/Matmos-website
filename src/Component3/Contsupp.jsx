import styled from "styled-components";
import coach from "../image/startcoach.png"
import grant from "../image/grantbuz.png"
import growth from "../image/growthbuz.png"
import { Link } from "react-router-dom";

const Contsupp = ()=>{
    return(
        <Wrapper>
            <div className="serviceHead">
                <h4>Services</h4>
                <h1>Contract & Supply Plans</h1>
            </div>
            <div className="serv">
                <figure>
                    <img src={coach} alt="" />
                    <h4>Start Up Coach & Managerial <br /> Structural Consult</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                        <button><Link>Get Started</Link></button>
                    </div>
                </figure>
                <figure>
                    <img src={grant} alt="" />
                    <h4>Grant and Business Funding Consult</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div>
                        <button><Link>Get Started</Link></button>
                    </div>
                </figure>
                <figure>
                    <img src={growth} alt="" />
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
    text-align: left;
    margin-left: 13rem;
    margin-bottom: 4rem;
    .serviceHead{
        margin-bottom: 2rem;
    }
    .serviceHead h4{
        color: #F305F8;
    }
    .serv{
        display: flex;
    }
    figure{
        text-align: left;
        margin-right: 7rem;
        width: 100%;
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
        .serviceHead{
            margin-top: 2rem;
            margin-left: -12rem;
        }
        .serviceHead h1{
            font-size: 25px;
        }
        .serv{
            flex-direction: column;
            gap: 20px;
        }
        figure{
            width: 100%;
            margin-left: -12rem;
        }
        figure p, figure h4{
            width: 180%;
        }
    }
`
export default Contsupp;