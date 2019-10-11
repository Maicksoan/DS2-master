import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { ServicoEntity } from './servico.entity';


@Entity({name: 'prestador'})
export class PrestadorEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 11})
    cpf: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 255})
    email: string;

    @Column({nullable: false, length: 30})
    telefone: string;

    @ManyToOne(type => ServicoEntity, { eager: true , nullable: false})
    @JoinColumn({ name: 'servico_id' })
   servico: ServicoEntity;
    

   

}