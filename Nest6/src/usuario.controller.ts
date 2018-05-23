//decorator

import {Controller, Get, Req, Res, HttpCode, Post, Body, UseGuards, ReflectMetadata} from "@nestjs/common";
import Status = jest.Status;
import {UsuarioService} from "./usuario.service";
import {UsuarioPipe} from "./pipes/usuario.pipe";
import {USUARIO_SCHEMA} from "./usuario/usuario.schema";
import {CrearUsuarioGuard} from "./guards/crear-usuario.guard";



// decorator
@Controller('Usuario')

@UseGuards(CrearUsuarioGuard)

export class UsuarioController {
    usuario = {
        nombre: 'Adrian',
        apellido: 'Eguez',
        edad: 28
    };

    usuarios = [];

    constructor(private _usuarioService:UsuarioService){

    }

    @HttpCode(202)
    @Get('mostrar')

    @ReflectMetadata('permisos', ['publico'])
    mostrarUsuario(@Res() response
    ) {
        const usuarios = this._usuarioService.mostrarUsuario();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ) {
        return response
            .status(204)
            .send(this.usuarios);
    }

    @Post('crearUsuario')
    @ReflectMetadata('permisos', ['privado'])
    crearUsuario(
       @Body(new UsuarioPipe(USUARIO_SCHEMA)) nuevoUsuario
    ) {

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

        return nuevoUsuario;
    }


}