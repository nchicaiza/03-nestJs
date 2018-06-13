import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {JwtGuard} from "./guards/jwt.guards";

@Controller()
@UseGuards(JwtGuard)
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @ReflectMetadata("necesitaProteccion", false)
    root(): string {
        return this.appService.root();
    }

    @Get('hola')
    @ReflectMetadata("necesitaProteccion", true)
    hola(): string {
        return 'Hola amigos';
    }
}
