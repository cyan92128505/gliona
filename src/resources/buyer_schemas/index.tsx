import BuyerSchemaList, { BuyerIcon as BuyerSchemaIcon } from './buyer_schema_list';

import { BuyerSchemaCreate } from './buyer_schema_create';
import { BuyerSchemaEdit } from './buyer_schema_edit';

const BuyerSchemaResource = {
  name: 'BuyerSchema',
  list: BuyerSchemaList,
  icon: BuyerSchemaIcon,
  create: BuyerSchemaCreate,
  edit: BuyerSchemaEdit,
};

export default BuyerSchemaResource;
