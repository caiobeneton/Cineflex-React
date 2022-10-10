import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Home from "./Home";
import Sessao from "./Sessao";
import Assentos from "./Assentos";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/sessoes/:idFilme" element={<Sessao></Sessao>}></Route>
                <Route path="/assentos/:idSessao" element={<Assentos></Assentos>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

