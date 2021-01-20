import React, { FC } from 'react';
import {
  DateTimeInput,
  Edit,
  EditActionsProps,
  EditProps,
  ListButton,
  SimpleForm,
  TextInput,
  TopToolbar,
  NumberInput,
} from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerEdit: React.FC<EditProps> = (props) => (
  <Edit actions={<EditActions />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source={Buyer.propName} />
      <NumberInput source={Buyer.propInterview} type="nubmer" required />
      <NumberInput source={Buyer.propVisit} type="nubmer" required />
      <NumberInput source={Buyer.propVet} type="nubmer" required />
      <NumberInput source={Buyer.propDiabetic} type="nubmer" required />
      <NumberInput source={Buyer.propOintment} type="nubmer" required />
      <NumberInput source={Buyer.propPassenger} type="nubmer" required />
      <NumberInput source={Buyer.propEnvironmental} type="nubmer" required />
      <TextInput source={Buyer.propDescription} />
      <DateTimeInput source={Buyer.propDatetime} />
    </SimpleForm>
  </Edit>
);
export default BuyerEdit;
