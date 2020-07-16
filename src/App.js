import React, { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';

const App = () => {
  const theme = useTheme();
  const mq800Up = useMediaQuery(theme.mq.Up800);
  const mq414Down = useMediaQuery(theme.mq.Down414);
  const classes = makeStyles(() => ({
    container: {
      backgroundColor: theme.colors.c06,
    },
    contentContainer: {
      padding: mq414Down ? 15 : '20px 30px',
    },
  }))();

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = 'theme1';
  }, []);

  return (
    <div className={classes.container}>
      <TopBar />
      <div className={classes.contentContainer}>
        {!mq800Up && <SearchBar isSmall />}
      </div>
    </div>
  );
};

export default App;
