import { BrowserRouter, Routes, Route } from "react-router"
import Index from "./home"



export default function Navegar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

