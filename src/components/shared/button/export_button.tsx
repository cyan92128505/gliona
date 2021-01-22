import * as React from 'react';
import { useCallback, FunctionComponent } from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';
import {
  fetchRelatedRecords,
  useDataProvider,
  useNotify,
  useListContext,
  SortPayload,
  Exporter,
  FilterPayload,
  useResourceContext,
} from 'ra-core';
import { Button, ButtonProps } from 'react-admin';

const defaultIcon = <DownloadIcon />;

const sanitizeRestProps = ({
  basePath,
  filterValues,
  resource,
  ...rest
}: Omit<ExportButtonProps, 'sort' | 'maxResults' | 'label' | 'exporter'>) => rest;

interface Props {
  basePath?: string;
  exporter?: Exporter;
  filterValues?: FilterPayload;
  icon?: JSX.Element;
  label?: string;
  maxResults?: number;
  onClick?: (e: Event) => void;
  resource?: string;
  sort?: SortPayload;
}

const ExportButton: FunctionComponent<ExportButtonProps> = (props) => {
  const {
    maxResults = 1000,
    onClick,
    label = 'ra.action.export',
    icon = defaultIcon,
    exporter: customExporter,
    sort, // deprecated, to be removed in v4
    ...rest
  } = props;
  const { filter, filterValues, currentSort, exporter: exporterFromContext, total } = useListContext(props);
  const resource = useResourceContext(props);
  const exporter = customExporter || exporterFromContext;
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const handleClick = useCallback(
    (event) => {
      dataProvider
        .getList(resource, {
          sort: currentSort || sort,
          filter: filter ? { ...filterValues, ...filter } : filterValues,
          pagination: { page: 1, perPage: maxResults },
        })
        .then(({ data }) => exporter && exporter(data, fetchRelatedRecords(dataProvider), dataProvider, resource))
        .catch((error) => {
          notify('ra.notification.http_error', 'warning');
        });
      if (typeof onClick === 'function') {
        onClick(event);
      }
    },
    [currentSort, dataProvider, exporter, filter, filterValues, maxResults, notify, onClick, resource, sort]
  );

  return (
    <Button onClick={handleClick} label={label} disabled={total === 0} {...sanitizeRestProps(rest)}>
      {icon}
    </Button>
  );
};

export type ExportButtonProps = Props & ButtonProps;

export default ExportButton;
