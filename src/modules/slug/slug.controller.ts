import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SlugService } from './slug.service';
import { ISlug } from './slug.interface';
import { SlugCreateDto } from './slug.dto';

@Controller('slugs')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  @Post('/')
  create(@Body() slug: SlugCreateDto): Promise<ISlug> {
    return this.slugService.create(slug);
  }

  @Get('/:slug/validate')
  async validate(@Param('slug') slug): Promise<any> {
    return { isValid: await this.slugService.validate(slug) };
  }

  @Get('/:slug')
  async find(@Param('slug') slug): Promise<ISlug> {
    return this.slugService.findOne(slug);
  }
}
