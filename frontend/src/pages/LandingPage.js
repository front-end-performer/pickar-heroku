import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import HeadShake from 'react-reveal/HeadShake';

import { useHttpClient } from '../shared/hooks/http-hook';
import CurrencyConverter from '../components/CurrencyConverter';
import Result from '../components/Result';

const useStyles = makeStyles((theme) => ({
  root: {},
  converterSection: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
  },
  layout: {
    ...theme.maxWidth,
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2, '90px', 2),
    },
  },
  headLineContainer: {
    marginTop: 40,
    paddingBottom: 40,
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 40,
    },
  },
  headline: {
    ...theme.typography.h1,
    paddingTop: 90,
    [theme.breakpoints.down(375)]: {
      fontSize: '1.7rem',
    },
  },
  formContainer: {
    position: 'relative',
  },
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

const LandinPage = () => {
  const classes = useStyles();
  const [inputAmount, setInputAmount] = useState('');
  const [error, setError] = useState(false);
  const [available, setAvailable] = useState(true);
  const { isLoading, sendRequest } = useHttpClient();
  const [result, setResult] = useState();

  const [input, setInput] = useState({
    from: '',
    to: '',
  });

  const validation = (str) => {
    const match = str.match(/^-?\d*\.?\d*$/);
    const isArray = Array.isArray(match);
    if (isArray) return match.map(Number);
    return false;
  };

  const handleChange = (evt) => {
    let valid;
    const value = evt.target.value;
    const name = evt.target.name;
    switch (evt.target.name) {
      case 'amount':
        setInputAmount(evt.target.value);
        valid = validation(evt.target.value);

        if (valid) {
          setInputAmount(evt.target.value);
          setError(false);
        } else {
          setError(true);
          setInputAmount('');
        }
        break;
      case 'from':
        setInput(evt.target.value);
        if (evt.target.value === 'CHF') {
          setAvailable(false);
        } else {
          setAvailable(true);
        }
        break;
      default:
        break;
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onConfirm = async (e) => {
    e.preventDefault();

    try {
      const getData = await sendRequest(
        `https://v6.exchangerate-api.com/v6/0559f58491a3a244833cc16b/latest/${input.from}`,
        'POST',
        {
          'Content-Type': 'application/json',
        }
      );
      let result;

      for (let key in getData.conversion_rates) {
        if (key === input.to) {
          result = inputAmount * getData.conversion_rates[key];
        }
      }

      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/conversions/convert',
          'POST',
          JSON.stringify({
            amount: inputAmount,
            from: input.from,
            to: input.to,
            result: result,
          }),
          {
            'Content-Type': 'application/json',
          }
        );
      } catch (err) {
        console.log(err);
      }
      setResult(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid container name='main' className={classes.root}>
      <Grid item container className={classes.converterSection}>
        <Grid item container className={classes.layout} name='converter'>
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
            <HeadShake when={!available}>
              <CurrencyConverter
                handleChange={handleChange}
                onConfirm={onConfirm}
                error={error}
                available={available}
                inputAmount={inputAmount}
                from={input.from}
                to={input.to}
              />
            </HeadShake>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.layout} name='result'>
        <Result
          result={result}
          isLoading={isLoading}
          from={input.from}
          to={input.to}
          amount={inputAmount}
        />
      </Grid>
    </Grid>
  );
};

export default LandinPage;
