<br/>

<p align="center">
  <h1 align="center">
    <img src="https://user-images.githubusercontent.com/45073703/227423738-48c622ed-908b-4259-9917-e6a8ae0e0742.png" width="25%">
  </h1>

  <h4 align="center">JavaScript client to get recent blog posts from popular blogging platforms.</h4>

  <p align="center">
    <a href="https://www.npmjs.com/package/@arifszn/blog-js">
      <img src="https://img.shields.io/npm/v/@arifszn/blog-js"/>
    </a>
    <a href="https://www.npmjs.com/package/@arifszn/blog-js">
      <img src="https://img.shields.io/npm/dt/@arifszn/blog-js"/>
    </a>
    <img src="https://img.shields.io/bundlephobia/min/@arifszn/blog-js"/>
    <a href="https://github.com/arifszn/blog.js/actions/workflows/test.yml">
      <img src="https://github.com/arifszn/blog.js/actions/workflows/test.yml/badge.svg"/>
    </a>
    <a href="https://codeclimate.com/github/arifszn/blog.js/test_coverage">
      <img src="https://api.codeclimate.com/v1/badges/f756d2df72c22b64b943/test_coverage" />
    </a>
    <a href="https://codeclimate.com/github/arifszn/blog.js/maintainability">
      <img src="https://api.codeclimate.com/v1/badges/c60f42d7d0b61bd33e98/maintainability" />
    </a>
    <a href="https://github.com/arifszn/blog.js/issues">
      <img src="https://img.shields.io/github/issues/arifszn/blog.js"/>
    </a>
    <a href="https://github.com/arifszn/blog.js/stargazers">
      <img src="https://img.shields.io/github/stars/arifszn/blog.js"/>
    </a>
    <a href="https://github.com/arifszn/blog.js/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/arifszn/blog.js/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/arifszn/blog.js"/>
    </a>
    <a href="https://twitter.com/intent/tweet?url=https://github.com/arifszn/blog.js&hashtags=javascript,nodejs,opensource,js,webdev,developers">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fblog.js"/>
    </a>
  </p>

  <p align="center">
    <a href="https://www.npmjs.com/package/@arifszn/blog-js">NPM</a>
    ·
    <a href="https://github.com/arifszn/blog.js/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/blog.js/discussions">Request Feature</a>
  </p>
</p>

**blog.js** is a JavaScript client designed to fetch recent blog posts from popular blogging platforms such as Dev and Medium. By providing a username, users can easily retrieve and showcase their most recent posts on their website or portfolio.

## Installation

Install via <a href="https://www.npmjs.com/package/@arifszn/blog-js">NPM</a>.

```
npm install @arifszn/blog-js
```

Or install via <a href="https://yarnpkg.com/package/@arifszn/blog-js">Yarn</a>.

```
yarn add @arifszn/blog-js
```

## Usage

- **`getDevPost()`**: Get 10 recent posts from [dev](https://dev.to).

  ```js
  const { getDevPost } = require('@arifszn/blog-js');

  getDevPost({
    user: 'yourusername',
  }).then((res) => {
    console.log(res);
  });
  ```

- **`getMediumPost()`**: Get 10 recent posts from [medium](https://medium.com).

  ```js
  const { getMediumPost } = require('@arifszn/blog-js');

  getMediumPost({
    user: 'yourusername',
  }).then((res) => {
    console.log(res);
  });
  ```

Try it **[online](https://stackblitz.com/edit/blog-js-online?file=index.js)**.

## Sample Response

```js
[
    {
        title: "Why Enhancing Virtual Reality is Important",
        description: "Virtual reality is seen as a “fun” technology to some without much...",
        thumbnail: "https://cdn-images-1.medium.com/max/2600/0*kz30LOdXT8CyOymh",
        link: "https://medium.com/p/ac19dd21c728",
        categories: ["vr", "technology", "virtual-reality", "engineering", "artificial-intelligence"],
        publishedAt: Wed Aug 11 2021 18:43:34 GMT+0600
    },
    {
        title: "How to Get Started With Data Science: a Brief Guide",
        description: "You’ve heard about data science and machine learning, and you want to get started. Maybe you hear...",
        thumbnail: "https://cdn-images-1.medium.com/max/2600/0*Ah0vLtsvxqUvRWuS",
        link: "https://medium.com/p/88ec244f2fee",
        categories: ["beginner-coding", "data-science-training", "machine-learning-course"],
        publishedAt: Mon Jul 26 2021 22:55:26 GMT+0600
    }
]
```

## Support

<p>You can show your support by starring this project.</p>
<a href="https://github.com/arifszn/blog.js/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/blog.js?style=social" alt="Github Star">
</a>

## Contribute

To contribute, see the [contributing guide](https://github.com/arifszn/blog.js/blob/main/CONTRIBUTING.md).

## License

[MIT License](https://github.com/arifszn/blog.js/blob/main/LICENSE)
