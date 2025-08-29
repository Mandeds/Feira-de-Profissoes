import React, { useState } from 'react';
import { Link, useNavigate } from "react-router";
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
    <div className='container_login'>
      <header>
        <div className='transaprencia'>
          <div className='ordem'>
        <h1><Link to={'/'}>Voltar</Link></h1>
        <div className="pageatual">
          <h1>Login</h1>
        </div>
        <img src="src/assets/images/user2.png" alt="User" />
        </div>
        </div>

      </header>

      <div className="container_box">
        <div className='fundoOpaco'>
        <form className='Conteudo'>
          <label>Usuario:</label>
          <input
            type="text"
            placeholder='Usuario'
            id='usuario'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className='logar logar-animated' type='button' onClick={verificarAdmin}>Entrar</button>
        {/*  AQUI È LOGIN DE ADMS NÃO DE USUARIOS NORMAIS */}
        </div>


      </div>
    </div>
  );
};

export default Login;
