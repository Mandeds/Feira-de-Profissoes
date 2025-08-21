import "./style.scss";
import "../global.scss";
import { Link } from "react-router";
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';


export default function Home() {

    const imagens = [
        { id: 1, src: '/src/assets/images/casadamulher.png', alt: 'Foto 1' },
        { id: 2, src: '/src/assets/images/conexaobemmaior.png', alt: 'Foto 2' },
        { id: 3, src: '/src/assets/images/stb.png', alt: 'Foto 3' },
        { id: 4, src: '/src/assets/images/carol.png', alt: 'Foto 4' },
      ];

    const targetDate = new Date('2025-09-29T23:59:59'); // Coloque DENTRO do componente
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
  
      return {
        days,
        hours,
        minutes,
        seconds
      };
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining());
      }, 1000);
  
      return () => clearInterval(interval); // Cleanup do intervalo
    }, []);
  

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
                    <img className="feira" src="/src/assets/images/Group6.png" alt="" />
        <br />
                    <div className="botoes">
                        <button>
                            <strong>CADASTRO</strong>
                        </button>
                        
                        <button>
                            <strong>LOGIN</strong>
                        </button>
                    </div>
            
      <h1 className="horario"> 
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
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
                style={{ borderRadius: 16, overflow: 'hidden' }}
            >
                {imagens.map((img) => (
                <SwiperSlide
                    key={img.id}
                    style={{
                    width: "100%",        // ocupa toda a largura do container
                    height: 100,          // altura fixa para todas as imagens
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000" // fundo para quando a imagem não cobre 100%
                    }}
                >
                    <img
                    src={img.src}
                    alt={img.alt}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // preenche todo o slide mantendo proporção
                        display: "block"
                    }}
                    loading="lazy"
                    />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>

                    <div className="informacoes">
                        <h2>ESTAMOS NA CONTAGEM REGRESSIVA</h2>
                        <h2>PARA NOSSA FEIRA!</h2>
                        {/* AO SELECIONAR OS ANDARES A IMAGEM AO LADO TRCA DE ACORDO COM A OPÇÂO*/}
                        <Link className="andares" >ANDARES</Link>
                    </div>
                </section> 


                 {/* separação de conteúdos */}

                <section className="container_secundaria">
                    <div className="card_instituto">
                        <div className="card_interno">
                            <h1>INSTITUTO</h1>
                        </div>
                    </div>

                    <div className="cards_andares">
                        <h2>Esforço que transforma <br /> 
                    e orgulho permanece</h2>

                    <div className="imagens">
                        <img src="/src/assets/images/freibg.png" />

                            <div className="redesSociais">
                                <a href="https://www.facebook.com/institutonsfatima/?locale=pt_BR"><img src="/src/assets/images/facebook (1).png" alt="" /></a>
                                <a href="https://www.instagram.com/institutonsfatima/"><img src="/src/assets/images/instagram (1).png" alt="" /></a>
                                <a href="https://www.tiktok.com/@institutonsfatima_?is_from_webapp=1&sender_device=pc"><img src="/src/assets/images/tik-tok.png" alt="" /></a>
                                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHo6NBiSWxmwgAAAZjMiYuY8UAuenq4Wu_PrYbf3TkLMyt9WUKsyz8mc7hK25at1IsWASK8zNXHXdQsGL-8MGEWfk5XzxfQYkpwKKH5uUF7I2XpsWpDaZJl4uPJPHqRFxa6kEM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finstitutonsfatima"><img src="/src/assets/images/linkedin (1).png" alt="" /></a>
                                <a href="https://www.youtube.com/@institutosocialnossasenhor3548/videos"><img src="/src/assets/images/youtube.png" alt="" /></a>
                            </div>
                        </div>

                        <h3>PRIMEIRO ANDAR</h3>

                        <div className="links">
                            <Link className="Link2" to="">Curso</Link>
                            <Link className="Link3" to="">Informação</Link>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

