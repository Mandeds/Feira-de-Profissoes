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
                <input type="text" placeholder="Pedro Alberto da Silva" />
                <h1>Email</h1>
                <input type="email" placeholder="pedroalberto@gmail.com" />
                <h1>Telefone</h1>
                <input type="phone" placeholder="11953826619" />
                <h1>CPF</h1>
                <input type="text" placeholder="546.725.667-10"/>
                
                <h1>Escolaridade</h1>
                <select>
                    <option value=""></option>
                </select>
                <h3>Interesse em Curso</h3>
                <select >
                    <option value=""></option>
                </select>

                <div className="Ex">
                    <h3>Ex-Aluno?</h3>
                    <input type="checkbox"/>
                        <strong>
                            <p>·Sim</p>
                        </strong>
                </div>


                <h1>Como soube da feira?</h1>
                <input type="text" />
            </div>
        </div>
    )
}