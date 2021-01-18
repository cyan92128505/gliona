import RatingList, { RatingIcon } from './rating_list';

import { RatingCreate } from './rating_create';
import { RatingEdit } from './rating_edit';

const RatingResource = {
  name: 'rating',
  list: RatingList,
  icon: RatingIcon,
  create: RatingCreate,
  edit: RatingEdit,
};

export default RatingResource;
