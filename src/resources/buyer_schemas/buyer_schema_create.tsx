import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { BuyerSchema } from '../../models/repositories/buyer_schema';

export const BuyerSchemaCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source={BuyerSchema.propId} />
      <TextInput source={BuyerSchema.propName} />
      <TextInput source={BuyerSchema.propDescription} />
    </SimpleForm>
  </Create>
);

export default BuyerSchemaCreate;
