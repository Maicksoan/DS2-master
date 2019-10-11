import { Router } from 'express';
import  prestadorController  from '../controller/prestador.controller';

class PrestadorRouter {

    public router: Router;

    constructor() {
        this.router = Router();

        this.init();
    }

    private init() {
        this.router.get('/', prestadorController.find);
        this.router.post('/', prestadorController.create);
    }

}

export default new PrestadorRouter().router;