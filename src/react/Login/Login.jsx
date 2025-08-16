import React from 'react'

const Login = () => {
  return (
    <div className='container'>
      <div className="container_login">
        <form>
          <label>Usuario:</label>
          <input type="text" placeholder='Usuario' id='usuario' />
          <label>Senha:</label>
          <input type="password" id="senha" placeholder='Senhaforte' />
        </form>
        <button type='button'>Entrar</button>
      </div>
    </div>
  )
}

export default Login
