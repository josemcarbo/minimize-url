import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Slugs } from './slug.schema';
import { Model } from 'mongoose';
import { SlugsTransformer } from './slug.transformer';
import { ISlug } from './slug.interface';

@Injectable()
export class SlugRepository {
  constructor(@InjectModel(Slugs.name) private db: Model<Slugs>) {}

  async create(slug: ISlug): Promise<ISlug> {
    const newSlug = (await this.db.create(slug)).toObject();
    return SlugsTransformer.toResponse(newSlug);
  }

  async findOne(slug: string): Promise<ISlug> {
    const document = await this.db.findOne({ slug });
    return document && SlugsTransformer.toResponse(document.toObject());
  }
}
