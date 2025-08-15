import "./style.scss";
import "../global.scss"
import { Link } from 'react-router';


export default function Cadastro() {
    return (
        <div className="container">
            <header>
                <h1>Login</h1>
                <div className="pageatual">
                    <h1>Cadastro</h1>
                </div>
                <img src="src/assets/images/user.png" />
            </header>


            <div className="cadastro">
                <h1>Nome</h1>
                <input type="text" />
                <h1>Email</h1>
                <input type="email" />
                <h1>Telefone</h1>
                <input type="phone" />
                <h1>CPF</h1>
                <input type="text" />
                
                <h1>Escolaridade</h1>
                <select>
                    <option value=""></option>
                </select>
                <h3>Interesse em Curso</h3>
                <select >
                    <option value=""></option>
                </select>

                <h3>Ex-Aluno?</h3>
                <input type="checkbox"  />
                <input type="button" value="" />


                <h1>Como soube da feira?</h1>
                <input type="text" />
            </div>
        </div>
    )
}