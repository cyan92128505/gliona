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
import SliderNumberInput from '../../components/shared/form/SliderNumberInput';

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
      <SliderNumberInput source={Buyer.propInterview} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propVisit} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propVet} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propDiabetic} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propOintment} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propPassenger} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propEnvironmental} type="nubmer" required step={1} min={1} max={10} />
      <TextInput source={Buyer.propDescription} />
      <DateTimeInput source={Buyer.propDatetime} initialValue={new Date()} />
    </SimpleForm>
  </Create>
);
export default BuyerCreate;
