import styled from "styled-components"

export default function Topo(){
    return(
        <StyledTopo>
            <h1>CINEFLEX</h1>
        </StyledTopo>
    )
}

const StyledTopo = styled.div`
    width: 375px;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    h1 {
        font-family: Roboto;
        font-weight: 400;
        font-size: 36px;
        color: #E8833A;
    }
`