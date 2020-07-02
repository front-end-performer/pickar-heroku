import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import HistoryItem from './HistoryItem';
import Card from '../shared/UI/Card/Card';

const useStyles = makeStyles((theme) => ({
  table: {
    display: 'table',
    width: '100%',
    borderSpacing: '0 20px',
  },
  item: {
    display: 'table-row',
    height: 45,
    lineHeight: '45px',
    textAlign: 'center',
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
    '& > span': {
      color: '#a5abb3',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
    },
  },
  itemHead: {
    verticalAlign: 'bottom',
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
  },
  headText: {
    ...theme.typography.span,
    fontSize: 12,
  },
  paddingTop: {
    paddingTop: 40,
  },
}));

const HistoryList = (props) => {
  const classes = useStyles();
  if (props.items.length === 0) {
    return (
      <div className={classes.paddingTop}>
        <Card>
          <h2>No conversions found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className={classes.table}>
      <div className={classes.item}>
        <div className={[classes.cell, classes.itemHead].join(' ')}>
          <Typography className={classes.headText}>Date</Typography>
        </div>
        <div className={[classes.cell, classes.itemHead].join(' ')}>
          <Typography className={classes.headText}>From</Typography>
        </div>
        <div className={[classes.cell, classes.itemHead].join(' ')}>
          <Typography className={classes.headText}>To</Typography>
        </div>
      </div>
      {props.items.map((data) => (
        <HistoryItem
          key={data.id}
          id={data.id}
          date={data.date}
          amount={data.amount}
          from={data.from}
          to={data.to}
          result={data.result}
        />
      ))}
    </div>
  );
};

export default HistoryList;
