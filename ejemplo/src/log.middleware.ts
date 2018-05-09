import {ExpressMiddleware, Middleware, NestMiddleware} from "@nestjs/common";



@Middleware()
export class LogMiddleware implements
    NestMiddleware{

    resolve(nombreAplicacion:string, anio: number): ExpressMiddleware {
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
            console.log('Desde el Middleware', nombreAplicacion, anio);
            console.log(respuesta);
            next();//error si no se llama
        };
    }
}