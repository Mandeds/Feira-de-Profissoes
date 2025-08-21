import "./style.scss";
import "../global.scss";
import { Link } from "react-router";
import React, { useEffect, useState } from 'react';


export default function Home() {
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

let [src, setSrc] = useState("/src/assets/images/freibg.png")


function voltarTitulo(){
    setTitulo("ANDARES")
    setSrc("/src/assets/images/freibg.png")
}

function mudarTituloPatio(){
    let valor = patio
    setTitulo(valor)

    setSrc("")

    
}
function mudarTituloPrimeiro(){
    let valor = umAndar
    setTitulo(valor)

}
function mudarTituloDois(){
    let valor = doisAndar
    setTitulo(valor)

}
function mudarTituloTres(){
    let valor = tresAndar
    setTitulo(valor)

}
  

    return (
        <div className="container_home">

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
                        <button>
                            <strong>CADASTRO</strong>
                        </button>
                        
                        <button>
                            <strong>LOGIN</strong>
                        </button>
                    </div>
            
      <h1 className="horario"> 
        {timeLeft.days} Dias {timeLeft.hours} Horas {timeLeft.minutes} Minutos
      </h1>

                    <div className="carrossel">
                        <img src="" />
                        <img src="" />
                        <img src="" />
                        <img src="" />
                    </div>

                    <div className="informacoes">
                        <h3>VEJA NOSSAS OUTRAS PLATAFORMAS</h3>
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

                    <div className="cards_andares">
                        <h2>Esforço que transforma <br /> 
                    e orgulho permanece</h2>
                        <img src={src} />
                        <div className="andares_fotos">

                        </div>
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
