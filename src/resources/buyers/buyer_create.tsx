import React, { FC } from 'react';
import {
  Create,
  CreateProps,
  EditActionsProps,
  ListButton,
  SimpleForm,
  TextInput,
  TopToolbar,
  DateTimeInput,
  NumberInput,
} from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerCreate: React.FC<CreateProps> = (props) => (
  <Create actions={<EditActions />} {...props}>
    <SimpleForm redirect="list">
      <TextInput source={Buyer.propName} required />
      <NumberInput source={Buyer.propInterview} type="nubmer" required />
      <NumberInput source={Buyer.propVisit} type="nubmer" required />
      <NumberInput source={Buyer.propVet} type="nubmer" required />
      <NumberInput source={Buyer.propDiabetic} type="nubmer" required />
      <NumberInput source={Buyer.propOintment} type="nubmer" required />
      <NumberInput source={Buyer.propPassenger} type="nubmer" required />
      <NumberInput source={Buyer.propEnvironmental} type="nubmer" required />
      <TextInput source={Buyer.propDescription} />
      <DateTimeInput source={Buyer.propDatetime} initialValue={new Date()} />
    </SimpleForm>
  </Create>
);
export default BuyerCreate;
