
import express from 'express'
const api = express();
api.use(express.json());



api.listen(5012, () => console.log(` OUVINDO NA PORTA 5012 ` ))