// Type definitions for blog-js
// Project https://github.com/arifszn/blog-js
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
declare function getMediumPost(options: options): Promise<R>;

/**
 * Get most recent dev.to posts
 */
declare function getDevtoPost(options: options): Promise<R>;

export { getMediumPost, getDevtoPost };
