import "./style.scss";
import "../global.scss";
import { Link } from "react-router-dom"; // corrigido
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';

export default function Home() {
    const targetDate = new Date('2025-09-29T23:59:59');

    function getTimeRemaining() {
        const now = new Date();
        const total = targetDate - now;

        if (total <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { days, hours, minutes, seconds };
    }

    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const [titulo, setTitulo] = useState("ANDARES");
    const [src, setSrc] = useState("/src/assets/images/freibg.png");

    function voltarTitulo() {
        setTitulo("ANDARES");
        setSrc("/src/assets/images/freibg.png");
    }

    function mudarTituloPatio() {
        setTitulo("Pátio");
        setSrc("/src/assets/images/patio.png"); // coloque uma imagem válida
    }

    function mudarTituloPrimeiro() {
        setTitulo("1° Andar");
        setSrc("/src/assets/images/andar1.png");
    }

    function mudarTituloDois() {
        setTitulo("2° Andar");
        setSrc("/src/assets/images/andar2.png");
    }

    function mudarTituloTres() {
        setTitulo("3° Andar");
        setSrc("/src/assets/images/andar3.png");
    }

    const imagens = [
        { id: 1, src: '/src/assets/images/casadamulher.png', alt: 'Foto 1' },
        { id: 2, src: '/src/assets/images/conexaobemmaior.png', alt: 'Foto 2' },
        { id: 3, src: '/src/assets/images/stb.png', alt: 'Foto 3' },
        { id: 4, src: '/src/assets/images/carol.png', alt: 'Foto 4' },
    ];

    return (
        <div className="container_home">
            <header>
                <img src="/src/assets/images/vemprofrei.png" alt="Vem pro Frei" />
                <nav className="navegar">
                    <Link className="link" to="/contatos">Contatos</Link>
                    <Link className="link1" to="/sobre">Sobre</Link>
                </nav>
                <img src="/src/assets/images/lupa (1).png" alt="Buscar" />
            </header>

            <main className="container_main">
                <section className="container_principal">
                    <img className="feira" src="/src/assets/images/Group6.png" alt="Feira" />
                    <div className="botoes">
                        <Link to="/cadastro" className="botao">CADASTRO</Link>
                        <Link to="/login" className="botao">LOGIN</Link>
                    </div>

                    <h1 className="horario">
                        {timeLeft.days} Dias {timeLeft.hours} Horas {timeLeft.minutes} Min {timeLeft.seconds}s
                    </h1>

                    <div style={{ width: '100%', maxWidth: 900, margin: '0 auto' }}>
                        <Swiper
                            modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            effect="fade"
                            loop
                            speed={600}
                            spaceBetween={16}
                            slidesPerView={1}
                            style={{ borderRadius: 16, overflow: 'hidden', height: "300px" }} // altura corrigida
                        >
                            {imagens.map((img) => (
                                <SwiperSlide key={img.id}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        loading="lazy"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="informacoes">
                        <h2>ESTAMOS NA CONTAGEM REGRESSIVA</h2>
                        <h2>PARA NOSSA FEIRA!</h2>
                        <Link className="andares" onClick={voltarTitulo}>ANDARES</Link>
                        <ul>
                            <li onClick={mudarTituloPatio}>Pátio</li>
                            <li onClick={mudarTituloPrimeiro}>1° Andar</li>
                            <li onClick={mudarTituloDois}>2° Andar</li>
                            <li onClick={mudarTituloTres}>3° Andar</li>
                        </ul>
                    </div>
                </section>

                <section className="container_secundaria">
                    <div className="card_instituto">
                        <div className="card_interno"><h1>INSTITUTO</h1></div>
                    </div>

                    <div className="redesSociais">
                        <a href="https://www.facebook.com/institutonsfatima/?locale=pt_BR"><img src="/src/assets/images/facebook (1).png" alt="Facebook" /></a>
                        <a href="https://www.instagram.com/institutonsfatima/"><img src="/src/assets/images/instagram (1).png" alt="Instagram" /></a>
                        <a href="https://www.tiktok.com/@institutonsfatima_"><img src="/src/assets/images/tik-tok.png" alt="TikTok" /></a>
                        <a href="https://www.linkedin.com/company/institutonsfatima"><img src="/src/assets/images/linkedin (1).png" alt="LinkedIn" /></a>
                        <a href="https://www.youtube.com/@institutosocialnossasenhor3548/videos"><img src="/src/assets/images/youtube.png" alt="YouTube" /></a>
                    </div>

                    <div className="cards_andares">
                        <h2>Esforço que transforma <br /> e orgulho permanece</h2>
                        <img src={src} alt={titulo} />
                        <h3>{titulo}</h3>
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
