import styled from "styled-components"

export default function Footer({poster, titulo, dia, horario}){
    return(
        <StyledFooter>
            <img src={poster} alt="poster"></img>
            <StyledInfo>
                <h1>{titulo}</h1>
                <span>{dia} - {horario}</span>
            </StyledInfo>
        </StyledFooter>
    )
}
const StyledFooter = styled.div`
    width: 375px;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 1;
    bottom: 0;
    img {
        width: 64px;
    }
`
const StyledInfo = styled.div`
    h1 {
        font-size: 20px;
        font-family: Roboto;
        color: #293845;
    }
    span {
        font-size: 20px;
        font-family: Roboto;
        color: #293845;
    }
`