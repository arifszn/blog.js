// Type definitions for blog.js
// Project https://github.com/arifszn/blog.js
// Author: Ariful Alam <arifulalamszn@gmail.com>

interface options {
  /**
   * Username
   */
  user: string;
}

/**
 * Get most recent medium posts
 */
declare function getMediumPost(options: options): Promise<any>;

/**
 * Get most recent dev posts
 */
declare function getDevPost(options: options): Promise<any>;

export { getMediumPost, getDevPost };
