import "./style.scss";
import "./global.scss"
import { Link } from 'react-router';


export default function home() {
    return (<div>

        <main>
            <header>

                <div className="alinhador">


                    
                </div>

                <div className="texto">
                    <h1>#VEMPROFREi</h1>
                </div>

                <div className="links">
                    <strong>
                        <a href="#">INICIO</a>
                        <a href="#">SOBRE</a>
                        <a href="#">CONTATO</a>
                    </strong>
                </div>

                <button>
                    <Link to={'/cadastro'}>Cadastro  </Link >
                </button>

            </header>
            <section className="pagina">

            </section>
        </main>
    </div>
    )
}