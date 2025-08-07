import "./style.scss";
import "./global.scss"
import { Link } from 'react-router';


export default function home() {
    return (<div>

        <main>
            <header>
                <img className="logo" src="" />
                <strong>
                    <a href="#">INICIO</a>
                    <a href="#">SOBRE</a>
                    <a href="#">CONTATO</a>
                </strong>
                <button>
                    <Link to={'/cadastro'}>Cadastro  </Link >
                </button>

            </header>
            <section className="pagina">
                <img className="freifotinha" src="./src/assets/images/freifotinha.webp" />
                <div className="texto">
                    <h1>
                        <strong>#</strong>
                        <strong>V</strong>
                        <strong>E</strong>
                        <strong>M</strong>
                        <strong>P</strong>
                        <strong>R</strong>
                        <strong>O</strong>
                        <strong>F</strong>
                        <strong>R</strong>
                        <strong>E</strong>
                        <strong>I</strong>
                    </h1>
                </div>
            </section>
        </main>
    </div>
    )
}