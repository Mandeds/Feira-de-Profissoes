import { BrowserRouter, Routes, Route } from "react-router"
import Index from "./home.jsx"
import Cadastro from "./pages/Cadastro.jsx"


export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

