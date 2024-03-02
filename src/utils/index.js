const axios = require('axios').default;
const { stripHtml } = require('string-strip-html');

/**
 * Make a get request
 *
 * @param {String} url
 * @return Axios response object
 */
const request = async (url) => {
  try {
    return axios.get(url);
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Format raw medium post
 *
 * @param {Object} post
 * @return {Object} formatted post
 */
const formatMediumPost = (post) => {
  return {
    title: post.title.trim(),
    description: textEllipsis(
      stripHtml(post.content, {
        stripTogetherWithTheirContents: ['script', 'style', 'xml', 'figure'],
      })
        .result.replace('\n', '')
        .trim()
    ),
    thumbnail:
      post.thumbnail ||
      extractThumbnailFromMedium(
        stripHtml(post.content, {
          ignoreTagsWithTheirContents: ['figure'],
          stripTogetherWithTheirContents: ['script', 'style', 'xml', 'p'],
        })
          .result.replace('\n', '')
          .trim()
      ),
    link: post.guid,
    categories: post.categories,
    publishedAt: new Date(post.pubDate),
  };
};

/**
 * Format raw dev post
 *
 * @param {Object} post
 * @return {Object} formatted post
 */
const formatDevPost = (post) => {
  return {
    title: post.title.trim(),
    description: post.description.replace('\n', '').trim(),
    thumbnail: post.social_image ? post.social_image : post.cover_image,
    link: post.url,
    categories: post.tag_list,
    publishedAt: new Date(post.published_at),
  };
};

/**
 * Ellipsis long text
 *
 * @param {string} str
 * @param {number} length
 * @param {string} ending
 * @return {string} ellipsized string
 */
const textEllipsis = (str, length = 100, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

const extractThumbnailFromMedium = (html) => {
  const figureRegex =
    /<figure[^>]*>(.*?)<img[^>]*src="([^"]*)"[^>]*>.*?<\/figure>/i;

  const match = figureRegex.exec(html);

  if (match && match.length >= 3) {
    return match[2];
  } else {
    return '';
  }
};

module.exports = {
  request: request,
  formatMediumPost: formatMediumPost,
  formatDevPost: formatDevPost,
};
