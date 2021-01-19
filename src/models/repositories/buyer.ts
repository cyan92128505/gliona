import { Rating } from './rating';

export class Buyer {
  id: number;

  name = '';

  schemaId: number;

  ratingTable: Rating[] = [];

  description = '';

  constructor(id: number, name: string, schemaId: number, ratingTable: Rating[], description: string) {
    this.id = id;
    this.name = name;
    this.schemaId = schemaId;
    this.ratingTable = ratingTable;
    this.description = description;
  }

  static propId = 'id';

  static propName = 'name';

  static propSchemaId = 'schemaId';

  static propRatingTable = 'ratingTable';

  static propDescription = 'description';
}

export default Buyer;
