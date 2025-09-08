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
  const [date, setDate] = useState("");

  let url = `http://localhost:5001/pessoas`;

  function EnviarDados() {
    if (!date) {
      alert("Por favor, selecione a data de nascimento!");
      return;
    }


    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: name,
        email: email,
        aniversario: date,
        soube_feira: informations,
        ex_aluno: exAluno,
        telefone: phone,
        cpf: cpf,
        escolaridade: escolaridade,
        interesse_curso: curso,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao cadastrar");
        return res.text();
      })

      .then(() => {
        alert("Cadastro realizado com sucesso!");
        alert(`Olá ${name}!\nEstaremos aguardando você no dia ${date}!`);
      })
      .catch((err) => {
        console.error(err);
        alert("Ocorreu um erro ao cadastrar. Tente novamente.");
      });
  }

  return (
    <div className="container-cadastro">
      
      <header>
        <Link className="Link" to="/">
          <h1>Voltar</h1>
        </Link>
        <div className="pageatual">
          <h1>Cadastro</h1>
        </div>
        <img src="src/assets/images/user2.png" alt="Usuário" />
      </header>

      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>

      <div className="cadastro">
        <div className="box1">
          <h2>Nome:</h2>
          <input
            type="text"
            placeholder="Pedro Alberto da Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="box">
          <h2>Email:</h2>
          <input
          className="emailInput"
            type="email"
            placeholder="pedroalber@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h2 className="phone">Telefone:</h2>
          <input
            className="phoneInput"
            type="tel"
            placeholder="11953826619"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="box2">
          <h2>CPF:</h2>
          <input
            type="text"
            className="CPF"
            placeholder="546.725.667-10"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
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
            </h3>
              <input
                className="checkbox"
                type="checkbox"
                checked={exAluno}
                onChange={(e) => setExAluno(e.target.checked)}
              />{" "}

              <h3>Sim</h3>
            
          </div>
        </div>

        <div className="datehappybirthday">
          <h3>Data de Nasc.</h3>
          <input
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="box">
          <h2>Como soube da feira?</h2>
          <input
            type="text"
            value={informations}
            onChange={(e) => setInformations(e.target.value)}
          />
        </div>

        <button className="btao_cadastro" onClick={EnviarDados}>Enviar Cadastro</button>
      </div>
    </div>
  );
}
