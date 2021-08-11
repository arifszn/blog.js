const axios = require('axios');
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
}

/**
 * Format raw medium article
 * 
 * @param {Object} article
 * @return {Object} formatted article
 */
const formatMediumArticle = (article) => {
    return {
        title: article.title.trim(),
        description: textEllipsis(stripHtml(article.content, {
            stripTogetherWithTheirContents: [
                "script",
                "style",
                "xml",
                "figure",
            ],
        }).result.replace("\n", "").trim()),
        thumbnail: article.thumbnail,
        link: article.guid,
        categories: article.categories,
        publishedAt: new Date(article.pubDate)
    };
}

/**
 * Format raw dev.to article
 * 
 * @param {Object} article
 * @return {Object} formatted article
 */
const formatDevtoArticle = (article) => {
    return {
        title: article.title.trim(),
        description: article.description.replace("\n", "").trim(),
        thumbnail: article.social_image ? article.social_image : article.cover_image,
        link: article.url,
        categories: article.tag_list,
        publishedAt: new Date(article.published_at)
    };
}

/**
 * Ellipsis long test
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

module.exports.request = request;
module.exports.formatMediumArticle = formatMediumArticle;
module.exports.formatDevtoArticle = formatDevtoArticle;