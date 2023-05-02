import pone from "../image/Rectangle 86.png"
import ptwo from "../image/Rectangle 87.png"
import styled from 'styled-components'

const Insurancebody = ()=>{
    return(
        <Wrapper>
            <div className='insurance'>
                <div className="img">
                    <img src={pone} alt="" />
                    <img src={ptwo} alt="" />
                </div>
                <div className='insurCont'>
                    <h4>Intro.</h4>
                    <h2>A Little Introduction About <br /> our Consultancy</h2>
                    <div className='insurancep'>
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients .</p> 
                        <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery. The company was established  to meet the present and future needs of her clients . </p>
                    </div>
                </div>
                
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5rem;
    text-align: left;
    margin-left: 13rem;
    .img{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .insurance h4{
        margin-bottom: 10px;
        color: #F305F8;
    }

    .insurance{
        display: flex;
        gap: 70px;
        align-items: center;
    }
    .insurance h2{
        font-size: 40px;
        margin-bottom: 30px;
    }
    .insurCont{
        width: 40%;
        text-align: justify;
    }
    .insurancep{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    @media screen and (max-width: 950px) {
        .insurCont{
            
        }
    }
`
export default Insurancebody;