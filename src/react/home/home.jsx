import "./style.scss";
import "../global.scss";
import { Link } from "react-router";
import React, { useEffect, useState, useRef } from 'react';
import Patio from '../../assets/images/andares/posterPatio.png'
import priAndar from '../../assets/images/andares/1.png'
import segAndar from '../../assets/images/andares/2.png'
import tercAndar from '../../assets/images/andares/3.png'
import apresen from '../../assets/images/andares/apresentacao.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import { SassColor } from "sass";

export default function Home() {

    const sobreRef = useRef(null);
    const sobreContatos = useRef(null);

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
            };
        }

        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            days,
            hours,
            minutes,
        };
    }

    useEffect(() => {
        // Atualiza imediatamente ao montar o componente
        setTimeLeft(getTimeRemaining());

        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 60000); // Atualiza a cada 60.000ms (1 minuto)

        return () => clearInterval(interval);
    }, []);


    const [titulo, setTitulo] = useState("ANDARES");
    const [patio, setPatio] = useState("Pátio");
    const [umAndar, setumandar] = useState("1° Andar");
    const [doisAndar, setdoisndar] = useState("2° Andar");
    const [tresAndar, settresndar] = useState("3° Andar");

    let [endereco, setEndereco] = useState(apresen)


    function voltarTitulo() {
        setTitulo("ANDARES")
        
        setEndereco(apresen)
    }

    function mudarTituloPatio() {
        let valor = "Poster:"
        setTitulo(valor)

        setEndereco(Patio)


    }
    function mudarTituloPrimeiro() {
        let valor = umAndar
        setTitulo(valor)

        setEndereco(priAndar)

    }
    function mudarTituloDois() {
        let valor = doisAndar
        setTitulo(valor)

        setEndereco(segAndar)

    }
    function mudarTituloTres() {
        let valor = tresAndar
        setTitulo(valor)

        setEndereco(tercAndar)

    }

    const imagens = [
        { id: 1, src: '/src/assets/images/casadamulher.png', alt: 'Foto 1' },
        { id: 2, src: '/src/assets/images/conexaobemmaior.png', alt: 'Foto 2' },
        { id: 3, src: '/src/assets/images/stb.png', alt: 'Foto 3' },
        { id: 4, src: '/src/assets/images/carol.png', alt: 'Foto 4' },
    ];


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


    function scrollToSobre() {
    sobreRef.current.scrollIntoView({ behavior: 'smooth' });
}

     function scrollToContatos() {
    sobreContatos.current.scrollIntoView({ behavior: 'smooth' });
}



    return (
        <div className="container_home">

            <header>
                <img src="/src/assets/images/vemprofrei.png" alt="Vem pro Frei" />
                <nav className="navegar">
                    <Link className="link" onClick={scrollToContatos}>Contatos</Link>
                    <Link className="link1" onClick={scrollToSobre}>Sobre</Link>

                </nav>
                <img src="/src/assets/images/lupa (1).png" alt="" />
            </header>


            <main className="container_main">

                <section className="container_principal">
                    <img className="feira" src="/src/assets/images/Group6.png" alt="" />
                    <br />
                    <div className="botoes">
                        <button>
                       <Link to={'/cadastro'} > CADASTRO </Link>
                        </button>

                        <button>
                           <Link  to={'/login'}> LOGIN </Link>
                        </button>
                    </div>

                    <h1 className="horario">
                    <h3>ESTAMOS NA CONTAGEM REGRESSIVA</h3>
                    <h3 className="paranossafeira">PARA NOSSA FEIRA!</h3>

                    <div className="regressiva">
                        {timeLeft.days} Dias e {timeLeft. hours} Horas <br /> Para começar!
                        </div>
                    </h1>  

                    <div className="informacoes">
                        
                        {/* AO SELECIONAR OS ANDARES A IMAGEM AO LADO TRCA DE ACORDO COM A OPÇÂO*/}
                        <Link className="andares" onClick={voltarTitulo} >ANDARES</Link>
                        <div className="escolhas">
                            <nav>
                                <ul >
                                    <li onClick={mudarTituloPatio} value={"Pátio"} >{patio}</li>
                                    <li onClick={mudarTituloPrimeiro}>{umAndar}</li>
                                    <li onClick={mudarTituloDois} >{doisAndar}</li>
                                    <li onClick={mudarTituloTres}>{tresAndar}</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </section>


                {/* separação de conteúdos */}

                <section className="container_secundaria">
                    <div className="card_instituto">
                        <div className="card_interno">
                            <h1>INSTITUTO</h1>
                        </div>
                    </div>
                    <div className="imagens">
                        <div className="redesSociais">
                            <a href="https://www.facebook.com/institutonsfatima/?locale=pt_BR" target="_blank"><img src="/src/assets/images/facebook (1).png" alt="" /></a>
                            <a href="https://www.instagram.com/institutonsfatima/" target="_blank"><img src="/src/assets/images/instagram (1).png" alt="" /></a>
                            <a href="https://www.tiktok.com/@institutonsfatima_?is_from_webapp=1&sender_device=pc" target="_blank"><img src="/src/assets/images/tik-tok.png" alt="" /></a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHo6NBiSWxmwgAAAZjMiYuY8UAuenq4Wu_PrYbf3TkLMyt9WUKsyz8mc7hK25at1IsWASK8zNXHXdQsGL-8MGEWfk5XzxfQYkpwKKH5uUF7I2XpsWpDaZJl4uPJPHqRFxa6kEM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Finstitutonsfatima" target="_blank"><img src="/src/assets/images/linkedin (1).png" alt="" /></a>
                            <a href="https://www.youtube.com/@institutosocialnossasenhor3548/videos" target="_blank"><img src="/src/assets/images/youtube.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="cards_andares">
                        <h2>Esforço que transforma <br />
                            e orgulho permanece</h2>
                        <div className="andares_fotos">
                        <h3>{titulo}</h3>
                        <img src={endereco}  />
                        <img src={endereco} className="andares_hidden" />
                        </div>




                        <div className="links">
                            <Link className="Link2" to="">Curso</Link>
                            <Link className="Link3" to="/sobre">Informação</Link>
                        </div>
                    </div>
                </section>


                <section className="Mini-Footer">

                <div className="logo2feira">
                    <img src="/src/assets/images/logodafeira2.png" alt="" />
                </div>

                    <h1>
                          Descubra seu <span style={{ color: '#E05A2B' }}>futuro</span> na
                        <br />
                        <span style={{ color: '#E05A2B' }}>5ª </span> Feira das Profissões
                    </h1>

                    <h3>Das 9h às 14h</h3>

                </section>

                <section className="sobre_home" ref={sobreRef}>
                    <h1>SOBRE O INSTITUTO</h1>   
                        <p>O Instituto Nossa Senhora de Fátima, localizado no extremo sul de São Paulo, é uma instituição dedicada à formação de jovens de baixa renda, oferecendo oportunidades de educação e qualificação profissional. Com um compromisso firme de inclusão social, o instituto oferece vários cursos, capacitando seus alunos para o mercado de trabalho. Ao longo dos anos, o Instituto tem se destacado por seu impacto transformador na vida de jovens, promovendo não apenas conhecimento técnico, mas também habilidades comportamentais, sociais e tecnológicas essenciais para o sucesso profissional.</p>
                    <img src="\src\assets\images\FREIXAVIER.png" alt="" />
                </section>

                <section className="img_antiga_feira">

                    <h1>VAMOS REVER OS MELHORES MOMENTOS DA FEIRA DE 2024?</h1>

                    <div className="img1">
                        <img src="\src\assets\images\fotosDa4feira\IMG_4867.JPG" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP15.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\IMG_4854.jpg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\IMG_4807.JPG" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\IMG_4761.jpg" alt="" />
                    </div>

                    <div className="img2">
                        <img src="\src\assets\images\fotosDa4feira\IMG_4757.JPG" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\IMG_4735.JPG" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP69.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP30.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP16.jpeg" alt="" />
                    </div>

                    <div className="img3">
                        <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP61.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP53.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP39.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP84.jpeg" alt="" />
                    <img src="\src\assets\images\fotosDa4feira\FEI_2024_CEDESP75.jpeg" alt="" />
                    </div>

                </section>

                    <section className="patrocinadores">
                        <h1>PATROCINADORES</h1>

                            <div className="carousel">
                                <div className="carousel-track">
                                <img src="\src\assets\images\patrocinadores\image copy 2.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy 3.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy 4.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy 5.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy 6.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy 7.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image copy.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\image.png" alt="Patrocinador" />
                                <img src="\src\assets\images\patrocinadores\porao.png" alt="Patrocinador" />
                                </div>
                            </div>
                    </section>

                   <section className="parceiros">
                        <h1>PARCEIROS</h1>

                        <div className="carousel">
                            <div className="carousel-track">
                            <img src="src/assets/images/parceiros/image copy 2.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 3.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 4.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 5.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 6.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 7.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 8.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 9.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy 10.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image copy.png" alt="Parceiro" />
                            <img src="src/assets/images/parceiros/image.png" alt="Parceiro" />
                            </div>
                        </div>
                </section>

                    <section className="contatos_home" ref={sobreContatos}>
                    <div className="contatos-wrapper">
                        <div className="mapa">
                        <iframe
                            title="Mapa Instituto Nossa Senhora de Fátima"
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d111138.7968283495!2d-46.7903324837409!3d-23.68031150538276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94ce502d2289a843%3A0x14406b17b30d0174!2sAv.%20Coronel%20Octaviano%20de%20Freitas%20Costa%2C%20463%20-%20Socorro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004773-000!3m2!1d-23.680333299999997!2d-46.7079309!5e1!3m2!1spt-BR!2sbr!4v1757287724946!5m2!1spt-BR!2sbr"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>

                        <div className="contatos-info">
                        <h1>Contatos</h1>
                        <p><strong>Instagram:</strong> @institutonsfatima</p>
                        <p><strong>WhatsApp:</strong> (11) 96398-6252</p>
                        <p><strong>Secretaria:</strong> (11) 3798-5037</p>

                        <div className="img-wrapper">
                            <img src="\src\assets\images\logodafeira2.png" alt="" height={190}/>
                    </div>          

                        </div>
                    </div>
                    </section>

                    <footer className="footer">
                    <div className="footer-container">
                        <div className="footer-column logo-column">
                            <img src="\src\assets\images\image-removebg-preview 2.png" alt="" height={80}/>
                        <p>
                            Descubra seu <strong>futuro</strong> na Feira das Profissões 2025 — conecte-se com o <strong>mercado</strong> e encontre o caminho ideal para sua carreira!
                        </p>
                        </div>

                        <div className="footer-column">
                        <h3>Horários e Endereço</h3>
                        <p><strong>29 de Setembro das 9h às 14h</strong></p>
                        <p>Instituto Social Nossa Senhora de Fátima</p>
                        <p>Av. Cel. Octaviano de Freitas Costa, 463</p>
                        <p>Veleiros - São Paulo - SP</p>
                        <p>04773-000</p>
                        </div>

                        <div className="footer-column">
                        <h3>Links Rápidos</h3>
                        <ul>
                            <li><a href="#">Início</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                        </div>

                        <div className="footer-column">
                        <h3>Contato</h3>
                        <p>Instagram: @institutonsfatima</p>
                        <p>WhatsApp: (11) 96398-6252</p>
                        <p>Secretaria: (11) 3798-5037</p>
                        </div>
                    </div>
                    </footer>

            </main>
        </div>
    );
}
