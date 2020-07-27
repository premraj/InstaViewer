import React from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Route, Switch, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import routes from './routes';

const App = () => {
  const theme = useTheme();
  const { push } = useHistory();
  const mqUp800 = useMediaQuery(theme.mq.Up800);
  const mqDown500 = useMediaQuery(theme.mq.Down500);
  const classes = makeStyles({
    container: {
      backgroundColor: theme.colors.c06,
      marginTop: mqDown500 ? 90 : 80,
    },
    contentContainer: {
      padding: mqDown500 ? 15 : '20px 30px',
    },
  })();

  const onEnter = searchTerm => {
    push(`/feed?username=${searchTerm}`);
  };

  return (
    <div className={classes.container}>
      <TopBar onEnter={onEnter} />
      <div className={classes.contentContainer}>
        {!mqUp800 && <SearchBar isSmall onEnter={onEnter} />}
        <Switch>
          {routes.map(({ key, path, component }) => (
            <Route exact key={key} path={path} component={component} />
          ))}
          <Redirect to="/feed" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
