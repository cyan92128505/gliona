import React from 'react';
import { useDispatch } from 'react-redux';

import SettingsIcon from '@material-ui/icons/Settings';
import { Button, ButtonGroup, Box, Container, Card, Grid, Typography } from '@material-ui/core';

import { useTranslate, useLocale, useSetLocale, Title } from 'react-admin';
import { setLocale as setLocaleAction } from '../../redux/actions';
import { i18nProxy } from '../../i18n/language_proxy';
import ResetButton from './reset_button';

export const SettingIcon = SettingsIcon;

function SettingList(): JSX.Element {
  const translate = useTranslate();
  const locale = useLocale();
  const setLocale = useSetLocale();
  const dispatch = useDispatch();
  const changeLocale = (Locale: string) => {
    setLocale(Locale);
    dispatch(setLocaleAction(Locale));
  };

  return (
    <Container>
      <Title defaultTitle={translate(i18nProxy.resources.setting.name())} />
      <Box m={2}> </Box>
      <Grid container direction="column" spacing={2}>
        <Grid xs={12} item>
          <Card elevation={4}>
            <Box component="div" m={1} p={1}>
              <Typography variant="h6" component="span">
                {translate(i18nProxy.app.locale.title())}:
              </Typography>
              <ButtonGroup fullWidth variant="text" aria-label="text primary button group">
                <Button color={locale === 'zh' ? 'primary' : 'inherit'} onClick={() => changeLocale('zh')}>
                  {translate(i18nProxy.app.locale.zhTW())}
                </Button>
                <Button color={locale !== 'zh' ? 'primary' : 'inherit'} onClick={() => changeLocale('en')}>
                  {translate(i18nProxy.app.locale.enUS())}
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
          <ResetButton />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SettingList;
