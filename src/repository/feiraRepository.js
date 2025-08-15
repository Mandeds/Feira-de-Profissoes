import {connection} from './connection.js'



export async function listarPessoas() {
        let comando = `
        SELECT * FROM pessoa;
        `
        let [registros] = await connection.query(comando)   
        return registros     
}



export async function inserirPessoa(dados){
        let comando = `
        INSERT INTO pessoa (nome, aniversario, soube_feira, ex_aluno, telefone, cpf, escolaridade, interesse_curso)
        VALUES
        (?,?,?,?,?,?,?,?);
        ` 

        const [registro] = await connection.query(comando, [
                dados.nome,
                dados.aniversario,
                dados.soube_feira,
                dados.ex_aluno,
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