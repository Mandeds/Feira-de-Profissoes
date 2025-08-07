create database feira_profissoes;
use feira_profissoes;

CREATE TABLE participantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    telefone VARCHAR(20),
    data_nascimento DATE,
    cidade VARCHAR(100),
    escola VARCHAR(100),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO participantes (nome, email, telefone, data_nascimento, cidade, escola) VALUES
('Ana Beatriz Souza', 'ana.souza@gmail.com', '(11) 91234-5678', '2006-05-14', 'São Paulo', 'E.E. Dom Pedro I'),
('Lucas Henrique Silva', 'lucas.h.silva@yahoo.com', '(11) 99876-5432', '2005-08-22', 'São Paulo', 'Colégio Objetivo'),
('Mariana Oliveira', 'mariana.oli@hotmail.com', '(21) 98765-4321', '2007-01-10', 'Rio de Janeiro', 'Colégio Militar RJ'),
('Pedro Almeida', 'pedro.almeida@gmail.com', '(31) 91234-1122', '2006-03-05', 'Belo Horizonte', 'CEFET-MG'),
('Júlia Ferreira', 'jferreira@yahoo.com', '(41) 99800-0001', '2005-11-19', 'Curitiba', 'Colégio Positivo'),
('Bruno Lima', 'bruno.lima@outlook.com', '(51) 99333-2222', '2007-07-30', 'Porto Alegre', 'E.E. Júlio de Castilhos'),
('Camila Rocha', 'camila.r@hotmail.com', '(61) 99123-4567', '2006-12-08', 'Brasília', 'Centro Educacional Sigma'),
('Thiago Costa', 'thiago.costa@gmail.com', '(71) 98777-8888', '2005-04-27', 'Salvador', 'Colégio Anchieta'),
('Isabela Martins', 'isabela.martins@uol.com.br', '(19) 99222-3333', '2006-10-17', 'Campinas', 'E.E. Bento Quirino'),
('Rafael Gomes', 'rafa.gomes@hotmail.com', '(95) 98888-4444', '2007-02-03', 'Boa Vista', 'Colégio Estadual Roraima'),
('Laura Mendes', 'laura.mendes@gmail.com', '(27) 98712-4560', '2006-06-21', 'Vitória', 'Colégio Salesiano'),
('Felipe Carvalho', 'felipe.c@gmail.com', '(67) 99999-1234', '2005-09-09', 'Campo Grande', 'Colégio Nota 10'),
('Amanda Ribeiro', 'amanda.ribeiro@bol.com.br', '(92) 98123-9876', '2006-08-12', 'Manaus', 'IFAM - Campus Manaus'),
('Guilherme Nunes', 'g.nunes@outlook.com', '(82) 99911-2222', '2005-12-30', 'Maceió', 'Colégio Marista'),
('Nicole Barros', 'nicole.barros@gmail.com', '(31) 98765-1010', '2007-03-18', 'Belo Horizonte', 'Escola Estadual Central');

