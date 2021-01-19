import React, { FC } from 'react';
import { Create, CreateProps, EditActionsProps, ListButton, SimpleForm, TextInput, TopToolbar } from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerCreate: React.FC<CreateProps> = (props) => (
  <Create actions={<EditActions />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source={Buyer.propId} />
      <TextInput source={Buyer.propName} />
      <TextInput source={Buyer.propDescription} />
    </SimpleForm>
  </Create>
);
export default BuyerCreate;
