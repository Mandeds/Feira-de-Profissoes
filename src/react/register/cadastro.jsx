import { useState } from "react";
import "./cadastro.scss";
import "../global.scss";
import { Link } from "react-router";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [curso, setCurso] = useState("");
  const [exAluno, setExAluno] = useState(false);
  const [informations, setInformations] = useState("");
  const [date, setdate] = useState("");

  let url = `http://localhost:5022/pessoas`



  function EnviarDados() {


    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: name,
        aniversario: date,
        soube_feira: informations,
        ex_aluno: exAluno,
        telefone: phone,
        cpf: cpf,
        escolaridade: escolaridade,
        interesse_curso: curso
      })
    })
      .then(data => {
        alert('Cadastro realizado com sucesso!');
        alert(`Olá ${name}!\nEstaremos aguardando você no dia em!`);
      })
  }



  return (
    <div className="container">
      <header>
        <h1><Link to={'/'}>Voltar</Link></h1>
        <div className="pageatual">
          <h1>Cadastro</h1>
        </div>
        <img src="src/assets/images/user2.png" />
      </header>

      <div className="cadastro">
        <div className="box1">
          <h2>Nome:</h2>
          <input
            type="text"
            placeholder="Pedro Alberto da Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="box">
          <h2>Email:</h2>
          <input
            type="email"
            placeholder="pedroalberto@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h2 className="phone">Telefone:</h2>
          <input
            className="phoneInput"
            type="tel"
            placeholder="11953826619"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="box2">
          <h2>CPF:</h2>
          <input
            type="text"
            placeholder="546.725.667-10"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <h2 className="School">Escolaridade</h2>
          <select
            value={escolaridade}
            onChange={(e) => setEscolaridade(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="fundamental">Fundamental</option>
            <option value="medio">Médio</option>
            <option value="superior">Superior</option>
            <option value="naoconcluiu">Não concluído</option>
            <option value="concluido">Concluído</option>
          </select>
        </div>

        <div className="box3">
          <h3>Interesse em Curso</h3>
          <select value={curso} onChange={(e) => setCurso(e.target.value)}>
            <option value="">Selecione</option>
            <option value="informatica">Informática</option>
            <option value="administracao">Administração</option>
            <option value="cv">Comunicação Visual</option>

          </select>

          <div className="Ex">
            <h3>
              Ex-Aluno?
              <input
                type="checkbox"
                checked={exAluno}
                onChange={(e) => setExAluno(e.target.checked)}
              />{" "}
              Sim
            </h3>
          </div>
        </div>

        <div className="datehappybirthday">
          <h3>Data de Nasc.</h3>
          <input type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>

        <div className="box">
          <h2>Como soube da feira?</h2>
          <input type="text" value={informations}
            onChange={(e) => setInformations(e.target.value)}
          />
        </div>

        <button onClick={EnviarDados}>Enviar Cadastro</button>
      </div>
    </div>
  );
}
