import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin'; // eslint-disable-line import/no-unresolved

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
        <TextField source="id" />
        <TextField source="name" cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default RatingList;
