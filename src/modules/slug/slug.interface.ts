import { ObjectId } from 'mongoose';

export interface ISlug {
  id?: ObjectId;
  slug: string;
  url: string;
}
