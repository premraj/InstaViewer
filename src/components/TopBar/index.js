import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Settings, XCircle } from 'react-feather';
import ThemeContext, { actionSetTheme } from '@root/context/ThemeContext';
import SearchBar from '../SearchBar';

const TopBar = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state: themeContext, dispatch } = useContext(ThemeContext);
  const { theme: selectedTheme } = themeContext;

  const theme = useTheme();
  const mqUp800 = useMediaQuery(theme.mq.Up800);
  const mqDown500 = useMediaQuery(theme.mq.Down500);
  const classes = makeStyles({
    container: {
      height: mqDown500 ? 50 : 80,
      backgroundColor: theme.colors.c01,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: mqDown500 ? 15 : '20px 30px',
    },
    logoFront: {
      fontFamily: theme.fontFamily,
      fontSize: mqDown500 ? 24 : 28,
      fontWeight: 'bold',
      color: theme.colors.c03,
    },
    logoBack: {
      fontFamily: theme.fontFamily,
      fontSize: mqDown500 ? 24 : 28,
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
    drawer: {
      '& .MuiDrawer-paper': {
        width: mqDown500 ? '100%' : 400,
        backgroundColor: theme.colors.c01,
        color: theme.colors.c05,
        padding: 30,
        fontSize: 16,
        fontFamily: theme.fontFamily,
      },
    },
    selectThemeHeader: {
      fontWeight: 'bold',
      fontSize: 28,
    },
    selectThemeCont: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    closeIcon: {
      cursor: 'pointer',
    },
    radio: {
      '& .MuiRadio-root.Mui-checked': {
        color: theme.colors.c04,
      },
      '& .MuiRadio-root': {
        color: theme.colors.c05,
      },
    },
  })();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const setTheme = e => {
    dispatch(actionSetTheme(e.target.value));
  };

  return (
    <div className={classes.container}>
      <div className={classes.logoCont}>
        <span className={classes.logoFront}>INSTA</span>
        <span className={classes.logoBack}>VIEWER</span>
      </div>
      {mqUp800 && (
        <div className={classes.searchCont}>
          <SearchBar onEnter={onEnter} />
        </div>
      )}
      <div className={classes.settingCont}>
        <Settings className={classes.settingIcon} onClick={toggleDrawer} />
        <Drawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
          className={classes.drawer}
        >
          <div className={classes.selectThemeCont}>
            <div className={classes.selectThemeHeader}>Select theme</div>
            <XCircle onClick={toggleDrawer} className={classes.closeIcon} />
          </div>
          <br />
          <br />
          <RadioGroup value={selectedTheme} onChange={setTheme}>
            <FormControlLabel
              value="theme1"
              label="Theme 1"
              control={<Radio />}
              className={classes.radio}
            />
            <FormControlLabel
              value="theme2"
              label="Theme 2"
              control={<Radio />}
              className={classes.radio}
            />
            <FormControlLabel
              value="theme3"
              label="Theme 3"
              control={<Radio />}
              className={classes.radio}
            />
            <FormControlLabel
              value="theme4"
              label="Theme 4"
              control={<Radio />}
              className={classes.radio}
            />
            <FormControlLabel
              value="theme5"
              label="Theme 5"
              control={<Radio />}
              className={classes.radio}
            />
          </RadioGroup>
        </Drawer>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onEnter: PropTypes.func.isRequired,
};

export default TopBar;
