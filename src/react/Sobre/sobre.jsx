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
                <div className="pageatual-sobre">
                    <h1>Sobre</h1>
                </div>
                <img src="src/assets/images/user2.png" alt="Usuário" />
            </header>

            <section className="page">
                <h1 className="texto1">Esforço que transforma, e o orgulho permanece</h1>

                <h1>Estandes de empresas convidadas </h1>
                <ul>
                    <strong>
                        <li>Casa da Mulher Paulistana</li>
                        <li>Conexão Bem Maior</li>
                        <li>Óticas Carol</li>
                        <li>STB</li>
                    </strong>
                </ul>
                <h1 className="stand2">Demais estandes </h1>
                <ul>
                    <strong>
                        <li>CEDESP AVE MARIA</li>
                        <li>Metalmecãnica - Ajustador e Torneiro Mecãnico</li>
                        <li>Tecnologia de Redes e Manuntenção de Computadores</li>
                        <li>Troca de Livros</li>
                        <li>Oficina de Eletromecânica de Autos</li>
                        <li>Oficina de Auto Elétrica</li>
                        <li>Oficina de Eletrotécnica</li>
                        <li>Livros do Frei</li>
                        <li>Produtos da Padarioa do Frei - doces e salgados</li>
                        <li>Pastel e bebidas (Logo embaixo da escada)</li>
                    </strong>
                </ul>


            </section>

            <section className="patio">
                <h1>Patio</h1>

                <div className="cursomae">
                    <div className="bloco"></div>

                    <div className="botoes">
                  
                        <div className="informacaocurso">
                            <Link to={'/patio'} className="h3"> INFORMAÇÃO </Link>
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
                       
                        <div className="informacaocurso">
                            <Link to={'/andar1'} className="h3">INFORMAÇÃO</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="andar2">
                <h1>SEGUNDO</h1>
                <h1 className="teste">ANDAR</h1>

                <div className="cursomae">
                    <div className="bloco"></div>

                    <div className="botoes">
                   
                        <div className="informacaocurso">
                            <Link to={'/andar2'} className="h3"> INFORMAÇÃO </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="andar3">
                <h1>TERCEIRO</h1>
                <h1 className="teste">ANDAR</h1>


                <div className="cursomae">
                    <div className="bloco"></div>

                    <div className="botoes">
                  
                        <div className="informacaocurso">
                            <Link to={'/andar3'} className="h3"> INFORMAÇÃO </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
