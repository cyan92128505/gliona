import { Rating } from './rating';

export class Buyer {
  name: string = '';
  ratingTable: Rating[] = [];
  description: string = '';

  constructor(name: string, ratingTable: Rating[], description: string) {
    this.name = name;
    this.ratingTable = ratingTable;
    this.description = description;
  }
}
