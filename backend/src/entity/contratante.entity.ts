import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity({name: 'contratante'})
export class ContratanteEntity {

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


}