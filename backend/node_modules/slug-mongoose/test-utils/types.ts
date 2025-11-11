import { Document, Model } from "mongoose";

export interface MyModelDocument extends Document {
  name?: string;
  slug?: string;
}

export interface CustomModel extends Model<MyModelDocument> {
  findBySlug(slug: string): Promise<MyModelDocument | null>;
}
