import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import routes from './routes';
import SearchContext, { addSearchTerm } from './context/SearchContext';

const App = () => {
  const theme = useTheme();
  const { dispatch } = useContext(SearchContext);
  const mq800Up = useMediaQuery(theme.mq.Up800);
  const mq414Down = useMediaQuery(theme.mq.Down414);
  const classes = makeStyles({
    container: {
      backgroundColor: theme.colors.c06,
    },
    contentContainer: {
      padding: mq414Down ? 15 : '20px 30px',
    },
  })();

  const onEnter = searchTerm => {
    dispatch(addSearchTerm(searchTerm));
  };

  return (
    <div className={classes.container}>
      <TopBar onEnter={onEnter} />
      <div className={classes.contentContainer}>
        {!mq800Up && <SearchBar isSmall onEnter={onEnter} />}
        <BrowserRouter>
          <Switch>
            {routes.map(({ key, path, component }) => (
              <Route exact key={key} path={path} component={component} />
            ))}
            <Redirect to="/feed" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
