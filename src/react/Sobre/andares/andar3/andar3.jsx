import "../../../global.scss"
import "./andar3.scss"
import { Link } from "react-router"

export default function andar3() {
    return (
        <div className="container-andar3">
            <header>
                <Link to={"/sobre"} className="Link">
                    <h1>Voltar</h1>
                </Link>
                
                <div className="pageatual-andar3">
                    <h1>Andar 3</h1>
                </div>
        
            </header>

              <div className="pageatual-andar3">
                    
                   
                    <div className="informacoes-andar3">
                        <img src="src/assets/images/image-removebg-preview 2.png" alt="" />
                        <div className="texto">
                        <h1>SALAS</h1>
                        <h2>• Sala ?: Auditório</h2>
                        <h2>• Sala ?: Simulação de Entrevista de Emprego</h2>
                        <h2>• Sala ?: Oficina de Linkedin</h2>
                        </div>
                    </div>

                </div>
        </div>
    )
}