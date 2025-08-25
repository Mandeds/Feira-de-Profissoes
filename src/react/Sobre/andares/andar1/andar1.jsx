import "./andar1.scss"
import "../../../global.scss"
import { Link } from "react-router"

export default function andar1() {
    return (
        <div className="container-andar1">
            <header>
                <Link to={"/sobre"} className="Link">
                    <h1>Voltar</h1>
                </Link>

                 <div className="pageatual-andar1">
                    <h1>Andar 1</h1>
                </div>
               

            </header>

            <img src="src/assets/images/image-removebg-preview 2.png" alt="" />
                    <div className="textos">
                        <h1>SALAS</h1>
                        <h2>• Sala 18: ADMINISTRAÇÃO - Empreendedorismo e Logística</h2>
                        <h2>• Sala 19: CREAS</h2>
                        <h2>• Sala 20: ADMINISTRAÇÃo - Recursos humanos, Contabilidade e Documentos Técnicos</h2>
                    </div>

            

        </div>
    )
}