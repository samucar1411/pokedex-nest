import { Module } from '@nestjs/common';

import { CommonModule } from 'src/common/common.module';
import { PokemonModule } from './../pokemon/pokemon.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [ CommonModule, PokemonModule ]
})
export class SeedModule {}
