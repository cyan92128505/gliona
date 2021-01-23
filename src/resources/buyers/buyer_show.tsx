import React, { FC } from 'react';
import {
  Show,
  ShowActionsProps,
  ShowProps,
  ListButton,
  SimpleForm,
  TextField,
  TopToolbar,
  DateField,
  useTranslate,
  SimpleFormProps,
  EditButton,
} from 'react-admin';
import { Radar } from 'react-chartjs-2';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { CustomTheme } from '../../theme/custom_theme';
import { i18nProxy } from '../../i18n/language_proxy';
import { Buyer } from '../../models/repositories/buyer';
import { TextUtils } from '../../utils/text_utils';

interface ShowRecordProps extends SimpleFormProps {
  record?: Buyer;
}

type ShowTitleProps = {
  record?: Buyer;
};

const PostTitle: FC<ShowTitleProps> = ({ record }) => {
  const translate = useTranslate();
  const titleText = TextUtils.SplitResourceName(translate(i18nProxy.resources.buyer.name()));
  return (
    <span>
      {titleText} {record ? `${record.name}` : ''}
    </span>
  );
};

const ShowActions: FC<ShowActionsProps> = ({ basePath, data }) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
    <ListButton basePath={basePath} record={data} />
  </TopToolbar>
);

const CustomShowForms: FC<ShowRecordProps> = (props) => {
  const { children, record } = props;
  const translate = useTranslate();
  const data = {
    labels: [
      translate(i18nProxy.resources.buyer.fields.interview()),
      translate(i18nProxy.resources.buyer.fields.visit()),
      translate(i18nProxy.resources.buyer.fields.vet()),
      translate(i18nProxy.resources.buyer.fields.diabetic()),
      translate(i18nProxy.resources.buyer.fields.ointment()),
      translate(i18nProxy.resources.buyer.fields.passenger()),
      translate(i18nProxy.resources.buyer.fields.environmental()),
    ],
    datasets: [
      {
        label: TextUtils.SplitResourceName(translate(i18nProxy.resources.buyer.name())),
        data: [
          record?.interview,
          record?.visit,
          record?.vet,
          record?.diabetic,
          record?.ointment,
          record?.passenger,
          record?.environmental,
        ],
        backgroundColor: fade(CustomTheme.palette.primary.light, 0.2),
        borderColor: CustomTheme.palette.primary.light,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, stepSize: 1 },
    },
  };

  return (
    <SimpleForm redirect="list" {...props}>
      <TextField source={Buyer.propName} />
      <Radar data={data} options={options} />
      {children}
    </SimpleForm>
  );
};

export const BuyerShow: React.FC<ShowProps> = (props) => {
  return (
    <Show title={<PostTitle />} actions={<ShowActions />} {...props}>
      <CustomShowForms>
        <TextField source={Buyer.propDescription} />
        <DateField source={Buyer.propDatetime} />
      </CustomShowForms>
    </Show>
  );
};
export default BuyerShow;
