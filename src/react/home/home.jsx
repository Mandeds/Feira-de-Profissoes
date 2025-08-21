import "./style.scss";
import "../global.scss";
import { Link } from "react-router";
import React, { useEffect, useState } from 'react';


export default function Home() {const targetDate = new Date('2025-09-29T23:59:59'); // Coloque DENTRO do componente
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

                    <div className="carrossel">
                        <img src="" />
                        <img src="" />
                        <img src="" />
                        <img src="" />
                    </div>

                    <div className="informacoes">
                        <h3>VEJA NOSSAS OUTRAS PLATAFORMAS</h3>
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
                        <img src="/src/assets/images/freibg.png" />
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

