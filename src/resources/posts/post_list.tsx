import { makeStyles } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import React from 'react';
import { Datagrid, List, ListProps, TextField } from 'react-admin'; // eslint-disable-line import/no-unresolved

export const PostIcon = BookIcon;

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

const PostList: React.FC<ListProps> = (props) => {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid optimized>
        <TextField source="id" />
        <TextField source="title" cellClassName={classes.title} />
      </Datagrid>
    </List>
  );
};

export default PostList;
