import "./sobre.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Sobre() {

    return (
        <div className="container_sobre">
            <header>
                <Link className="Link" to="/">
                    <h1>Voltar</h1>
                </Link>
                <div className="pageatual">
                    <h1>Sobre</h1>
                </div>
                <img src="src/assets/images/user2.png" alt="Usuário" />
            </header>

            <section className="page">
                <h2 className="texto1">Esforço que transforma, e o orgulho permanece</h2>

               

            </section>

            <section className="patio">
                    <h1>Patio</h1>
                    
                    

                    <div className="cursomae">
                        <div className="bloco"></div>

                    <div className="botoes">
                        <div className="curso">
                            <h3>CURSO</h3>
                        </div>
                        <div className="informacaocurso">
                            <h3><Link to={'/patio'}> INFORMAÇÃO </Link></h3>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="andar1">
                    <h1>PRIMEIRO</h1>
                    <h1 className="teste">ANDAR</h1>
                    

                    <div className="cursomae">
                        <div className="bloco"></div>

                    <div className="botoes">
                        <div className="curso">
                            <h3>CURSO</h3>
                        </div>
                        <div className="informacaocurso">
                            <h3><Link to={'/andar1'}> INFORMAÇÃO </Link></h3>
                        </div>
                    </div>
                    </div>
                </section>

        </div>
    );
}
