// import "./Buzcons.css"
import styled from 'styled-components'
import image from '../image/consImg.png'
import tel from "../image/tel.png"


const Buzcons = ()=>{
    return(
        <Wrapper>
            <div className='allbuzContent'>
                <div className="bContent">
                    <h2>Business Consultancy</h2>
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
flex-direction:column;
background: url(${image});
width: 100%;
/* height: 50vh; */
background-repeat: no-repeat;
background-position: center;
background-size: cover;
text-align: left;
display: flex;
margin-bottom: 5rem;
.allbuzContent{
    /* display: flex; */
    flex-direction: column;
    margin-left: 29rem;
    width: 40%;
    color: white;
    text-align: center;
}
.tel{
    margin-left: 6rem;
    margin-top: 6rem;
}
.bContent h2{
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 6rem;
}
@media screen and (max-width:950px){
    .allbuzContent{
        width: 100%;
        flex-direction: column;
        margin-left: 10px;
        width: 100%;
    }
    .bContent{
        width: 95%;
    }
    .tel{
        margin-left: 1rem;
        margin-bottom: 2rem;
    }
}
`
export default Buzcons;