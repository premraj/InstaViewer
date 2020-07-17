import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Search } from 'react-feather';
import SearchContext from '@root/context/SearchContext';

const SearchBar = ({ isSmall, onEnter }) => {
  const { state } = useContext(SearchContext);
  const { username } = state;
  const [value, setValue] = useState(username);
  const classes = makeStyles(theme => ({
    inputCont: {
      width: '100%',
      backgroundColor: isSmall ? theme.colors.c01 : theme.colors.c02,
      borderRadius: 40,
      display: 'flex',
      alignItems: 'center',
      padding: isSmall ? '5px 20px' : '10px 20px',
    },
    input: {
      fontFamily: theme.fontFamily,
      fontSize: isSmall ? 16 : 28,
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

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.inputCont}>
      <Search className={classes.iconSearch} />
      <input
        value={value}
        className={classes.input}
        onKeyUp={onPressEnter}
        onChange={onChange}
      />
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
