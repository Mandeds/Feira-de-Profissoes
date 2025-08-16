import React, { useState } from 'react';  // Não se esqueça de importar o useState
import { Link } from 'react-router-dom';  // Certifique-se de que está importando do 'react-router-dom'
import { useNavigate } from 'react-router-dom';  // Importando useNavigate corretamente
import "./Login.scss";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();  // UseNavigate deve ser chamado aqui

  let url = 'http://localhost:5022/admin';  // Verifique a URL correta

  const verificarAdmin = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: name,
        password: password
      }),
    })
      .then((data) => {
        if (data.isAdmin) {
          alert(`Login bem-sucedido! Bem-vindo, ${data.nome}`);
          navigate('/admin');  // Redireciona para /admin
        } else {
          alert('Usuário não autorizado');  // Caso o usuário não seja admin
        }
      })
      .catch((error) => {
        alert(error.message);  // Exibe erro, como "Usuário ou senha incorretos"
      });
  };

  return (
    <div className='container_login'>
      <header>
        <h1> <Link to={'/'}>Voltar</Link> </h1>
        <div className="pageatual">
          <h1>Login</h1>
        </div>
        <img src="src/assets/images/user2.png" alt="User" />
      </header>

      <div className="container_login">
        <form>
          <label>Usuário:</label>
          <input
            type="text"
            placeholder='Usuario'
            id='usuario'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            name=""
            id="senha"
            placeholder='Senhaforte'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className='logar' type='button' onClick={verificarAdmin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
