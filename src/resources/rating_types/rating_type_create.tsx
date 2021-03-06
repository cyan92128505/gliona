import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { RatingType } from '../../models/repositories/rating_type';

export const RatingTypeCreate: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source={RatingType.propId} />
        <TextInput source={RatingType.propName} />
        <TextInput source={RatingType.propBaseNumber} />
      </SimpleForm>
    </Create>
  );
};

export default RatingTypeCreate;
