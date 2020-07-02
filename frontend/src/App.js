import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';

import Spinner from './shared/UI/Spinner/Spinner';
import Header from './shared/Header';

const AsyncLandingPage = lazy(() => import('./pages/LandingPage'));
const AsyncHistory = lazy(() => import('./pages/HistoryPage'));

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Spinner />}>
          <Header />
          <Switch>
            <Route exact path='/' component={AsyncLandingPage} />
            <Route exact path='/history' component={AsyncHistory} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
