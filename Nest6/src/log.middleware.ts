import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";

@Injectable()

export class LogMiddleware implements NestMiddleware{

    constructor(private _usuarioService: UsuarioService){

    }

    resolve(nombreAplicacion:string, anio: number): MiddlewareFunction {
        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.ptotocol,
                headers: request.headers,
            };

            const usuarios = this. _usuarioService.mostrarUsuario();
            console.log('****', usuarios);
            
            console.log('Desde el Middleware', nombreAplicacion, anio);
            console.log('**** DESDE MIDDLEWARE ****', nombreAplicacion, anio,
                this._usuarioService.mostrarUsuario());
            console.log(respuesta);
            next(); // ERROR SI NO SE LLAMA
        };
        };

}