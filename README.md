<h1 align="center">Article-api</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/article-api"><img src="https://img.shields.io/npm/v/article-api"/></a>
    <a href="https://github.com/arifszn/article-api/blob/main/LICENSE"><img src="https://img.shields.io/github/license/arifszn/article-api"/></a>
</p>

<br/>
<br/>

<p>Get recent articles from dev.to and medium by just providing your username and showcase them on your portfolio or blog site.</p>


# Installation

Install via <a href="https://www.npmjs.com/package/article-api">NPM</a>
```
npm install article-api
```

Install via <a href="https://yarnpkg.com/package/article-api">Yarn</a>
```
yarn add article-api
```


## Usage

<details>
<summary>getDevtoArticle()</summary>

```js
const { getDevtoArticle } = require("article-api");

getDevtoArticle({
    user: 'yourusername'
}).then(res => {
    console.log(res);
})
```

</details>

<details>
<summary>getMediumArticle()</summary>

```js
const { getMediumArticle } = require("article-api");

getMediumArticle({
    user: 'yourusername'
}).then(res => {
    console.log(res);
})
```

</details>


## Result


<details>
<summary>Sample Response</summary>

```
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
        description: "You’ve heard about data science and machine learning, and you want to get...",
        thumbnail: "https://cdn-images-1.medium.com/max/2600/0*Ah0vLtsvxqUvRWuS",
        link: "https://medium.com/p/88ec244f2fee",
        categories: ["towards-data-science", "beginner-data-science", "beginner-coding"],
        publishedAt: Mon Jul 26 2021 22:55:26 GMT+0600
    }
]
```

</details>


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Thank You

[![Stargazers repo roster for @arifszn/article-api](https://reporoster.com/stars/arifszn/article-api)](https://github.com/arifszn/article-api/stargazers)


## Support

Show your ❤️ and support by giving a <a href="https://github.com/arifszn/article-api">star</a>.


## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2021.</p>
