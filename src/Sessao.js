import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "./Footer"
import Horarios from "./Horarios"

export default function Sessao() {
    const { idFilme } = useParams()
    const [sessoes, setSessoes] = useState([])
    const [dados, setDados] = useState({})

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        const promise = axios.get(URL)

        promise.then(resposta => {
            console.log(resposta.data)
            setSessoes(resposta.data.days)
            setDados(resposta.data)
        })

        promise.catch(err => {
            console.log(err)
        })
    }, [idFilme])

    return (
        <>
            <StyledSessao>
                <Titulo>Selecione o horário</Titulo>
                {sessoes.map((sessao) => <Horarios key={sessao.id}
                    dia={sessao.weekday}
                    data={sessao.date}
                    horarios={sessao.showtimes}></Horarios>)}
            </StyledSessao>
            <Footer poster={dados.posterURL} titulo={dados.title}></Footer>
        </>
    )
}

const StyledSessao = styled.div`
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.div`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    margin-top: 50px;
    margin-bottom: 20px;
`