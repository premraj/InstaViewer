import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import FeedView from '../view/FeedView';
import SearchContext from '@root/context/SearchContext';
import { getInstDataFromJSON } from '@utils/helpers';

/**
 * 1. Read from context the feed data
 * 2. if empty, show a message to search for insta username
 * 3. else generate the feed cards
 */

const FeedController = () => {
  const { state } = useContext(SearchContext);
  const [feed, setFeed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { username } = state;

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`https://www.instagram.com/${username}/?__a=1`)
      .then(resp => {
        const userData = resp.data.graphql.user;
        setFeed(getInstDataFromJSON(userData));
        setIsLoading(false);
      })
      .catch(err => {});
  };

  useEffect(() => {
    if (username) getData();
  }, [username]);

  return <FeedView isLoading={isLoading} feed={feed} />;
};

export default FeedController;
