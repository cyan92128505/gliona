import { RatingType } from './rating_type';

export class BuyerSchema {
  id: number;

  name = '';

  ratingTypeList: RatingType[] = [];

  description = '';

  constructor(id: number, schemaName: string, ratingTypeList: RatingType[], description: string) {
    this.id = id;
    this.name = schemaName;
    this.ratingTypeList = ratingTypeList;
    this.description = description;
  }

  static propId = 'id';

  static propName = 'name';

  static propRatingList = 'ratingTypeList';

  static propDescription = 'description';
}

export default BuyerSchema;
