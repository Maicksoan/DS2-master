import { ServicoEntity } from '../entity/servico.entity';
import { Request, Response } from 'express';
import {getRepository} from 'typeorm'

class ServicoController {

    public async find(req: Request, res: Response) {

        try {
            const servicos = await getRepository(ServicoEntity).find();
            
            res.send(servicos);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {
        const servico = req.body;

        try {
            await getRepository(ServicoEntity).save(servico);
            res.send(servico);

        } catch(error) {
            res.status(500).send(error);
        }
    }
}

export default new ServicoController();