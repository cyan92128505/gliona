import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { RatingType } from '../../models/repositories/rating_type';

export const RatingTypeEdit: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={RatingType.propId} />
      <TextInput source={RatingType.propName} />
      <TextInput source={RatingType.propBaseNumber} />
    </SimpleForm>
  </Create>
);

export default RatingTypeEdit;
