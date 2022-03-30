const { request, formatMediumPost, formatDevPost } = require('./utils');

/**
 * Get most recent medium posts
 *
 * @param {Object} param
 * @returns {Array} posts
 */
const getMediumPost = async ({ user }) => {
  try {
    if (!user) return [];

    let response = await request(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${user}`
    );

    return response.data.items.map((item) => formatMediumPost(item));
  } catch (error) {
    return [];
  }
};

/**
 * Get most recent dev posts
 *
 * @param {Object} param
 * @returns {Array} posts
 */
const getDevPost = async ({ user }) => {
  try {
    if (!user) return [];

    let response = await request(
      `https://dev.to/api/articles?per_page=10&username=${user}`
    );

    return response.data.map((item) => formatDevPost(item));
  } catch (error) {
    return [];
  }
};

module.exports = {
  getMediumPost: getMediumPost,
  getDevPost: getDevPost,
};
