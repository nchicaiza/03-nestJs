import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {FotoEntity} from "./foto/foto.entity";
import {ParametrosController} from "./parametros.controller";
import {AppService} from "./app.service";
import {AppController} from "./app.controller";
import {UsuarioController} from "./usuario.controller";
import {UsuarioService} from "./usuario.service";


@Module({
  imports: [ // otros modulos


      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'web2018agr2.mysql.database.azure.com',
          port: 3306,
          username: 'profesor@web2018agr2',
          password: 'Javascript1',
          database: 'web',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          ssl:true
      }),
      TypeOrmModule.forFeature( [ UsuarioEntity, FotoEntity])
  ],

    controllers: [
        AppController,
        UsuarioController,
        ParametrosController],
    providers: [
        AppService,
        UsuarioService
    ],

})
export class AppModule {}
