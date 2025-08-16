import React from 'react';
import { Link } from 'react-router';
import "./Login.scss";



const Login = () => {
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
  )
}

export default Login