import * as repo from '../repository/feiraRepository.js'

import { Router } from 'express';

const endpoints = Router();

endpoints.get('/pessoas', async (req, res) => {
        let registros = await repo.listarPessoas();

        res.send(registros);
})

endpoints.post("/pesquisa", async (req, res) => {
        let dados = req.body;

        let registro = await repo.procurarPessoa(dados);
        res.send(registro);
});


endpoints.post('/pessoas', async (req, res) => {
        let dados = req.body;

        let id = await repo.inserirPessoa(dados);
        res.send({ Novoid: id })

})


endpoints.post('/admin', async (req, res) => {
        let dados = req.body;

        // Verifique no banco de dados
        let admin = await repo.verificarAdmin(dados);  // Isso verifica se o admin existe no banco

        if (admin.length === 0) {
                // Admin não encontrado
                return res.status(404).send({ Error: "Usuário não reconhecido" });
        }

        // Verifique se o nome e senha coincidem
        if (admin[0].nome === dados.nome && admin[0].password === dados.password) {
                return res.status(200).send({ nome: admin[0].nome, senha: admin[0].password, isAdmin: true });
        } else {
                // Senha incorreta
                return res.status(401).send({ Error: "Senha incorreta" });
        }
});

export default endpoints;