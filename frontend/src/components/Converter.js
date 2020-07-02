import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import CurrencyConverter from './CurrencyConverter';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: '6rem',
    [theme.breakpoints.down(815)]: {
      paddingBottom: '5rem',
    },
    [theme.breakpoints.up(816)]: {
      paddingBottom: '8rem',
    },
  },
  layout: {
    ...theme.maxWidth,
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    },
  },
  headLineContainer: {
    marginTop: 123,
  },
  headline: {
    ...theme.typography.h1,
    [theme.breakpoints.down(375)]: {
      fontSize: '1.3rem',
    },
  },
  formContainer: {
    position: 'relative',
  },
}));

const Converter = ({
  handleChange,
  onConfirm,
  error,
  inputAmount,
  from,
  to,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item container className={classes.layout}>
        <Grid item xs={12} className={classes.headLineContainer}>
          <Typography
            align='left'
            color='secondary'
            variant='h1'
            className={classes.headline}
          >
            Convert currencies in real-time.
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.formContainer}>
          <CurrencyConverter
            handleChange={handleChange}
            onConfirm={onConfirm}
            error={error}
            inputAmount={inputAmount}
            from={from}
            to={to}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Converter;
