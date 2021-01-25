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
} from 'react-admin';
import LocationInput from '../../components/shared/form/location_input';
import SliderNumberInput from '../../components/shared/form/slider_number_input';

import { Buyer } from '../../models/repositories/buyer';

const EditActions: FC<EditActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

export const BuyerCreate: React.FC<CreateProps> = (props) => {
  const { resource } = props;

  return (
    <Create actions={<EditActions />} {...props}>
      <SimpleForm redirect="list">
        <TextInput fullWidth source={Buyer.propName} required />
        <SliderNumberInput source={Buyer.propInterview} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propVisit} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propVet} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propDiabetic} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propOintment} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propPassenger} type="nubmer" required step={1} min={1} max={10} />
        <SliderNumberInput source={Buyer.propEnvironmental} type="nubmer" required step={1} min={1} max={10} />
        <TextInput fullWidth source={Buyer.propDescription} multiline rows={20} />
        <DateTimeInput fullWidth source={Buyer.propDatetime} initialValue={new Date()} />
        <LocationInput
          resource={`${resource}`}
          sourceLocationX={Buyer.propLocationX}
          sourceLocationY={Buyer.propLocationY}
          isEdit
        />
      </SimpleForm>
    </Create>
  );
};
export default BuyerCreate;
