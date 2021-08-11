// Type definitions for Article-js
// Project https://github.com/arifszn/article-js
// Author: Ariful Alam <arifulalamszn@gmail.com>

interface options {
    /**
     * Username
     */
    user: string;
}

/**
 * Get most recent medium articles
 */
declare function getMediumArticle(options: options): Promise<R>;

/**
 * Get most recent dev.to articles
 */
declare function getDevtoArticle(options: options): Promise<R>;

export { getMediumArticle, getDevtoArticle };
