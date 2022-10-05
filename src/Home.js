import styled from "styled-components"

export default function Home(){
    return(
        <StyledHome>
            <h1>Selecione o filme</h1>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    width: 375px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    h1 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        margin-top: 50px;
    }
`