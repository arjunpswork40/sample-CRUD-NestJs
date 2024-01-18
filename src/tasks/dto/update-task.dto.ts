import { IsString, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
