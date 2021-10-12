const { request, formatMediumArticle, formatDevtoArticle, formatHashnodeArticle } = require("./util");

module.exports = {
    /**
     * Get most recent medium articles
     * 
     * @param {Object} param
     * @returns {Array} articles
     */
    getMediumArticle: async ({
        user
    }) => {
        try {
            if (!user) return [];

            let response = await request(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${user}`);

            return response.data.items.map(item => formatMediumArticle(item));
        } catch (error) {
            return [];
        }
    },
    /**
     * Get most recent dev.to articles
     * 
     * @param {Object} param
     * @returns {Array} articles
     */
    getDevtoArticle: async ({
        user
    }) => {
        try {
            if (!user) return [];
            
            let response = await request(`https://dev.to/api/articles?per_page=10&username=${user}`);

            return response.data.map(item => formatDevtoArticle(item));
        } catch (error) {
            return [];
        }
    },
    /**
     * Get most recent hashnode articles
     * 
     * @param {Object} param
     * @returns {Array} articles
     */
     getHasnodeArticle: async ({
        user
    }) => {
        try {
            if (!user) return [];
            
            let response = await request(`https://api.rss2json.com/v1/api.json?rss_url=https://hashnode.com/@${user}/rss.xml`);

            return response.data.items.map(item => formatHashnodeArticle(item));
        } catch (error) {
            return [];
        }
    }
}