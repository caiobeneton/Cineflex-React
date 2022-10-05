import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./Topo";
import Home from "./Home";

export default function App(){
    return(
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}

