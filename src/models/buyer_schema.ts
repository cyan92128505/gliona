import { RatingType } from './rating_type';
export class BuyerSchema {
  id: number;
  name: string = '';
  ratingList: RatingType[] = [];
  description: string = '';

  constructor(id: number, schemaName: string, ratingList: RatingType[], description: string) {
    this.id = id;
    this.name = schemaName;
    this.ratingList = ratingList;
    this.description = description;
  }
}
