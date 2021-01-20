import React, { useState } from 'react';
import { makeStyles, Button, Card, CardContent, CardActions, Container, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { Title, useTranslate } from 'react-admin';

import { i18nProxy } from '../../i18n/language_proxy';

import { dataProviderInstance } from '../../providers/data_provider';
import DarwLots from '../../utils/draw_lots';
import { jenniderFlag } from '../../providers/repositories/jennider';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
  },
  item: {
    width: '100%',
  },
}));

type FormData = {
  question: string;
  result: string;
};

function Jennider() {
  const classes = useStyles();
  const translate = useTranslate();
  const [resultRowNumber, setResultRowNumber] = useState(10);

  const { register, handleSubmit, formState, reset, getValues, setValue } = useForm({
    mode: 'onChange',
  });

  const feildName = {
    question: 'question',
    result: 'result',
  };

  const onSubmit = () => {
    const question = getValues(feildName.question);
    const result = DarwLots.Exec(question);
    setValue(feildName.result, result, { shouldValidate: true, shouldDirty: true });
    setResultRowNumber(result.split('\n').length);
    dataProviderInstance.create(jenniderFlag, {
      data: {
        question,
        result,
        datetime: new Date(),
      },
    });
  };

  const clearScanner = () => {
    reset();
  };

  return (
    <div className={classes.container}>
      <Title defaultTitle={translate(i18nProxy.resources.jennider.name())} />
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent>
              <TextField
                label={translate(i18nProxy.resources.jennider.fields.question())}
                name={feildName.question}
                type="text"
                inputRef={register({
                  required: false,
                })}
                fullWidth
              />
              <TextField
                label={translate(i18nProxy.resources.jennider.fields.result())}
                name={feildName.result}
                type="text"
                multiline
                rows={resultRowNumber}
                inputRef={register({
                  required: false,
                })}
                InputLabelProps={{ shrink: formState.dirtyFields.result }}
                fullWidth
              />
            </CardContent>
            <CardActions>
              <Button fullWidth variant="contained" color="primary" type="button" onClick={onSubmit}>
                {translate(i18nProxy.app.draw())}
              </Button>
            </CardActions>
            <CardActions>
              <Button fullWidth variant="contained" type="button" onClick={clearScanner}>
                {translate('ra.action.clear_input_value')}
              </Button>
            </CardActions>
          </Card>
        </form>
      </Container>
    </div>
  );
}

export default Jennider;
