import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({name: 'servico'})
export class ServicoEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 50})
    categoria: string;
    

}