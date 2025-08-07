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
                <p>
                    Aqui ficara a pagina de cadastro quando eu puder fazer ela ou quando alguem fizer.
                </p>
            </div>

        </div>
    )
}

export default Cadastro