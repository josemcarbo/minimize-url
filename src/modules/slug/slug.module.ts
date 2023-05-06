import { Module } from '@nestjs/common';
import { SlugController } from './slug.controller';
import { SlugService } from './slug.service';
import { SlugRepository } from './slug.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Slugs, SlugsSchema } from './slug.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Slugs.name, schema: SlugsSchema }]),
  ],
  controllers: [SlugController],
  providers: [SlugService, SlugRepository],
  exports: [SlugService],
})
export class SlugModule {}
