import styled from "styled-components";
import back from "../image/Rectangle 85.png"

const Experience = ()=>{
    return(
        <Wrapper>
            <div className="expContent">
                <h1>Experience the Life of been Healthier.</h1>
                <p>Matmos International Limited is a private Company incorporated by the Corporate Affair Commission  (CAC) owned by reputable Nigerian Citizen with  high integrity and vast experience in various facets of human endeavor with undiluted passion for service delivery.</p>
                <div className="btn">
                    <button><a href="">Contact Us</a></button>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .expContent{
        background-color: #D900FC;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 9rem;
        margin-bottom: 4rem;
        width: 80%;
    }
    .btn{
        margin-top: 40px;
    }
    .btn button{
        padding: 12px 18px;
        border: none;
        background-color: white;
        border-radius: 12px;
    }
    .btn button a{
        text-decoration: none;
        color: #D900FC;
    }
    @media screen and (max-width: 950px) {
        .expContent{
            margin-left: 0;
        }
        .expContent{
            width: 100%;
        }
    }
`
export default Experience;