import "./style.scss";
import "./global.scss"
import { Link } from 'react-router';


export default function home() {
    return (
        <div className="tudo">

            <main>
                <div className="vemprofrei">
                    <h1>#VEMPROFREI</h1>
                </div>

                <div className="links">
                    <strong><a href="#">INICIO</a></strong>
                    <strong><a href="#">SOBRE</a></strong>
                    <strong><a href="#">CONTATO</a></strong>
                </div>

                <button>
                    <Link to={'/cadastro'}>Cadastro</Link >
                </button>


                <section className="pagina">

                </section>
            </main>
        </div>
    )
}