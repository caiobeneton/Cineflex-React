import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Poster({posterURL, id}) {
    return(
        <StyledPoster>
            <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt="poster"></img>
            </Link>
        </StyledPoster>
    )
}

const StyledPoster = styled.div`
    img {
        width: 140px;
        margin-bottom: 20px;
    }
`