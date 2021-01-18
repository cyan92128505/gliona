export class RatingType {
  id: number;

  name = ``;

  baseNumber = 1;

  constructor(id: number, name: string, baseNumber: number) {
    this.id = id;
    this.name = name;
    this.baseNumber = baseNumber;
  }

  static propId = 'id';

  static propName = 'name';

  static propBaseNumber = 'baseNumber';
}

export default RatingType;
