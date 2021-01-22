import React, { ReactEventHandler, FC, ReactElement, SyntheticEvent, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import ActionDelete from '@material-ui/icons/Delete';
import classnames from 'classnames';
import { Button, ButtonProps, Confirm } from 'react-admin';

const defaultIcon = <ActionDelete />;

const useStyles = makeStyles(
  (theme) => ({
    deleteButton: {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: fade(theme.palette.error.main, 0.12),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  }),
  { name: 'RaResetButton' }
);

interface Props {
  classes?: object;
  className?: string;
  confirmTitle?: string;
  confirmContent?: string;
  icon?: ReactElement;
  label?: string;
  onClick?: ReactEventHandler<any>;
}
const ResetButton: FC<ResetButtonProps> = (props) => {
  const {
    classes: classesOverride,
    className,
    confirmTitle = 'ra.message.delete_title',
    confirmContent = 'ra.message.delete_content',
    icon = defaultIcon,
    label = 'ra.action.delete',
    onClick,

    ...rest
  } = props;
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDialogOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(true);
    event.stopPropagation();
  };
  const handleDialogClose = (event: React.MouseEvent<Element, MouseEvent>) => {
    setOpen(false);
    event.stopPropagation();
  };
  const handleDelete = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      if (typeof onClick === 'function') {
        onClick(event);
      }
      handleDialogClose(event);
    },
    [onClick]
  );

  return (
    <>
      <Button
        onClick={handleDialogOpen}
        label={label}
        className={classnames('ra-delete-button', classes.deleteButton, className)}
        key="button"
        {...rest}
      >
        {icon}
      </Button>
      <Confirm
        isOpen={open}
        loading={loading}
        title={confirmTitle}
        content={confirmContent}
        onConfirm={handleDelete}
        onClose={handleDialogClose}
      />
    </>
  );
};

export type ResetButtonProps = Props & ButtonProps;

export default ResetButton;
