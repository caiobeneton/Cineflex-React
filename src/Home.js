import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import Poster from "./Poster"

export default function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        const promise = axios.get(URL)

        promise.then(resposta => {
            setFilmes(resposta.data)
        })

        promise.catch(err => {
            console.log(err.response.data)
        })
    }, [])

    return(
        <StyledHome>
            <h1>Selecione o filme</h1>

            <StyledCatalogo>
                {filmes.map((filme) => <Poster key={filme.id} id={filme.id} posterURL={filme.posterURL}></Poster>)}   
            </StyledCatalogo>
            
        </StyledHome>
    )
}

const StyledHome = styled.div`
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`
const StyledCatalogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 300px;
`