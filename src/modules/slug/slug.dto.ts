import { IsString, IsUrl } from 'class-validator';

export class SlugCreateDto {
  @IsString()
  slug: string;

  @IsUrl()
  url: string;
}
