import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./home/home";
import Cadastro from "./register/cadastro";
import Login from "./Login/Login";
import Administrador from "./Administrador/Administrador";
import Sobre from "./Sobre/sobre"
import Patio from "./Sobre/andares/patio/patio"
import Andar1 from "./Sobre/andares/andar1/andar1"
import Andar2 from "./Sobre/andares/andar2/andar2"
import Andar3 from "./Sobre/andares/andar3/andar3"

export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Administrador />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/andar1" element={<Andar1 /> } />
        <Route path="/andar2" element={<Andar2 /> } />
        <Route path="/andar3" element={<Andar3 /> } />
        <Route path="/patio" element={<Patio /> } />
      </Routes>
    </BrowserRouter>
  );
}
