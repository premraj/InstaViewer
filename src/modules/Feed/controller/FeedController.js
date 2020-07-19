import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import FeedView from '../view/FeedView';
import _isEmpty from 'lodash/isEmpty';
import { getInstDataFromJSON, parseQueryString } from '@utils/helpers';

const FeedController = () => {
  const { search } = useLocation();
  const [feed, setFeed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = username => {
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
    if (!_isEmpty(search)) {
      const { username } = parseQueryString(search);
      if (username) getData(username);
    }
  }, [search]);

  return <FeedView isLoading={isLoading} isError={isError} feed={feed} />;
};

export default FeedController;
