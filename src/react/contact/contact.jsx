import "./contact.scss"
import "../global.scss"
import { Link } from "react-router-dom"


export default function ContactPage() {
    return (
        <>
            <div className="container-contact">
                <header>
                    <Link className="Link" to="/">
                        <h1>Voltar</h1>
                    </Link>
                    <div className="pageatual-contact">
                        <h1>Contatos</h1>
                    </div>
                    <img src="src/assets/images/user2.png" alt="Usuário" />
                </header>

                <div className="page-contact">
                    <div className="text">
                    <h3>EMAIL: secretaria@acaonsfatima.org</h3>
                    <h3>WHATSAPP: (11) 96398-6252</h3>
                    <h3>TELEFONE: (11) 5687-8876</h3>
                    <h3><a href="https://www.instagram.com/institutonsfatima" target="_blank">Instragram</a></h3>
                    <h3><a href="https://www.facebook.com/institutonsfatima" target="_blank">Facebook</a></h3>
                    </div>
                </div>
            </div>

        </>
    )
}