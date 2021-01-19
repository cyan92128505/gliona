import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin';

import { RatingType } from '../../models/repositories/rating_type';

export const RatingIcon = StarBorderIcon;

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

const RatingList: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid optimized>
        <TextField source={RatingType.propId} />
        <TextField source={RatingType.propName} cellClassName={classes.title} />
        <TextField source={RatingType.propBaseNumber} cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default RatingList;
