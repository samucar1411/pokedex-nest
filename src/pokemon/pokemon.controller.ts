import { Controller, 
        Get, 
        Post, 
        Body, 
        Patch, 
        Param, 
        Delete, 
        Query } from '@nestjs/common';

import { ParseMongoIdPipe } from 'src/common/pipes';
import { PaginationDto } from '../common/dto';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create( createPokemonDto );
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto ) {
    return this.pokemonService.findAll( paginationDto );
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }

  @Patch(':term')
  update(
    @Param('term') term: string, 
    @Body() updatePokemonDto: UpdatePokemonDto
  ) {
    return this.pokemonService.update(term, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
