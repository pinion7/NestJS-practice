import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData: { name?: string }) {
    return `This will create a ${movieData}`;
  }

  @Delete()
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Put()
  patchAll() {
    return 'This will update movies';
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData: { name?: string }) {
    return {
      updatedMovie: `This will update a movie with the id: ${movieId}`,
      ...updateData,
    };
  }
}
