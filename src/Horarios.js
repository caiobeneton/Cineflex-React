import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Horarios({dia, data, horarios}){
    
    return(
        <StyledHorarios>
            <h1>{dia} - {data}</h1>
            <Container>
                {horarios.map((hor) => <Link to={`/assentos/${hor.id}`} key={hor.id}>
                    <Caixa>{hor.name}</Caixa>
                </Link> )}
            </Container>
        </StyledHorarios>
    )
}

const StyledHorarios = styled.div`
    margin-bottom: 20px;
    h1 {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        color: #293845;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Caixa = styled.div`
    width: 83px;
    height: 43px;
    border-radius: 3px;
    background-color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: Roboto;
`