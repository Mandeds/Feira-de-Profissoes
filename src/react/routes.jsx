import { BrowserRouter, Routes, Route } from "react-router"
import Index from "./home"
import Cadastro from "./cadastro"




export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  )
}

