import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search } from 'react-feather';

const SearchBar = ({ isSmall, onEnter }) => {
  const classes = makeStyles(theme => ({
    inputCont: {
      width: '100%',
      backgroundColor: isSmall ? theme.colors.c01 : theme.colors.c02,
      borderRadius: 40,
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
    },
    input: {
      fontFamily: theme.fontFamily,
      fontSize: isSmall ? 18 : 28,
      backgroundColor: isSmall ? theme.colors.c01 : theme.colors.c02,
      color: theme.colors.c05,
      width: '100%',
      border: 0,
      '&:focus': {
        outline: 'none',
      },
    },
    iconSearch: {
      color: theme.colors.c05,
      marginRight: 10,
    },
  }))();

  const onPressEnter = e => {
    if (e.key === 'Enter') {
      onEnter(e.target.value);
    }
  };

  return (
    <div className={classes.inputCont}>
      <Search className={classes.iconSearch} />
      <input className={classes.input} onKeyUp={onPressEnter} />
    </div>
  );
};

SearchBar.defaultProps = {
  isSmall: false,
};

SearchBar.propTypes = {
  isSmall: PropTypes.bool,
  onEnter: PropTypes.func.isRequired,
};

export default SearchBar;
