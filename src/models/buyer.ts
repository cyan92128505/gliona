import { Rating } from './rating';

export class Buyer {
  id: number;

  name = '';

  ratingTable: Rating[] = [];

  description = '';

  constructor(id: number, name: string, ratingTable: Rating[], description: string) {
    this.id = id;
    this.name = name;
    this.ratingTable = ratingTable;
    this.description = description;
  }
}

export default Buyer;
