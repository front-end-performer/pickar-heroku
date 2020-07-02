import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Spinner from '../shared/UI/Spinner/Spinner';

const useStyles = makeStyles((theme) => ({
  result: {
    paddingLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '26rem',
      alignContent: 'flex-end',
    },
    [theme.breakpoints.up(601)]: {
      paddingTop: '11rem',
      alignContent: 'flex-end',
    },
  },
  span: {
    ...theme.typography.span,
  },
}));

const Result = ({ result, from, to, amount, isLoading }) => {
  const classes = useStyles();

  return (
    <>
      {!result && (
        <Typography variant='h1' color='primary' className={classes.result}>
          {(isLoading && <Spinner />) || '...'}
        </Typography>
      )}
      {result && (
        <Typography
          display='inline'
          variant='h1'
          color='primary'
          className={classes.result}
        >
          <span className={classes.span}>{amount + ' ' + from + ' = '}</span>{' '}
          <br /> {result + ' ' + to}
        </Typography>
      )}
    </>
  );
};

export default Result;
