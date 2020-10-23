# vue-typical

简体中文 | [English](./README.md) 

Vue Animated typing in ~400 bytes 🐡 of JavaScript. Based on awesome typical library by [@camwiegert](https://github.com/camwiegert/typical).

[![NPM](https://img.shields.io/npm/v/vue-typical.svg)](https://www.npmjs.com/package/react-typical) [![](https://data.jsdelivr.com/v1/package/npm/vue-typical/badge)](https://www.jsdelivr.com/package/npm/vue-typical) 

[Preview in CodePen &rarr;](https://codepen.io/turkyden/pen/abbWPYm)

[![Vue Typical](./vue-typical.gif)](https://codepen.io/turkyden/pen/abbWPYm)

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

``` vue
<typical
  class="vt-title"
  :steps="['Hello', 1000, 'Hello world!', 500]"
  :wrapper="'h2'"
></typical>
<typical
  class="vt-subTitle"
  :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
  :loop="3"
  :wrapper="'h3'"
></typical>
```

## Properties

Prop|Required|Type|Eg.| Default |
|--|--|--|--|--:|
|`steps`|True|Array|`['Hello', 1000, 'Hello world!', 500]`| - |
|`wrapper`|False|String|`'p'`|`'div'`
|`loop`|False|Number|`3` or `'Infinity'` |`1`|

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

## License

This library is based on [@camwiegert/typical](https://github.com/camwiegert/typical) work and it currently is just a wrapper for vue.

Inspired by [@catalinmiron/react-typical](https://github.com/catalinmiron/react-typical).

MIT © [Turkyden](https://github.com/Turkyden)
