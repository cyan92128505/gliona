import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

import { Rating } from '../../models/rating';

export const RatingCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source={Rating.propId} />
      <TextInput source={Rating.propName} />
      <TextInput source={Rating.propScore} />
    </SimpleForm>
  </Create>
);

export default RatingCreate;
