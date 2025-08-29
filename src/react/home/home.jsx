import "./style.scss";
import "../global.scss";
import { Link } from "react-router";
import React, { useEffect, useState } from 'react';
import Patio from '../../assets/images/andares/posterPatio.png';
import priAndar from '../../assets/images/andares/1.png';
import segAndar from '../../assets/images/andares/2.png';
import tercAndar from '../../assets/images/andares/3.png';
import apresen from '../../assets/images/andares/apresentacao.png';

export default function Home() {
    const [showHidden, setShowHidden] = useState(false);
    const [titulo, setTitulo] = useState("ANDARES");
    const [patio, setPatio] = useState("Pátio");
    const [umAndar, setumandar] = useState("1° Andar");
    const [doisAndar, setdoisndar] = useState("2° Andar");
    const [tresAndar, settresndar] = useState("3° Andar");
    let [endereco, setEndereco] = useState(apresen);

    const targetDate = new Date('2025-09-29T23:59:59');
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const now = new Date();
        const total = targetDate - now;

        if (total <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function toggleImagem() {
    setShowHidden(!showHidden);
}

    function voltarTitulo() {
        setTitulo("ANDARES");
        setEndereco(apresen);
    }

    function mudarTituloPatio() {
        setTitulo("Poster:");
        setEndereco(Patio);
        setShowHidden(true);
    }

    function mudarTituloPrimeiro() {
        setTitulo(umAndar);
        setEndereco(priAndar);
        setShowHidden(true);
    }

    function mudarTituloDois() {
        setTitulo(doisAndar);
        setEndereco(segAndar);
        setShowHidden(true);
    }

    function mudarTituloTres() {
        setTitulo(tresAndar);
        setEndereco(tercAndar);
        setShowHidden(true);
    }

    return (
        <div className="container_home">
            {/* Overlay preto */}
            {showHidden && <div className="overlay visible" onClick={toggleHidden}></div>}

            <header>
                <img src="/src/assets/images/vemprofrei.png" alt="Vem pro Frei" />
                <nav className="navegar">
                    <Link className="link">Contatos</Link>
                    <Link className="link1" to={'/sobre'}>Sobre</Link>
                </nav>
                <img src="/src/assets/images/lupa (1).png" alt="" />
            </header>

            <main className="container_main">
                <section className="container_principal">
                    <img className="feira" src="/src/assets/images/Group6.png" alt="" />
                    <br />
                    <div className="botoes">
                        <button><Link to={'/cadastro'}>CADASTRO</Link></button>
                        <button><Link to={'/login'}>LOGIN</Link></button>
                    </div>

                    <h1 className="horario">
                        <h3>ESTAMOS NA CONTAGEM REGRESSIVA</h3>
                        <h3 className="paranossafeira">PARA NOSSA FEIRA!</h3>
                        <div className="regressiva">
                            {timeLeft.days} Dias e {timeLeft.hours} Horas <br /> Para começar!
                        </div>
                    </h1>

                    <div className="informacoes">
                        <Link className="andares" onClick={voltarTitulo}>ANDARES</Link>
                        <div className="escolhas">
                            <nav>
                                <ul>
                                    <li onClick={mudarTituloPatio}>{patio}</li>
                                    <li onClick={mudarTituloPrimeiro}>{umAndar}</li>
                                    <li onClick={mudarTituloDois}>{doisAndar}</li>
                                    <li onClick={mudarTituloTres}>{tresAndar}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>

                <section className="container_secundaria">
                    <div className="card_instituto">
                        <div className="card_interno"><h1>INSTITUTO</h1></div>
                    </div>

                    <div className="imagens">
                        <div className="redesSociais">
                            <a href="https://www.facebook.com/institutonsfatima/?locale=pt_BR"><img src="/src/assets/images/facebook (1).png" alt="" /></a>
                            <a href="https://www.instagram.com/institutonsfatima/"><img src="/src/assets/images/instagram (1).png" alt="" /></a>
                            <a href="https://www.tiktok.com/@institutonsfatima_?is_from_webapp=1&sender_device=pc"><img src="/src/assets/images/tik-tok.png" alt="" /></a>
                            <a href="https://www.linkedin.com/authwall?trk=bf"><img src="/src/assets/images/linkedin (1).png" alt="" /></a>
                            <a href="https://www.youtube.com/@institutosocialnossasenhor3548/videos"><img src="/src/assets/images/youtube.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="cards_andares">
                        <h2>Esforço que transforma <br /> e orgulho permanece</h2>
                        <div className="andares_fotos">
                            <h3>{titulo}</h3>
                            <img src={endereco} />
                            <img 
                              src={endereco} 
                              className={`andares_hidden ${showHidden ? "visible" : ""}`} 
                              onClick={(e) => e.stopPropagation()} 
                            />
                        </div>

                        <div className="links">
                            <Link className="Link2" to="">Curso</Link>
                            <Link className="Link3" to="/sobre">Informação</Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
