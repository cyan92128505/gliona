export class RatingType {
  id: number;
  name: string = ``;
  baseNumber: number = 1;

  constructor(id: number, name: string, baseNumber: number) {
    this.id = id;
    this.name = name;
    this.baseNumber = baseNumber;
  }
}
