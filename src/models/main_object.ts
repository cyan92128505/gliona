import { Buyer } from './repositories/buyer';
import { BuyerSchema } from './repositories/buyer_schema';
import { Rating } from './repositories/rating';
import { RatingType } from './repositories/rating_type';

export class MainObject {
  buyerSchemas: BuyerSchema[] = [];

  buyers: Buyer[] = [];

  ratings: Rating[] = [];

  ratingTypes: RatingType[] = [];
}

export default MainObject;
