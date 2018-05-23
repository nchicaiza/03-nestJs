import {Injectable, ArgumentMetadata, PipeTransform, BadRequestException} from "@nestjs/common";


import * as Joi from 'joi';

@Injectable()
export class UsuarioPipe implements PipeTransform{

    constructor(private readonly _schema) {

    }


    transform(jsonValidar: any, metadata: ArgumentMetadata){
        const  {
            error
        } = Joi.validate(jsonValidar, this._schema);

        if (error) {
            //botar un error
            throw new BadRequestException(
                {
                    error: error,
                    mensaje : 'Json no valido'
                }
            );
        } else {
            return jsonValidar;
        }



    }

}