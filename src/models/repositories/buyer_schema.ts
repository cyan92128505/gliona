import { RatingType } from './rating_type';

export class BuyerSchema {
  id: number;

  name = '';

  ratingList: RatingType[] = [];

  description = '';

  constructor(id: number, schemaName: string, ratingList: RatingType[], description: string) {
    this.id = id;
    this.name = schemaName;
    this.ratingList = ratingList;
    this.description = description;
  }

  static propId = 'id';

  static propName = 'name';

  static propRatingList = 'ratingList';

  static propDescription = 'description';
}

export default BuyerSchema;
