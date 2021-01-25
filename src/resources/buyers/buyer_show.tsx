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
  RichTextField,
} from 'react-admin';
import { Radar } from 'react-chartjs-2';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { CustomTheme } from '../../theme/custom_theme';
import { i18nProxy } from '../../i18n/language_proxy';
import { Buyer } from '../../models/repositories/buyer';
import { TextUtils } from '../../utils/text_utils';
import LocationInput from '../../components/shared/form/location_input';

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

  const processRecord = record as Buyer;
  processRecord.description = processRecord?.description.replaceAll('\n', '<br />');

  return (
    <SimpleForm redirect="list" {...props}>
      <TextField fullWidth source={Buyer.propName} />
      <Radar data={data} options={options} />
      <RichTextField fullWidth record={processRecord} source={Buyer.propDescription} />
      {children}
    </SimpleForm>
  );
};

export const BuyerShow: React.FC<ShowProps> = (props) => {
  const { resource } = props;

  return (
    <Show title={<PostTitle />} actions={<ShowActions />} {...props}>
      <CustomShowForms>
        <DateField fullWidth source={Buyer.propDatetime} />
        <LocationInput
          resource={`${resource}`}
          sourceLocationX={Buyer.propLocationX}
          sourceLocationY={Buyer.propLocationY}
          isEdit={false}
        />
      </CustomShowForms>
    </Show>
  );
};
export default BuyerShow;
