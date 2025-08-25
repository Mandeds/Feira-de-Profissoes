import "../../../global.scss"
import { Link } from "react-router"

export default function andar2() {
    return (
        <div className="container">
            <header>
                <Link to={"/sobre"}>
                    <h1>Voltar</h1>
                </Link>
                
                <div className="pageatual">
                    <h1>Andar 1</h1>
                </div>
                <img src="src/assets/images/user2.png" alt="Usuário" />
            </header>

            <div className="pageatual-andar2">
                    <h1>Andar 2</h1>
                    
                    <img src="src/assets/images/image-removebg-preview 2.png" alt="" />
                    <div className="textos">
                        <h1>SALAS</h1>
                        <h2>• Sala 24: Comunicação Visual - Corel Draw, Photoshop e Caricaturas</h2>
                        <h2>• Sala 25: Informática - Montagem, Configuração e Redes</h2>
                        <h2>• Sala 26: Informática - Programação</h2>
                        <h2>• Sala 27: Elaboração de Currículo</h2>
                    </div>

                </div>
        </div>
    )
}