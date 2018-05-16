import {Injectable} from "@nestjs/common/interfaces";


@Injectable()

export class UsuarioService {
    usuarios: Usuario[] = [];

    crearUsuario(usuario: Usuario){
        this.usuarios.push(usuario);
        return this.usuarios;

    }

    mostrarUsuario(): Usuario[]{
        return this.usuarios;
    }

}

interface Usuario {
    nombre:string;
    apellido:string;
    edad: number
}