import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static'
;
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration, JoiValidationSchema } from './common/config';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),

    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
    }),

    MongooseModule.forRoot(process.env.PORT),

    PokemonModule,
    CommonModule,
    SeedModule,
    ],
})
export class AppModule {}
