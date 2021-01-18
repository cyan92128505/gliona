import React from 'react';
import { Create, CreateProps, SimpleForm, TextInput } from 'react-admin';

export const RatingTypeCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="baseNumber" />
    </SimpleForm>
  </Create>
);
export default RatingTypeCreate;
