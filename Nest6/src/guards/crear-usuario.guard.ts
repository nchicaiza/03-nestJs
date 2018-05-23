import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";


@Injectable()
export class CrearUsuarioGuard implements CanActivate {

    constructor(private readonly reflector: Reflector){}

    canActivate(context: ExecutionContext)
        : boolean |
        Promise<boolean> |
        Observable<boolean> {

        const request = context.switchToHttp().getRequest();

        const cabeceras = request.headers;

        const permisos = this.reflector.get(
            metadatakey: 'permisos',
            context.getHandler()
        );

        console.log('Contexto:', context);
        console.log('cabeceras', request.headers);

        if (cabeceras.hola === "Mundo") {
            return true
        }else {
            return false;
        }
    }
}