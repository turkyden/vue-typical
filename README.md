English | [简体中文](./README.zh-cn.md) 

<h1 align="center">vue-typical</h1>

<p align="center">Vue Animated typing in ~400 bytes 🐡 of JavaScript.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-typical" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vue-typical?color=orange" /></a> <img alt="npm" src="https://img.shields.io/npm/dt/vue-typical" /> <img alt="license" src="https://img.shields.io/github/license/Turkyden/vue-typical" /> <a href="https://www.jsdelivr.com/package/npm/vue-typical" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/vue-typical/badge" /></a>
</p>

[![Vue Typical](./vue-typical.gif)](https://vue-typical.vercel.app/)
## Install

You can install vue-typical via npm:

```bash
npm install vue-typical
```

Or use it directly in browser via cdn service:

```html
<script src="https://cdn.jsdelivr.net/npm/vue-typical@latest/dist/typical.umd.min.js"></script>
```

## Usage

```html
<typical
  :steps="['Hello', 1000, 'Hello world!', 500]"
  :wrapper="'h2'"
></typical>
<typical
  class="typicalWrapper"
  :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
  :loop="Infinity"
  :wrapper="'h3'"
></typical>
```

[![Edit vue-typical](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-typical-cqj9q?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark)

## Properties

Prop|Required|Type|Eg.| Default |
|--|--|--|--|--:|
|`steps`|True|Array|`['Hello', 1000, 'Hello world!', 500]`| - |
|`wrapper`|False|String|`'p'`|`'div'`
|`loop`|False|Number|`3` or `'Infinity'` |`1`|

## Style

Add the blink cursor effect with `typicalWrapper` classname.

```css
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

## Contributing

``` npm
npm install
```

### Compiles and hot-reloads for development

``` npm
npm run serve
```

### Compiles and minifies for production

``` npm
npm run build
```

## Contributors

Thanks goes to these people (emoji key):

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Turkyden">
        <img src="https://avatars0.githubusercontent.com/u/24560160?s=460&u=36a6072b8220e6ad7c0c7f7dbf97cc3dd796a8d0&v=4" width="100px;" alt=""/><br />
        <sub><b>Turkyden</b></sub></a><br />
        💻📖🚇⚠️
    </td>
    <td align="center">
      <a href="https://github.com/KnowsCount">
        <img src="https://avatars3.githubusercontent.com/u/56480008?s=460&u=19d370371e9be3b09766a4dae4435de3593fd0a9&v=4" width="100px;" alt=""/><br />
        <sub><b>KnowsCount</b></sub></a><br />
        📖
    </td>
  </tr>
</table>  

## License

This library is based on [@camwiegert/typical](https://github.com/camwiegert/typical) work and it currently is just a wrapper for vue.

Inspired by [@catalinmiron/vue-typical](https://github.com/catalinmiron/vue-typical).

MIT © [Turkyden](https://github.com/Turkyden)
