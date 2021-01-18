import { RatingType } from './rating_type';

export class Rating {
  id: number;

  name = ``;

  ratingType: RatingType;

  score = 0;

  constructor(id: number, name: string, ratingType: RatingType, score: number) {
    this.id = id;
    this.name = name;
    this.ratingType = ratingType;
    this.score = score;
  }

  static propId = 'id';

  static propName = 'name';

  static propRatingType = 'ratingType';

  static propScore = 'score';
}

export default Rating;
