import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  loaderCont: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
});

const FeedView = ({ isLoading, feed }) => {
  const classes = useStyles();
  /* RAJ LOG */ console.log(feed);
  return (
    <>
      {isLoading && (
        <div className={classes.loaderCont}>
          <Loader type="Grid" color="white" width={30} height={30} />
        </div>
      )}
    </>
  );
};

FeedView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  feed: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default FeedView;
