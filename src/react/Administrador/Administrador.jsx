import React, { useState } from 'react';
import Cards from '../../components/cards/Cards';
import "./Administrador.scss";

const Administrador = () => {
    const [userData, setUserData] = useState([]);

    const url = "http://localhost:5001/pessoas";

    const carregarUsuarios = async () => {
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

    return (
        <div className="container_administrador">
            <h1>Lista de Usuários</h1>
            <button className='carregar' onClick={carregarUsuarios}>Carregar todos os cadastros</button>

            <div className="cards_bonitos">
                {userData.length === 0 ? (
                    <p>Nenhum usuário encontrado.</p>
                ) : (
                    CardsList
                )}
            </div>
        </div>
    );
};

export default Administrador;
