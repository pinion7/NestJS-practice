import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const target = this.movies.find((movie) => movie.id === parseInt(id));
    // +를 붙여도 string타입으로 들어온 숫자를 number 타입으로 바꿀 수 있음
    // ex) return this.movies.find((movie) => movie.id === +id);
    if (!target) {
      throw new NotFoundException(`Movie with id: ${id} not found`);
    }
    return target;
  }

  deleteOne(id: string): string {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return 'movie deleted!';
  }

  create(movieData): string {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return 'movie created!';
  }

  update(id: string, updateData): string {
    const idx = this.movies.findIndex((movie) => movie.id === +id);
    this.movies[idx] = {
      ...this.movies[idx],
      ...updateData,
    };
    return 'movie updated!';
  }
}
