import { Buyer } from './buyer';
import { BuyerSchema } from './buyer_schema';
import { Post } from './post';
import { Rating } from './rating';
import { RatingType } from './rating_type';

export class MainObject {
  buyerSchemas: BuyerSchema[] = [];
  buyers: Buyer[] = [];
  ratings: Rating[] = [];
  ratingTypes: RatingType[] = [];
  posts: Post[] = [];
}
