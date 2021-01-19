import React from 'react';
import { Edit, EditProps, SimpleForm, TextInput } from 'react-admin';

import { RatingType } from '../../models/repositories/rating_type';

export const RatingTypeEdit: React.FC<EditProps> = (props) => (
  <Edit {...props}>
    <SimpleForm redirect="list">
      <TextInput source={RatingType.propId} />
      <TextInput source={RatingType.propName} />
      <TextInput source={RatingType.propBaseNumber} />
    </SimpleForm>
  </Edit>
);

export default RatingTypeEdit;
