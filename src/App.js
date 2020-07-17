import React, { useContext } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import routes from './routes';
import SearchContext, { actionAddSearchTerm } from './context/SearchContext';

const App = () => {
  const theme = useTheme();
  const { dispatch } = useContext(SearchContext);
  const mqUp800 = useMediaQuery(theme.mq.Up800);
  const mqDown500 = useMediaQuery(theme.mq.Down500);
  const classes = makeStyles({
    container: {
      backgroundColor: theme.colors.c06,
    },
    contentContainer: {
      padding: mqDown500 ? 15 : '20px 30px',
    },
    scrollContainer: {
      maxHeight: `calc(100vh - ${mqUp800 ? 120 : 240}px)`,
      overflowY: 'auto',
      marginTop: mqUp800 ? 0 : 15,
    },
  })();

  const onEnter = searchTerm => {
    dispatch(actionAddSearchTerm(searchTerm));
  };

  return (
    <div className={classes.container}>
      <TopBar onEnter={onEnter} />
      <div className={classes.contentContainer}>
        {!mqUp800 && <SearchBar isSmall onEnter={onEnter} />}
        <div className={classes.scrollContainer}>
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
    </div>
  );
};

export default App;
