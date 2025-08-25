import "../../../global.scss"
import { Link } from "react-router"

export default function andar3() {
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

              <div className="pageatual-andar3">
                    <h1>Andar 3</h1>
                    
                    <img src="src/assets/images/image-removebg-preview 2.png" alt="" />
                    <div className="textos">
                        <h1>SALAS</h1>
                        <h2>• Sala ?: Auditório</h2>
                        <h2>• Sala ?: Simulação de Entrevista de Emprego</h2>
                        <h2>• Sala ?: Oficina de Linkedin</h2>
                    </div>

                </div>
        </div>
    )
}