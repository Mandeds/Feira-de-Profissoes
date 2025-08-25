import "./patio.scss"
import "../../../global.scss"
import { Link } from "react-router"

export default function patio() {
    return (
        <>
            <div className="container-patio">
                <header>
                    <Link to={"/sobre"} className="Link">
                        <h1>Voltar</h1>
                    </Link>

                    <div className="pageatual-patio">
                        <h1>Pátio</h1>
                    </div>
                </header>



                <div className="informacoes-patio">
                    
                    <img src="src/assets/images/image-removebg-preview 2.png" alt="" />
                    <div className="textos">
                    <h1>SALAS</h1>
                    <h2>• Sala 4: Óticas Carol</h2>
                    <h2>• Sala 5: Caixa</h2>
                    <h2>• Sala 6: Inglês</h2>
                    </div>
                </div>

            </div>
        </>
    )
}