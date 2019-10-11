import { Router } from 'express';
import  servicoController  from '../controller/servico.controller';

class ServicoRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', servicoController.find);
        this.router.post('/', servicoController.create);
    }

}

export default new ServicoRouter().router;