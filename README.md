<h1 align="center">Article-js</h1>
<p align="center">Api client for dev.to and medium to fetch recent articles.</p>

<br/>
<br/>

<p>Get recent articles from dev.to and medium by just providing your username and showcase them on your portfolio and blog site.</p>


# Installation

Install via <a href="https://www.npmjs.com/package/article-js">NPM</a>
```
npm install article-js
```

Install via <a href="https://yarnpkg.com/package/article-js">Yarn</a>
```
yarn add article-js
```


## Usage

<details>
<summary>getDevtoArticle</summary>

```js
const { getDevtoArticle } = require("article-js");

getDevtoArticle({
    user: 'yourusername'
}).then(res => {
    console.log(res);
})
```

</details>

<details>
<summary>getMediumArticle</summary>

```js
const { getMediumArticle } = require("article-js");

getMediumArticle({
    user: 'yourusername'
}).then(res => {
    console.log(res);
})
```

</details>


## Result

The functions are asynchronous and return array.
```
[
  {
    title: "Why Enhancing Virtual Reality is Important",
    description: "Virtual reality is seen as a “fun” technology to some without much...",
    thumbnail: "https://cdn-images-1.medium.com/max/2600/0*kz30LOdXT8CyOymh",
    link: "https://medium.com/p/ac19dd21c728",
    categories: ["vr", "technology", "virtual-reality", "engineering", "artificial-intelligence"],
    publishedAt: Wed Aug 11 2021 18:43:34 GMT+0600
  } 
]
```


## Contribute

To contribute, clone this repo locally and commit your code on a new branch. Feel free to create an issue or make a pull request.


## Thank You

[![Stargazers repo roster for @arifszn/article-js](https://reporoster.com/stars/arifszn/article-js)](https://github.com/arifszn/article-js/stargazers)
[![Forkers repo roster for @arifszn/article-js](https://reporoster.com/forks/arifszn/article-js)](https://github.com/arifszn/article-js/network/members)

## Support

Show your ❤️ and support by giving a <a href="https://github.com/arifszn/article-js">star</a>.


## License

<p>MIT Licensed.</p>
<p>Copyright © <a href="https://arifszn.github.io">MD. Ariful Alam</a> 2021.</p>