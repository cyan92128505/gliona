import { RatingType } from './rating_type';

export class Rating {
  name: string = ``;
  ratingType: RatingType;
  score: number = 0;

  constructor(name: string, ratingType: RatingType, score: number) {
    this.name = name;
    this.ratingType = ratingType;
    this.score = score;
  }
}
