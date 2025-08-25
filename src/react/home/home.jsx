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