/* eslint-disable react/prop-types */
import React, { FC } from 'react';
import { Edit, EditActionsProps, EditProps, ListButton, SimpleForm, TextInput, TopToolbar } from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerEdit: React.FC<EditProps> = (props) => (
  <Edit actions={<EditActions />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source={Buyer.propId} />
      <TextInput source={Buyer.propName} />
      <TextInput source={Buyer.propDescription} />
    </SimpleForm>
  </Edit>
);
export default BuyerEdit;
