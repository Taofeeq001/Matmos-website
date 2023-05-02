import train from "../image/train.png"
import ship from "../image/ship.png"
import styled from 'styled-components'

const Contbody = ()=>{
    return(
        <Wrapper>
            <div className='littleIntro'>
                <div className='littleCont'>
                    <h4>Intro.</h4>
                    <h2>A Little Introduction About <br /> our Consultancy</h2>
                    <div className='littlep'>
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients .</p> 
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                    </div>
                </div>
                <div className="image">
                    <img src={train} alt="" />
                    <img className='ship' src={ship} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    .littleIntro{
        display: flex;
        gap: 100px;
        margin-left: 13rem;
    }
    .littleCont{
        width: 40%;
        text-align: justify;
    }
    .littleIntro h4{
        margin-bottom: 10px;
        color: #F305F8;
    }
    .ship{
        position: absolute;
        left: 59%;
        top: 60%;
    }
    .littlep{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    @media screen and (max-width: 950px) {
        .littleIntro{
            flex-direction: column;
            margin-left: 2rem;
            width: 100%;
        }
        .littleCont{
            width: 90%;
        }
        .littleIntro .image{
            width: 100%;
            margin-left: -2rem;
        }
        .littleIntro .image img{
            width: 80%;
        }
        .ship{
            position: absolute;
            top: 143%;
            left: 18%;
        }
    }
`
export default Contbody;