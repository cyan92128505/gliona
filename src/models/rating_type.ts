export class RatingType {
  name: string = ``;
  baseNumber: number = 1;

  constructor(name: string, baseNumber: number) {
    this.name = name;
    this.baseNumber = baseNumber;
  }
}
