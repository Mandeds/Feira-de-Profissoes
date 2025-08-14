import feiraController from './controller/feiraController.js'


export function adicionarRotas(api) {
        api.use(feiraController)
}