import moment from 'moment';

export const getInstDataFromJSON = json => {
  return {
    username: json.username,
    profilePic: json.profile_pic_url,
    isPrivate: json.is_private,
    data: json.edge_owner_to_timeline_media.edges.map(item => ({
      thumbnail: item.node.thumbnail_src,
      timestamp: item.node.taken_at_timestamp,
      shortcode: item.node.shortcode,
      isVideo: item.node.is_video,
      caption: item.node.edge_media_to_caption.edges.length
        ? item.node.edge_media_to_caption.edges[0].node.text
        : '',
      views: item.node.video_view_count,
      likes: item.node.edge_liked_by.count,
    })),
  };
};

export const formatUnixDate = unix => {
  const momentObject = moment.unix(unix);
  const now = moment();
  if (!momentObject.isSame(now, 'year')) {
    return momentObject.format('D MMMM YYYY');
  }
  if (!momentObject.isSame(now, 'week')) {
    return momentObject.format('D MMMM');
  }
  return momentObject.fromNow();
};

export const parseQueryString = search => {
  let searchTrimmed = search.trim();
  searchTrimmed =
    searchTrimmed[0] === '?' ? searchTrimmed.substring(1) : searchTrimmed;

  const params = searchTrimmed.split('&');
  const obj = {};
  params.forEach(p => {
    const [key, value] = p.split('=');
    obj[key] = value;
  });
  return obj;
};
