import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  InputBase,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '3rem',
    [theme.breakpoints.up('xs')]: {
      top: '0rem',
    },
  },
  paper: {
    width: '100%',
    display: 'flex',
    padding: theme.spacing(2),
    justifyItems: 'center',
    alignItems: 'center',
    transition: '0.5s',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      transition: '0.5s',
    },
  },
  margin: {
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(0),
      '&:nth-child(n+2)': {
        marginTop: theme.spacing(0),
      },
    },
  },
  imgContainer: {
    width: '12%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      display: 'flex',
      paddingRight: '0.5rem',
      justifyContent: 'flex-end',
    },
  },
  button: {
    ...theme.typography.body2,
    backgroundColor: theme.palette.common.pink,
    padding: '10px 40px 10px 40px',
    margin: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  linkContainer: {
    marginTop: 40,
  },
  link: {
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 'regular',
    lineHeight: '14px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      margin: theme.spacing(3, 0),
      width: '100%',
    },
    '& .MuiSelect-select.MuiSelect-select': {
      width: '100%',
    },
  },
  input: {
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.common.inputBg,
    border: `1px solid ${theme.palette.common.inputBg}`,
    fontSize: 16,
    padding: '10px 26px 10px 10px',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 8,
      borderColor: theme.palette.common.pink,
    },
  },
}))(InputBase);

const CurrencyConverter = (props) => {
  const classes = useStyles();

  return (
    <Grid item container alignItems='center' className={classes.root}>
      <Grid item xs={12} sm={12} md={9}>
        <Paper elevation={2} className={classes.paper}>
          <FormControl className={classes.margin}>
            <InputLabel
              error={props.error}
              shrink
              id='demo-simple-select-placeholder-label-label'
              htmlFor='demo-customized-textbox'
            >
              {!props.error ? 'Amount' : 'Require numbers'}
            </InputLabel>
            <BootstrapInput
              onChange={props.handleChange}
              name='amount'
              value={props.inputAmount}
              id='demo-customized-textbox'
            />
          </FormControl>
          <FormControl className={classes.margin} error={!props.available}>
            <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
              {!props.available ? 'requires PRO API Package' : 'FROM'}
            </InputLabel>
            <Select
              labelId='demo-customized-select-label'
              id='demo-customized-select'
              name='from'
              onChange={props.handleChange}
              value={props.from}
              input={<BootstrapInput />}
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='EUR'>EUR</MenuItem>
              <MenuItem value='CHF'>CHF</MenuItem>
            </Select>
          </FormControl>
          <Grid
            item
            container
            justify='center'
            className={classes.imgContainer}
          >
            <img
              src='https://gallery-public.s3.eu-central-1.amazonaws.com/switcher.png'
              alt='switcher icon'
            />
          </Grid>
          <FormControl className={classes.margin}>
            <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
              TO
            </InputLabel>
            <Select
              labelId='demo-customized-select-label'
              id='demo-customized-select'
              name='to'
              onChange={props.handleChange}
              value={props.to}
              input={<BootstrapInput />}
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='EUR'>EUR</MenuItem>
              <MenuItem value='CHF'>CHF</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={props.onConfirm}
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Convert
          </Button>
        </Paper>
      </Grid>
      <Grid
        item
        align='right'
        xs={12}
        sm={12}
        md={3}
        className={classes.linkContainer}
      >
        <Link to='/history' className={classes.link}>
          View conversion history &gt;
        </Link>
      </Grid>
    </Grid>
  );
};

export default CurrencyConverter;
