import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";


@Entity('web_ChicaizaNelson_usuario\'')
export  class FotoEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    url: string;

    @ManyToOne(
        type => UsuarioEntity, UsuarioEntity => UsuarioEntity.fotos)

    usuarioId: UsuarioEntity;
}