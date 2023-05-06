import { Injectable } from '@nestjs/common';
import { ISlug } from './slug.interface';
import { SlugRepository } from './slug.repository';

@Injectable()
export class SlugService {
  constructor(private readonly slugRepository: SlugRepository) {}

  async create(slug: ISlug): Promise<ISlug> {
    return this.slugRepository.create(slug);
  }

  async findOne(slug: string): Promise<ISlug> {
    return this.slugRepository.findOne(slug);
  }

  async validate(slug: string): Promise<boolean> {
    const item = await this.slugRepository.findOne(slug);
    return Boolean(!item);
  }
}
