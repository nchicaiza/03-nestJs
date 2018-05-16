import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import {InicioController} from "./inicio.controller";
import {PreguntasFrecuentesController} from "./preguntasFrecuentes.Controller";
import {AppService} from  "./appservice";

@Module({
  imports: [ ],
  controllers: [
      AppController,
    InicioController,
    PreguntasFrecuentesController],
    providers:[AppService],
})
export class AppModule {}

