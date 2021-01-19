import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';

export const BuyerEdit: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source={Buyer.propId} />
      <TextInput source={Buyer.propName} />
      <TextInput source={Buyer.propDescription} />
    </SimpleForm>
  </Create>
);
export default BuyerEdit;
