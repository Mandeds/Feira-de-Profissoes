import React from 'react';
import './Cards.scss'; // Importando o CSS do estilo

const UserCard = ({ userData }) => {
    if (!userData) {
        return <p>Carregando...</p>; // Exibe um loading enquanto os dados não chegam
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Informações do Usuário</h3>
            </div>
            <div className="card-body">
                <p><strong>Nome:</strong> {userData.nome}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Aniversário:</strong> {userData.aniversario}</p>
                <p><strong>Como soube da feira:</strong> {userData.soube_feira}</p>
                <p><strong>Ex-Aluno:</strong> {userData.ex_aluno ? 'Sim' : 'Não'}</p>
                <p><strong>Telefone:</strong> {userData.telefone}</p>
                <p><strong>CPF:</strong> {userData.cpf}</p>
                <p><strong>Escolaridade:</strong> {userData.escolaridade}</p>
                <p><strong>Interesse no Curso:</strong> {userData.interesse_curso}</p>
                <div className="saiba"><button>Saiba Mais.</button></div>
            </div>
        </div>
    );
}

export default UserCard;
