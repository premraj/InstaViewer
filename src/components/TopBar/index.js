import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Settings } from 'react-feather';
import SearchBar from '../SearchBar';

const TopBar = () => {
  const theme = useTheme();
  const mq800Up = useMediaQuery(theme.mq.Up800);
  const mq414Down = useMediaQuery(theme.mq.Down414);
  const classes = makeStyles(() => ({
    container: {
      height: 80,
      backgroundColor: theme.colors.c01,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: mq414Down ? 15 : '20px 30px',
    },
    logoFront: {
      fontFamily: theme.fontFamily,
      fontSize: mq414Down ? 24 : 28,
      fontWeight: 'bold',
      color: theme.colors.c03,
    },
    logoBack: {
      fontFamily: theme.fontFamily,
      fontSize: mq414Down ? 24 : 28,
      fontWeight: 'bold',
      color: theme.colors.c04,
    },
    settingIcon: {
      color: theme.colors.c04,
      cursor: 'pointer',
    },
    logoCont: {
      width: '33%',
      display: 'flex',
      justifyContent: 'flex-start',
    },
    searchCont: {
      width: '33%',
      display: 'flex',
      justifyContent: 'center',
    },
    settingCont: {
      width: '33%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }))();

  return (
    <div className={classes.container}>
      <div className={classes.logoCont}>
        <span className={classes.logoFront}>INSTA</span>
        <span className={classes.logoBack}>VIEWER</span>
      </div>
      {mq800Up && (
        <div className={classes.searchCont}>
          <SearchBar />
        </div>
      )}
      <div className={classes.settingCont}>
        <Settings className={classes.settingIcon} />
      </div>
    </div>
  );
};

export default TopBar;
