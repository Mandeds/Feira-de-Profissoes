import * as repo from '../repository/feiraRepository.js'

import { Router } from 'express';

const endpoints = Router();

endpoints.get('/pessoas', async (req, res) => {
        let registros = await repo.listarPessoas();

        res.send(registros);
})


endpoints.post('/pessoas', async (req, res) => {
        let dados = req.body;

        let id = await repo.inserirPessoa(dados);
        res.send({Novoid: id})

})

export default endpoints;