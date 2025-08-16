import React from 'react';
import { Link } from 'react-router';
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
        <img src="src/assets/images/user2.png" />
      </header>


      <div className="container_login">
        <form>
          <label >Usuario:</label>
          <input type="text" placeholder='Usuario' id='usuario' />
          <label htmlFor=""> Senha:</label>
          <input type="password" name="" id="senha" placeholder='Senhaforte' />
        </form>
        <button className='logar' type='button'>Entrar</button>
      </div>
    </div>
  );
};

export default Login