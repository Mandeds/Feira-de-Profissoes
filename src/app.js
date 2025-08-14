import express from    'express';
import { adicionarRotas } from './rotas.js';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);


api.listen(5010, () => console.log("Api subiu com sucesso na porta 5010"))