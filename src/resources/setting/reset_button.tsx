import React, { ReactEventHandler, FC, ReactElement, useState, useCallback } from 'react';
import ActionDelete from '@material-ui/icons/Delete';
import { Button, ButtonProps, Confirm } from 'react-admin';
import { Box } from '@material-ui/core';
import { i18nProxy } from '../../i18n/language_proxy';

const defaultIcon = <ActionDelete />;
interface Props {
  classes?: object;
  className?: string;
  confirmContent?: string;
  icon?: ReactElement;
  label?: string;
  onClick?: ReactEventHandler<any>;
}
const ResetButton: FC<ResetButtonProps> = (props) => {
  const {
    classes: classesOverride,
    className,
    confirmContent = i18nProxy.app.allowReset(),
    icon = defaultIcon,
    label = i18nProxy.app.reset(),
    onClick,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);

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
      localStorage.clear();
      if (typeof onClick === 'function') {
        onClick(event);
      }
      handleDialogClose(event);
    },
    [onClick]
  );

  return (
    <Box mt={2}>
      <Button fullWidth variant="outlined" size="large" onClick={handleDialogOpen} label={label} key="button" {...rest}>
        {icon}
      </Button>
      <Confirm
        isOpen={open}
        loading={false}
        title={label}
        content={confirmContent}
        onConfirm={handleDelete}
        onClose={handleDialogClose}
      />
    </Box>
  );
};

export type ResetButtonProps = Props & ButtonProps;

export default ResetButton;
