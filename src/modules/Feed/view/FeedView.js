import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import Loader from 'react-loader-spinner';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import InstaCard from '@root/components/InstaCard';

const useStyles = makeStyles(theme => ({
  loaderCont: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 15,
  },
  emptyMessage: {
    color: theme.colors.c05,
    fontFamily: theme.fontFamily,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
  privateUser: {
    color: theme.colors.c05,
    fontFamily: theme.fontFamily,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    '& span': {
      fontWeight: 'bold',
    },
  },
}));

const FeedView = ({ isLoading, isError, feed }) => {
  const classes = useStyles();
  return (
    <>
      {isLoading && (
        <div className={classes.loaderCont}>
          <Loader type="Grid" color="white" width={30} height={30} />
        </div>
      )}
      {!isLoading && isError && (
        <div className={classes.emptyMessage}>
          Oops. Profile does not exist.
        </div>
      )}
      {!isLoading && _isEmpty(feed) && !isError && (
        <div className={classes.emptyMessage}>
          Please search for a username above and hit enter.
        </div>
      )}
      {!isLoading && !_isEmpty(feed) && !isError && feed.isPrivate && (
        <div className={classes.privateUser}>
          Oops. Instagram user <span>{feed.username}</span> profile is set to
          private.
        </div>
      )}
      {!isLoading && !_isEmpty(feed) && !isError && !feed.isPrivate && (
        <Grid container>
          {feed.data.map(f => (
            <Grid item key={f.shortcode} xs={12} md={6} lg={3}>
              <InstaCard
                profilePic={feed.profilePic}
                username={feed.username}
                post={f}
                onViewComments={() => {}}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

FeedView.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  feed: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default FeedView;
