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
                    <img src="/src/assets/images/Group6.png" alt="" />

                    <button>CADASTRO</button>
                    <button>LOGIN</button>

                    <h1></h1>

                    <div className="carrossel"></div>

                    <h3></h3>

                    {/* AO SELECIONAR OS ANDARES A IMAGEM AO LADO TRCA DE ACORDO COM A OPÇÂO SELECIONADA*/}
                    <Link>ANDARES</Link>
                    
                </section>


                 {/* separação de conteúdos */}

                <section className="container_secundaria">
                    
                </section>

            </main>
        </div>
    );
}
