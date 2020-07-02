import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { useHttpClient } from '../shared/hooks/http-hook';
import HistoryList from '../components/HistotyList';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    paddingTop: 90,
    overflow: 'auto',
    backgroundColor: theme.palette.primary.main,
    '& .MuiTableCell-root': {
      borderBottom: 'transparent',
    },
    '& .MuiPaper-rounded': {
      borderRadius: 8,
    },
  },
  layout: {
    ...theme.maxWidth,
    overflow: 'scroll',
    justifyContent: 'center',
    padding: theme.spacing(4, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 2),
    },
  },
  linkContainer: {
    margin: '20px 0',
  },
  link: {
    cursor: 'pointer',
    fontSize: 12,
    fontWeight: 'regular',
    lineHeight: '14px',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const HistoryPage = () => {
  const classes = useStyles();
  const [loadedData, setLoadedData] = useState();
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    const fetchconvertHistory = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/history'
        );

        setLoadedData(responseData.conversions);
      } catch (err) {}
    };
    fetchconvertHistory();
  }, [sendRequest]);

  return (
    <Grid container className={classes.root}>
      <Grid item container className={classes.layout}>
        <Grid item xs={12} className={classes.linkContainer}>
          <Link color='secondary' to='/' className={classes.link}>
            &lt; Go back
          </Link>
          {loadedData && <HistoryList items={loadedData} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HistoryPage;
