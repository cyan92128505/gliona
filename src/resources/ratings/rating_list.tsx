import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin';

import { Rating } from '../../models/rating';

export const RatingIcon = GradeIcon;

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
        <TextField source={Rating.propId} />
        <TextField source={Rating.propName} cellClassName={classes.title} />
        <TextField source={Rating.propScore} cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default RatingList;
