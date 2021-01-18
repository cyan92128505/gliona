import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin';

import { Buyer } from '../../models/buyer';

export const BuyerIcon = PetsIcon;

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

const BuyerList: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid optimized>
        <TextField source={Buyer.propId} />
        <TextField source={Buyer.propName} cellClassName={classes.title} />
        <TextField source={Buyer.propDescription} cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default BuyerList;
