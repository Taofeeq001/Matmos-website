import styled from "styled-components";
import trust from "../image/client-6.png"
import myob from "../image/client-1.png"
import lilly from "../image/client-2.png"
import citrus from "../image/client-3.png"
import life from "../image/client-4.png"
import belimo from "../image/client-5.png"

const Test = ()=>{
    return(
        <Wrapper>
            <div className="testOne">
                <div>
                    <img src={trust} alt="" />
                </div>
                <div>
                 <img src={myob} alt="" />
                </div>
                <div>
                    <img src={lilly} alt="" />
                </div>
                <div>
                    <img src={citrus} alt="" />
                </div>
                <div>
                    <img src={life} alt="" />
                </div>
            </div>
            <div className="last">
                <img src={belimo} alt="" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 13rem;
    gap: 30px;
    width: 100%;
    .testOne{
        width: 100%;
        display: flex;
        gap: 80px;
        align-items: center;
    }
    @media screen and (max-width: 950px) {
        .testOne{
            flex-direction: column;
            margin-left: -13rem;
        }
        .last{
            margin-left: -7rem;
        }
    }
`
export default Test;

