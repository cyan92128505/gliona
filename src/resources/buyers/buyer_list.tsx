import { Box, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import React from 'react';
import { Datagrid, List, ListProps, TextField, EditButton, SimpleList, DateField, ShowButton } from 'react-admin';

import { Buyer } from '../../models/repositories/buyer';
import BuyerActions from './buyer_actions';
import BuyerEmpty from './buyer_empty';

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
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <List {...props} actions={<BuyerActions />} empty={<BuyerEmpty />}>
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record[Buyer.propName]}
            secondaryText={(record) => dayjs(record[Buyer.propDatetime]).format('YY/MM/DD')}
            linkType={(_record) => 'show'}
          />
        ) : (
          <Datagrid optimized>
            <TextField source={Buyer.propName} cellClassName={classes.title} />
            <TextField source={Buyer.propDescription} cellClassName={classes.title} />
            <DateField source={Buyer.propDatetime} />
            <ShowButton />
            <EditButton />
          </Datagrid>
        )}
      </List>
      <Box mb={16} />
    </>
  );
};

export default BuyerList;
