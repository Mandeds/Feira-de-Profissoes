import "./style.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Home() {
    return (
        <div className="container_home">

            <header>
                <img src="/src/assets/images/vemprofrei.png" alt="Vem pro Frei" />
                    <nav className="navegar">
                        <Link className="link">Contatos</Link>
                        <Link className="link1">Sobre</Link>
                    </nav>
                <img src="/src/assets/images/lupa (1).png" alt="" /> 
            </header>


            <main className="container_main">

                <section className="container_principal">
                    <img className="feira" src="/src/assets/images/Group6.png" alt="" />
        <br />
                    <div className="botoes">
                        <button>
                            <strong>CADASTRO</strong>
                        </button>
                        
                        <button>
                            <strong>LOGIN</strong>
                        </button>
                    </div>
            
                    <h1 className="horario" >20:00:00:00</h1>

                    <div className="carrossel">
                        <img src="" />
                        <img src="" />
                        <img src="" />
                        <img src="" />
                    </div>

                    <div className="informacoes">
                        <h3>VEJA NOSSAS OUTRAS PLATAFORMAS</h3>
                        {/* AO SELECIONAR OS ANDARES A IMAGEM AO LADO TRCA DE ACORDO COM A OPÇÂO*/}
                        <Link className="andares" >ANDARES</Link>
                    </div>
                </section> 


                 {/* separação de conteúdos */}

                <section className="container_secundaria">
                    <div className="card_instituto">
                        <div className="card_interno">
                            <h1>INSTITUTO</h1>
                        </div>
                    </div>

                    <div className="cards_andares">
                        <h2>Esforço que transforma <br /> 
                    e orgulho permanece</h2>
                        <img src="/src/assets/images/freibg.png" />
                        <h3>PRIMEIRO ANDAR</h3>
                        <Link to="">Curso</Link>
                        <Link to="">Informação</Link>
                    </div>
                </section>

            </main>
        </div>
    );
}
