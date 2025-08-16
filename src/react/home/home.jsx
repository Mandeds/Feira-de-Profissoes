import "./style.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="tudo">
            <main>
                <header className="header_inicio">
                    <div id="quadrado_inicio">
                        <div className="vemprofrei">
                            <h1>#VEMPROFREI</h1>
                        </div>

                        <div className="links">
                            <strong><a href="#">INICIO</a></strong>
                            <strong><a href="#">SOBRE</a></strong>
                            <strong><a href="#">CONTATO</a></strong>
                        </div>

                        <div id="quadrado_pequeno">
                            <div id="quadrado_borda">
                                <img
                                    id="imagens_inicio"
                                    src="src/assets/images/WhatsApp_Image_2025-07-29_at_16-removebg-preview 2.png"
                                    alt="Ícone"
                                />
                            </div>
                        </div>

                        <div id="maior">
                            <img
                                id="Logo_inicio"
                                src="src/assets/images/Group6.png"
                                width="450px"
                                alt="Logo"
                            />
                        </div>
                    </div>

                    <div className="botao">
                        <Link to={"/cadastro"}>Cadastro</Link>
                        <Link to={"/login"}>É O LOGAS</Link>
                    </div>
                </header>

                <section className="pagina"></section>
            </main>
        </div>
    );
}
