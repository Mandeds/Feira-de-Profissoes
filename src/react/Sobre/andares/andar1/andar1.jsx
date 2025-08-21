import "./andar1.scss"
import "../../../global.scss"
import { Link } from "react-router"

export default function andar1() {
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
        </div>
    )
}