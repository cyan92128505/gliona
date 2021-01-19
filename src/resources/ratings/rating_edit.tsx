import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { Rating } from '../../models/repositories/rating';

export const RatingEdit: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={Rating.propId} />
      <TextInput source={Rating.propName} />
      <TextInput source={Rating.propScore} />
    </SimpleForm>
  </Create>
);

export default RatingEdit;
