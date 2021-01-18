import { makeStyles } from '@material-ui/core/styles';
import CategorySharpIcon from '@material-ui/icons/CategorySharp';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin';

import { BuyerSchema } from '../../models/buyer_schema';

export const BuyerIcon = CategorySharpIcon;

const useStyles = makeStyles((theme) => ({
  title: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  hiddenOnSmallScreens: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  publishedAt: { fontStyle: 'italic' },
}));

const BuyerSchemaList: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid optimized>
        <TextField source={BuyerSchema.propId} />
        <TextField source={BuyerSchema.propName} cellClassName={classes.title} />
        <TextField source={BuyerSchema.propDescription} cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default BuyerSchemaList;
