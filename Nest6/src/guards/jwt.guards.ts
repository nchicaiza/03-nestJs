import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/index";
import {Reflector} from "@nestjs/core";
import {JwtService} from "../servicios/jwt.service";

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly _jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext)
        : boolean |
        Promise<boolean> |
        Observable<boolean> {


        const necesitaProteccion = this.reflector.get(
            "nesecitaProteccion",
            context.getHandler());

        if (necesitaProteccion) {

            const request = context
                .switchToHttp()
                .getRequest();

            const jwt = request.headers.authentication;

            if (jwt) {
                this._jwtService
                    .verificarToken(
                        jwt,
                        (error, data) => {
                            if (error) {
                                return false;
                            } else {
                                return true;
                            }
                        }
                    );

            } else {
                return false;
            }

        } else {
            return true
        }

    }

}