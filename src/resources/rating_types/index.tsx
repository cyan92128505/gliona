import RatingTypeList, { RatingIcon as RatingTypeIcon } from './rating_type_list';

import { RatingTypeCreate } from './rating_type_create';
import { RatingTypeEdit } from './rating_type_edit';

const RatingTypeResource = {
  name: 'RatingType',
  list: RatingTypeList,
  icon: RatingTypeIcon,
  edit: RatingTypeEdit,
  create: RatingTypeCreate,
};

export default RatingTypeResource;
