import styled from 'styled-components'
import image from '../image/consImg.png'
import tel from "../image/tel.png"


const Contractsupply = ()=>{
    return(
        <Wrapper>
            <div className='allbuzContent'>
                <div className="bContent">
                    <h2>Contract & Supply Management</h2>
                    <p>Matmos International Limited is a Private Company that engage in training for hospital, private and government institutions.</p>
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
            </div>
            
        </Wrapper>
    )
}


const Wrapper = styled.div`
.allbuzContent{
    flex-direction:column;
    background: url(${image});
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
    display: flex;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    justify-content: center;
}
.tel{
    margin-top: 6rem;
    margin-bottom: 3rem;

}
.bContent h2{
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 3rem;
}
@media screen and (max-width: 950px) {
    .allbuzContent{
        padding: 20px;
    }
    .bContent h2{
        font-size: 35px;
    }
}
`
export default Contractsupply;