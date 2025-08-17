import React, { useState } from 'react';
import Cards from '../../components/cards/Cards';
import "./Administrador.scss";

const Administrador = () => {
    const [userData, setUserData] = useState([]);

    const url = "http://localhost:5001/pessoas";

    async function carregarUsuarios() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };

    let CardsList = [];
    for (let i = 0; i < userData.length; i++) {
        CardsList.push(<Cards key={i} userData={userData[i]} />);
    }

    const urlPesquisa = "http://localhost:5001/pesquisa"
    const [usuario, setUsuario] = useState({});
    async function procurarUsuario() {
        try {
            const response = await fetch(urlPesquisa, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: usuario,
                    cpf: usuario
                }),
            });

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    }


    return (
        <div className="container_administrador">
            <header className="header_administrador">
                <h1>Lista de Usuários</h1>
                <label htmlFor="procuraCadastro">Procura por nome ou cpf: </label>
                <input type="text" id='procuraCadastro' placeholder='Digite seu nome ou cpf' onChange={(e) => setUsuario(e.target.value)} />
                <button className='pesquisar' onClick={procurarUsuario} >Pesquisar</button>
                <br /> <br />
                <button className='carregar' onClick={carregarUsuarios}>Carregar todos os cadastros</button>
            </header>

            <div className="cards_bonitos">
                {userData.length === 0 ? (
                    <p>Nenhum usuário encontrado.</p>
                ) : (
                    CardsList
                )}
            </div>
        </div >
    );
};

export default Administrador;
