import "./style.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="tudo">
            <main>
                <div className="vemprofrei">
                    <h1>VEMPROFREI</h1>
                </div>

                <section>
                    <div className="box1">
                        <div className="backgroundlogo">
                            <img src="src/assets/images/WhatsApp_Image_2025-07-29_at_16-removebg-preview 2.png" />
                        </div>
                    </div>

                    <div className="textos">
                        <h3>INICIO</h3>
                        <h3>SOBRE</h3>
                        <h3>CONTATOS</h3>
                    </div>

                    <div className="box2">
                        <img src="src/assets/images/Group6.png" />
                    </div>

                </section>





                <section className="pagina">

                    <div className="botoes">
                        <button>
                            <Link to={"/cadastro"}>Cadastro</Link>
                        </button>

                        <button>
                            <Link to={"/login"}>É O LOGAS</Link>
                        </button>
                    </div>


                    <section className="cartoescursos">
                        <div className="cartao">
                            <img src="" />
                        </div>

                        <div className="cartao">
                            <img src="" alt="" />
                        </div>
                        
                        <div className="cartao">
                            <img src="" alt="" />
                        </div>                   
                        
                        <div className="cartao">
                            <img src="" alt="" />
                        </div>                      
                        
                        <div className="cartao">
                            <img src="" alt="" />
                        </div>

                    </section>
                </section>

                <footer>
                    <div className="cartaofooter">

                    </div>

                    <section className="sites">
                        <h3>VEJA NOSSAS OUTRAS PLATAFORMAS</h3>

                        <button>INSTAGRAM</button>
                        <button>SITE</button>
                        <button>APLICATIVO</button>
                    </section>
                </footer>

            </main>
        </div>
    );
}
