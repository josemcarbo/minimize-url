import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SlugsDocument = HydratedDocument<Slugs>;

@Schema({ timestamps: true })
export class Slugs {
  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ required: true })
  url: string;
}

export const SlugsSchema = SchemaFactory.createForClass(Slugs);
