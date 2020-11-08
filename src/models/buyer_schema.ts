import { RatingType } from './rating_type';
export class BuyerSchema {
  name: string = '';
  ratingList: RatingType[] = [];
  description: string = '';

  constructor(schemaName: string, ratingList: RatingType[], description: string) {
    this.name = schemaName;
    this.ratingList = ratingList;
    this.description = description;
  }
}
