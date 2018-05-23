
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FotoEntity} from "../foto/foto.entity";

@Entity('web_ChicaizaNelson_usuario')
export  class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    nombre: string;

    @ManyToOne(
        type => FotoEntity,
        fotoEntity => fotoEntity.usuario
    )

    fotos: FotoEntity[];

}