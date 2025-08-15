import "./style.scss";
import "../global.scss"
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

                <div id='quadrado_inicio'>
                    
                    <div id='quadrado_pequeno'>
                        <div id='quadrado_borda' >
                            <img id='imagens_inicio' src="src/assets/images/WhatsApp_Image_2025-07-29_at_16-removebg-preview 2.png" alt="100px" />
                        </div>
                    </div>

                    <div id="maior">
                    <img src="src/assets/images/Group6.png"/>
                    </div>
                    
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