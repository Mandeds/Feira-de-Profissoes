import { BrowserRouter, Routes, Route } from "react-router"
import Index from "./home"
import Cadastro from "./cadastro"
import Login from "./Login"




export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

