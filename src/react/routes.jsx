import { BrowserRouter, Routes, Route } from "react-router"
import Index from "./home/home"
import Cadastro from "./register/cadastro"
import Login from "./Login/Login"
import Administrador from "./Administrador/Administrador"





export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Administrador />} />
      </Routes>
    </BrowserRouter>
  )
}

