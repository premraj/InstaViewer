export const getInstDataFromJSON = json => {
  return {
    username: json.username,
    profilePic: json.profile_pic_url,
    isPrivate: json.is_private,
    data: json.edge_owner_to_timeline_media,
  };
};
