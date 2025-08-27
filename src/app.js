import express from 'express';
import { adicionarRotas } from './rotas.js';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);


api.listen(5001, () => console.log("Api subiu com sucesso na porta 5001"));