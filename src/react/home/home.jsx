import "./style.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="tudo">
            <main>
                <header className="header_inicio">
                    <div className="vemprofrei">
                        <h1 className="texto-letras">
                            <span>V</span>
                            <span>E</span>
                            <span>M</span>
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>F</span>
                            <span>R</span>
                            <span>E</span>
                            <span>I</span>
                        </h1>
                    </div>

                    <div id="quadrado_inicio">

                        <div className="links">
                            <strong><a href="#">INICIO</a></strong>
                            <strong><Link to={'/Sobre'}>SOBRE</Link></strong>
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
                        {/* O caminho não é do arquivo é das rotas que foram previamente configuradas no arquivo routes.jsx */}
                        <Link to={"/cadastro"}>Cadastro</Link>
                        <Link to={"/login"}>Login</Link>
                    </div>
                </header>
                <section className="pagina"></section>
                <div className='carrossel'>

                    <div className='carrossel__item'>
                        <img src="./src/assets/images/Rectangle 64.png" alt="Imagem 3" />
                    </div>

                </div>
            </main>
            <div className="final">
                <p>a</p>
            </div>
        </div>
    );
}
