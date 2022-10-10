import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Assentos() {
    const { idSessao } = useParams()
    const [assentos, setAssentos] = useState([])
    const [info, setInfo] = useState([])
    const [select, setSelect] = useState([])
    const [nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        const promise = axios.get(URL)

        promise.then(resposta => {
            console.log(resposta.data.seats)
            setAssentos(resposta.data.seats)
            setInfo(resposta.data)
        })
    }, [idSessao])

    function seleciona(cad) {
        if (cad.isAvailable === false) {
            alert('Esse assento não está disponível')
        } else if (select.includes(cad.id)) {
            const novo = select.filter((elem) => elem !== cad.id)
            setSelect(novo)
        } else {
            setSelect([...select, cad.id])
        }
    }

    return (
        <StyledAssentos>
            <Titulo>Selecione o(s) assento(s)</Titulo>
            <StyledLugares>
                {assentos.map((ass) => <Cadeira onClick={() => seleciona(ass)}
                    disp={select.includes(ass.id) ? '#1AAE9E' : (ass.isAvailable ? '#C3CFD9' : '#FBE192')}
                    key={ass.id}>{ass.name}</Cadeira>)}
            </StyledLugares>

            <Exemplo>
                <Conjunto>
                    <Cadeira disp={'#1AAE9E'}></Cadeira>
                    <span>Selecionado</span>
                </Conjunto>
                <Conjunto>
                    <Cadeira disp={'#C3CFD9'}></Cadeira>
                    <span>Disponivel</span>
                </Conjunto>
                <Conjunto>
                    <Cadeira disp={'#FBE192'}></Cadeira>
                    <span>Indisponível</span>
                </Conjunto>
            </Exemplo>

            <Formulario>
                <label htmlFor='campoNome'>Nome do comprador:</label>
                <input type='text' value={nome} id='campoNome' onChange={e => setNome(e.target.value)} placeholder="Insira o nome..."></input>

                <label htmlFor="campoCPF">CPF do comprador</label>
                <input type='text' value={CPF} id='campoCPF' onChange={e => setCPF(e.target.value)} placeholder="Insira os numeros do CPF..."></input>
            </Formulario>

        </StyledAssentos>
    )
}

const StyledAssentos = styled.div`
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

const StyledLugares = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const Cadeira = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.disp};
    border: 1px solid #808F9D;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    margin: 5px 4px;
    font-size: 11px;
    font-family: Roboto;
`
const Exemplo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

const Conjunto = styled.div`
    span {
        font-size: 13px;
        font-family: Roboto;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
`

const Formulario = styled.div`
    font-family: Roboto;
    font-size: 18px;
    margin-top: 30px;
    margin-left: 15px;
    input {
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 15px;
        font-family: Roboto;
        font-size: 16px;
        color: #AFAFAF;
        padding-left: 5px;
    }
`