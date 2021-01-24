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
} from 'react-admin';

import SliderNumberInput from '../../components/shared/form/slider_number_input';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerEdit: React.FC<EditProps> = (props) => (
  <Edit actions={<EditActions />} {...props}>
    <SimpleForm redirect="list">
      <TextInput fullWidth source={Buyer.propName} />
      <SliderNumberInput source={Buyer.propInterview} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propVisit} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propVet} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propDiabetic} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propOintment} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propPassenger} type="nubmer" required step={1} min={1} max={10} />
      <SliderNumberInput source={Buyer.propEnvironmental} type="nubmer" required step={1} min={1} max={10} />
      <TextInput fullWidth source={Buyer.propDescription} multiline rows={20} />
      <DateTimeInput fullWidth source={Buyer.propDatetime} />
    </SimpleForm>
  </Edit>
);
export default BuyerEdit;
