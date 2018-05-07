import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";

@Module({
  imports: [ // otros modulos
              ],
  controllers: [// otros controladores
    AppController,
    UsuarioController],
  components: [],
})
export class AppModule {}
