import * as React from 'react';
import { FC, useRef } from 'react';
import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
  ListActionsProps,
  useTranslate,
  useRefresh,
  useNotify,
  useUnselectAll,
} from 'react-admin';
import PublishIcon from '@material-ui/icons/Publish';
import { i18nProxy } from '../../i18n/language_proxy';
import { dataProviderInstance } from '../../providers/data_provider';
import { Buyer } from '../../models/repositories/buyer';

export const ImportBuyerButton: FC = (props) => {
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const translate = useTranslate();

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!!event && !!event.target && !!event.target.files && event.target.files.length > 0) {
      const fileUploaded = event.target.files[0];
      const reader = new FileReader();
      reader.onload = async function (file) {
        let rawTable = `${file?.target?.result}`.split('\n');
        rawTable = rawTable.slice(1);

        const result = await Promise.all(
          rawTable.map(async (rawRow) => {
            const valueArray = rawRow.split(',');

            const buyerTerm = {
              name: valueArray[0],
              description: '',
              interview: valueArray[1],
              visit: valueArray[2],
              vet: valueArray[3],
              diabetic: valueArray[4],
              ointment: valueArray[5],
              passenger: valueArray[6],
              environmental: valueArray[7],
              datetime: new Date(),
            };
            const v = await dataProviderInstance.create(Buyer.resourceName, {
              data: buyerTerm,
            });

            return v;
          })
        );

        refresh();
        notify('Posts updated');
        unselectAll(Buyer.resourceName);
      };

      reader.readAsText(fileUploaded);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          hiddenFileInput?.current?.click();
        }}
        label={translate(i18nProxy.app.import())}
      >
        <PublishIcon />
      </Button>
      <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
    </>
  );
};

const BuyerActions: FC<ListActionsProps> = (props) => {
  const { currentSort, resource, filterValues, basePath, total } = useListContext();
  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      <CreateButton basePath={basePath} />
      <ExportButton disabled={total === 0} resource={resource} sort={currentSort} filterValues={filterValues} />
      <ImportBuyerButton {...props} />
    </TopToolbar>
  );
};

export default BuyerActions;
