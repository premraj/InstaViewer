import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import { formatUnixDate } from '@utils/helpers';

const InstaCard = ({ profilePic, username, post, onViewComments }) => {
  const theme = useTheme();
  const mqDown500 = useMediaQuery(theme.mq.Down500);
  const classes = makeStyles({
    postCont: {
      margin: mqDown500 ? '10px 0' : 20,
      backgroundColor: theme.colors.c07,
      padding: 10,
    },
    headerCont: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 15,
    },
    headerText: {
      fontFamily: theme.fontFamily,
      color: theme.colors.c05,
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 10,
    },
    imageCont: {
      width: '100%',
      maxHeight: mqDown500 ? 'auto' : 405,
      overflow: 'hidden',
      marginBottom: 15,
    },
    image: {
      width: '100%',
    },
    likes: {
      fontFamily: theme.fontFamily,
      color: theme.colors.c05,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    caption: {
      fontFamily: theme.fontFamily,
      color: theme.colors.c05,
      fontSize: 14,
      marginBottom: 30,
      height: 55,
      overflowY: 'auto',
    },
    date: {
      fontFamily: theme.fontFamily,
      color: theme.colors.c05,
      fontSize: 10,
      marginBottom: 10,
    },
    buttonCont: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      backgroundColor: theme.colors.c04,
      color: theme.colors.c03,
      padding: mqDown500 ? 10 : '5px 8px',
      fontFamily: theme.fontFamily,
      fontSize: mqDown500 ? 18 : 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textAlign: 'center',
      width: mqDown500 ? '100%' : 'auto',
      ...theme.button,
    },
  })();

  return (
    <div className={classes.postCont}>
      <div className={classes.headerCont}>
        <Avatar src={profilePic} />
        <div className={classes.headerText}>{username}</div>
      </div>
      <div className={classes.imageCont}>
        <img className={classes.image} src={post.thumbnail} />
      </div>
      {post.isVideo && <div className={classes.likes}>{post.views} views</div>}
      {!post.isVideo && <div className={classes.likes}>{post.likes} likes</div>}
      <div className={classes.date}>{formatUnixDate(post.timestamp)}</div>
      <div className={classes.caption}>
        <span>{post.caption}</span>
      </div>
      <div className={classes.buttonCont}>
        <div className={classes.button}>View Comments</div>
      </div>
    </div>
  );
};

InstaCard.defaultProps = {
  onViewComments: () => {},
};

InstaCard.propTypes = {
  post: PropTypes.object.isRequired,
  profilePic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onViewComments: PropTypes.func,
};

export default InstaCard;
