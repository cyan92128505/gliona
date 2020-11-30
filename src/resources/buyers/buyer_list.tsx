import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin'; // eslint-disable-line import/no-unresolved

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
        <TextField source="id" />
        <TextField source="name" cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default BuyerList;
