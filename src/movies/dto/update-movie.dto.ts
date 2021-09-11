import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
// import { IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

//! mapped-types를 설치해 PartialType을 활용하면 아래처럼 작성안해도 됨
//! (마찬가지로 IsNumber, IsString을 import할 필요도 없음: CreateMovieDto에 있으므로)
// export class UpdateMovieDto {
//   @IsString()
//   readonly title?: string;

//   @IsNumber()
//   readonly year?: number;

//   @IsString({ each: true })
//   readonly genres?: string[];
// }
