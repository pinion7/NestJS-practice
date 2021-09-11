import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const target = this.movies.find((movie) => movie.id === id);
    if (!target) {
      throw new NotFoundException(`Movie with id: ${id} not found`);
    }
    return target;
  }

  deleteOne(id: number): string {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return 'movie deleted!';
  }

  createOne(movieData: CreateMovieDto): string {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return 'movie created!';
  }

  updateOne(id: number, updateData: UpdateMovieDto): string {
    const idx = this.movies.findIndex((movie) => movie.id === id);
    this.movies[idx] = {
      ...this.movies[idx],
      ...updateData,
    };
    return 'movie updated!';
  }
}
