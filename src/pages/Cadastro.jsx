import React from 'react'
import { Link } from 'react-router'
import './Cadastro.scss';

const Cadastro = () => {
    return (
        <div className='container'>
            <div className="botao">
                <Link className='botao_voltar' to={'/'} >Voltar</Link>
            </div>
            <h1>CADASTRO</h1>
            <div className="principal">
                <form>
                    <div className="linha1">
                        <label htmlFor="">Nome: </label> <input type="text" placeholder='Teste da Silva' />
                        <label htmlFor="">Email: </label> <input type="email" placeholder='testedasilva@gmail.com' />
                    </div>
                    <div className="linha2">
                        <label htmlFor="">Cidade: </label> <input type="text" placeholder='São Paulo' />
                        <label htmlFor="">Tel: </label> <input type="number" placeholder='(99) 99999-9999' />
                    </div>
                    <div className="linha3"><label htmlFor="">Data Nascimento: </label> <input type="date" /></div>
                    <br />
                    <button>QUERO PARTICIPAR</button>
                </form>
            </div>

        </div>
    )
}

export default Cadastro