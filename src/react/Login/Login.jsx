import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let url = 'http://localhost:5001/admin';

  const verificarAdmin = () => {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: name, password: password }),
    })
      .then((res) => res.json()) // precisa converter a resposta
      .then((data) => {
        if (data.isAdmin) {
          alert(`Login bem-sucedido! Bem-vindo, ${data.nome}`);
          navigate('/admin');
        } else {
          alert('Usuário não autorizado');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
<div className="container_login">
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      

      <div className="login_card">
        {/* Lado esquerdo */}
        <div className="left_card">
          <img src="src/assets/images/user2.png" alt="User" />
        </div>

        {/* Lado direito */}
        <div className="right_card">
          <header>
            <h1>
              <Link to={"/"}>Voltar</Link>
            </h1>
            <div className="pageatual">
              <h1>Login</h1>
            </div>
            <img src="src/assets/images/user2.png" alt="User" />
          </header>

          <form>
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              placeholder="Usuário"
              id="usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              placeholder="Senha forte"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="logar" type="button" onClick={verificarAdmin}>
              <span className="btn-text">Entrar</span>
              <div className="loading-dots"></div>
            </button>
          </form>
        </div>
      </div>
       <div className="imagem-inferior-direita">
    <img src="src/assets/images/predio.svg" alt="Logo" />
  </div>
    </div>
  );
};

export default Login;
