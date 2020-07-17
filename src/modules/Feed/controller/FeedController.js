import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import FeedView from '../view/FeedView';
import SearchContext from '@root/context/SearchContext';
import { getInstDataFromJSON } from '@utils/helpers';

const FeedController = () => {
  const { state } = useContext(SearchContext);
  const [feed, setFeed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { username } = state;

  const getData = () => {
    setIsLoading(true);
    setIsError(false);
    axios
      .get(`https://www.instagram.com/${username}/?__a=1`)
      .then(resp => {
        const userData = resp.data.graphql.user;
        setFeed(getInstDataFromJSON(userData));
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    if (username) getData();
  }, [username]);

  return <FeedView isLoading={isLoading} isError={isError} feed={feed} />;
};

export default FeedController;
