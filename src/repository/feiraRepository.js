import {connection} from './connection.js'



import { connection } from './connection.js';

// Listar todas as pessoas
export async function listarPessoas() {
    const comando = `SELECT * FROM feira_profissoes;`;
    const [registros] = await connection.query(comando);
    return registros;
}

// Inserir nova pessoa
export async function inserirPessoa(dados) {
    const comando = `
        INSERT INTO feira_profissoes
        (nome, aniversario, soube_feira, ex_aluno, telefone, cpf, escolaridade, interesse_curso)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const [registro] = await connection.query(comando, [
        dados.nome,
        dados.aniversario || null,
        dados.soube_feira,
        dados.ex_aluno ? 1 : 0,
        dados.telefone,
        dados.cpf,
        dados.escolaridade,
        dados.interesse_curso
    ]);

    return registro.insertId;
}


/*
CREATE TABLE pessoa (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  aniversario DATE,
  soube_feira VARCHAR(100),
  ex_aluno BOOLEAN,
  telefone VARCHAR(20),
  cpf VARCHAR(20),
  escolaridade VARCHAR(50),
  interesse_curso VARCHAR(100)
);

Aqui e o Mgs kk
CREATE TABLE feira_profissoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    aniversario DATE,
    soube_feira VARCHAR(100),
    ex_aluno BOOLEAN DEFAULT FALSE,
    telefone VARCHAR(20),
    cpf VARCHAR(20),
    escolaridade VARCHAR(50),
    interesse_curso VARCHAR(100)
);



CREATE TABLE chegou(
        chegou_id 
        Pessoa_id
        Firegugbasdjasbhdjabvhsd,
        qrcode,
);



CREATE TABLE andar1(
        id_andar,
        id_pessoa
        Sala1 True,
        Sala2 TRue,
        Saça3 TRue
);

CREATE TABLE andar2(
        Sala1 True,
        Sala2 TRue,
        Saça3 TRue
);
CREATE TABLE andar3(
        Sala1 True,
        Sala2 TRue,
        Saça3 TRue
);
*/