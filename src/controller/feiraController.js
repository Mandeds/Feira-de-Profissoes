import * as repo from '../repository/feiraRepository.js'

import { Router } from 'express';

const endpoints = Router();

endpoints.get('/pessoas', async (req, res) => {
        let registros = await repo.listarPessoas();

        res.send(registros);
})

export default endpoints;