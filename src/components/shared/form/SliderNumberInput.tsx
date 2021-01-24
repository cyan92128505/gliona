/* eslint-disable no-restricted-globals */
import * as React from 'react';
import { FunctionComponent, useCallback } from 'react';
import { SlideProps } from '@material-ui/core/Slide';
import { useInput, FieldTitle, InputProps } from 'ra-core';
import { Box, createStyles, makeStyles, Slider, Theme } from '@material-ui/core';

const convertStringToNumber = (value: string) => {
  const float = parseFloat(value);

  return isNaN(float) ? 0 : float;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
    },
  })
);

const useMarks = (max: number) => {
  return Array(max)
    .fill('V')
    .map((_, i) => ({
      value: i + 1,
      label: max === i + 1 ? `MAX` : `${i + 1}`,
    }));
};

function valuetext(value: number) {
  return `${value}`;
}

const SliderNumberInput: FunctionComponent<SliderNumberInputProps> = ({
  format,
  helperText,
  label,
  margin = 'dense',
  onBlur,
  onFocus,
  onChange,
  options,
  parse = convertStringToNumber,
  resource,
  source,
  step,
  min,
  max,
  validate,
  variant = 'filled',
  inputProps: overrideInputProps,
  ...rest
}) => {
  const classes = useStyles();
  const {
    id,
    input: { onChange: finalFormOnChange, ...input },
    isRequired,
  } = useInput({
    format,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    type: 'number',
    validate,
    ...rest,
  });
  const value = convertStringToNumber(input.value);
  const marks = useMarks(max);

  const handleChange = useCallback(
    (_: any, newValue: number | number[]) => {
      finalFormOnChange(newValue);
    },
    [finalFormOnChange]
  );
  return (
    <Box className={classes.root} mb={2}>
      <FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />
      <Slider
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        id={id}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
};

export interface SliderNumberInputProps
  extends InputProps<SlideProps>,
    Omit<SlideProps, 'label' | 'helperText' | 'onChange' | 'onBlur' | 'onFocus' | 'defaultValue'> {
  step: number;
  min: number;
  max: number;
}

export default SliderNumberInput;
