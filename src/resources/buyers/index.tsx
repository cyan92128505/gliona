import BuyerList, { BuyerIcon } from './buyer_list';

import { BuyerCreate } from './buyer_create';
import { BuyerEdit } from './buyer_edit';

const BuyerResource = {
  name: 'Buyer',
  list: BuyerList,
  icon: BuyerIcon,
  create: BuyerCreate,
  edit: BuyerEdit,
};

export default BuyerResource;
