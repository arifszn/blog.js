
<h1 align="center">Article-api</h1>
<p align="center">Api client for dev.to and medium to fetch recent articles</p>

<p align="center">
    <a href="https://www.npmjs.com/package/article-api"><img src="https://img.shields.io/npm/v/article-api"/></a>
    <a href="https://github.com/arifszn/article-api/blob/main/LICENSE"><img src="https://img.shields.io/github/license/arifszn/article-api"/></a>
</p>

<br/>
<br/>

<p>Get recent articles from dev.to and medium by just providing your username and showcase them on your portfolio or blog site.</p>

> PHP version: <a href="https://github.com/arifszn/article-api-php">Article-api</a>


## Installation

Install via <a href="https://www.npmjs.com/package/article-api">NPM</a>
```
npm install article-api
```

Install via <a href="https://yarnpkg.com/package/article-api">Yarn</a>
```
yarn add article-api
```


## Usage

- **getDevtoArticle()**: Get 10 recent articles from [dev.to](https://dev.to)
    
    ```js
    const { getDevtoArticle } = require("article-api");

    getDevtoArticle({
        user: 'yourusername'
    }).then(res => {
        console.log(res);
    })
    ```
    
- **getMediumArticle()**: Get 10 recent articles from [medium](https://medium.com) 

    ```js
    const { getMediumArticle } = require("article-api");

    getMediumArticle({
        user: 'yourusername'
    }).then(res => {
        console.log(res);
    })
    ```


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


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>


## License

**Article-api** is licensed under the [MIT License](https://github.com/arifszn/article-api/blob/main/LICENSE).
