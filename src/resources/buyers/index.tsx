import BuyerList, { BuyerIcon } from './buyer_list';

import { BuyerCreate } from './buyer_create';
import { BuyerEdit } from './buyer_edit';
import { BuyerShow } from './buyer_show';
import { Buyer } from '../../models/repositories/buyer';

const BuyerResource = {
  name: Buyer.resourceName,
  list: BuyerList,
  icon: BuyerIcon,
  create: BuyerCreate,
  edit: BuyerEdit,
  show: BuyerShow,
};

export default BuyerResource;
