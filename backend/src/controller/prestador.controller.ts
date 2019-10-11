import { PrestadorEntity } from '../entity/prestador.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class PrestadorController {

    public async find(req: Request, res: Response) {

        try {
            const prestadores = await getRepository(PrestadorEntity).find();
            
            res.send(prestadores);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const prestador = req.body;

        try {
            await getRepository(PrestadorEntity).save(prestador);
            res.send(prestador);

        } catch(error) {
            res.status(500).send(error);
        }
    }
}

export default new PrestadorController();