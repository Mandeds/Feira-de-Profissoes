import "./style.scss";
import "./global.scss"


export default function home(){
    return(<div>
        
            <main>
            <header>
                <img class="logo" src="" />
                <strong>
                    <a href="#">INICIO</a>
                    <a href="#">SOBRE</a>
                    <a href="#">CONTATO</a>
                </strong>
                <button>Cadastro</button>
            </header>
            <section class="pagina">
                <img class="freifotinha" src="./src/assets/images/freifotinha.webp" />
                <div class="texto">
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