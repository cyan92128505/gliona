import * as React from 'react';
import { FC, cloneElement, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  Button,
  sanitizeListRestProps,
  ListActionsProps,
  useTranslate,
} from 'react-admin';
import PublishIcon from '@material-ui/icons/Publish';
import { i18nProxy } from '../../i18n/language_proxy';

const BuyerActions: FC<ListActionsProps> = (props) => {
  const { currentSort, resource, filterValues, basePath, total } = useListContext();

  const translate = useTranslate();

  return (
    <TopToolbar {...sanitizeListRestProps(props)}>
      <CreateButton basePath={basePath} />
      <ExportButton disabled={total === 0} resource={resource} sort={currentSort} filterValues={filterValues} />
      {/* Add your custom actions */}
      <Button
        onClick={() => {
          alert('Your custom action');
        }}
        label={translate(i18nProxy.app.import())}
      >
        <PublishIcon />
      </Button>
    </TopToolbar>
  );
};

export default BuyerActions;
