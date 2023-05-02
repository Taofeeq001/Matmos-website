import body from '../image/intro..png'
import styled from 'styled-components'

const Bodycons = ()=>{
    return(
        <Wrapper>
            <div className='littleintro'>
                <div className='littleCont'>
                    <h4>Intro.</h4>
                    <h2>A Little Introduction About <br /> our Consultancy</h2>
                    <div className='littlep'>
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients .</p> 
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                    </div>
                </div>
                <img src={body} alt="" />
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 5rem;
    text-align: left;
    margin-left: 13rem;

    .littleintro h4{
        margin-bottom: 10px;
        color: #F305F8;
    }

    .littleintro{
        display: flex;
        gap: 70px;
        align-items: center;
    }
    .littl7ntro h2{
        font-size: 40px;
        margin-bottom: 30px;
    }
    .littleCont{
        width: 40%;
        text-align: justify;
    }
    .littlep{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    @media screen and (max-width: 950px) {
        .littleintro{
            width: 100%;
            flex-direction: column;
            display: flex;
            margin-left: -10rem;
            gap: 15px;
        }
        .littleintro img{
            width: 110%;
        }
        .littleintro h2{
            font-size: 20px;
            margin-bottom: 15px;
        }
        .littleCont{
            width: 100%;
            margin-left: 0;
        }
    }
`

export default Bodycons;