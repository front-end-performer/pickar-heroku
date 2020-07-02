import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const moment = require('moment');

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'table-row',
    height: 45,
    lineHeight: '45px',
    textAlign: 'center',
    borderCollapse: 'collapse',
    '&:hover': {
      transition: '0.5s',
      border: `1px solid ${theme.palette.action.hover}`,
    },
  },
  cell: {
    display: 'table-cell',
    width: '30%',
    textAlign: 'left',
    paddingLeft: 80,
    verticalAlign: 'middle',
    backgroundColor: theme.palette.secondary.main,
    '&:first-child': {
      borderRadius: '8px 0 0 8px',
    },
    '&:last-child': {
      borderRadius: '0 8px 8px 0',
    },
    '& > p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
    },
  },
}));

const HistoryItem = ({ date, amount, from, to, result }) => {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <div className={classes.cell}>
        <Typography variant='body2'>
          {moment(date).format('MMMM Do, YYYY')}
        </Typography>
      </div>
      <div className={classes.cell}>
        <Typography variant='body2'>
          {amount.toFixed(2)} {from}
        </Typography>
      </div>
      <div className={classes.cell}>
        <Typography variant='body2'>
          {result && result.toFixed(5)} {to}
        </Typography>
      </div>
    </div>
  );
};

export default HistoryItem;
