import React from 'react';
import { Edit, EditProps, SimpleForm, TextInput } from 'react-admin';

import { BuyerSchema } from '../../models/repositories/buyer_schema';

export const BuyerSchemaEdit: React.FC<EditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source={BuyerSchema.propId} />
      <TextInput source={BuyerSchema.propName} />
      <TextInput source={BuyerSchema.propDescription} />
    </SimpleForm>
  </Edit>
);

export default BuyerSchemaEdit;
