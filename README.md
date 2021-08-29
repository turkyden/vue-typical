English | [简体中文](https://vue-typical.vercel.app/zh/)

<h1 style="font-size: 3.5rem" align="center">Vue Typical</h1>

<p align="center">Vue Animated typing in ~400 bytes 🐡 of JavaScript. <a href="https://vue-typical.vercel.app" target="_blank">Preview &rarr;</a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-typical" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vue-typical?color=orange" /></a> <img alt="npm" src="https://img.shields.io/npm/dt/vue-typical" /> <img alt="license" src="https://img.shields.io/github/license/Turkyden/vue-typical" /> <a href="https://github.com/vuejs/vitepress" target="_blank"><img alt="vitepress" src="https://img.shields.io/badge/docs%20by-vitepress-blue" /></a> <a href="https://www.jsdelivr.com/package/npm/vue-typical" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/vue-typical/badge" /></a>
</p>

<!-- <p align="center">
  <a href="https://vue-typical.vercel.app/" target="_blank">
    <img alt="npm" src="https://raw.githubusercontent.com/Turkyden/vue-typical/v2/vue-typical.gif" />
  </a>
</p> -->

<p align="center">Live Demo ✨ <a href="https://vue-typical.vercel.app" target="_blank">https://vue-typical.vercel.app</a></p>

## 📦 Installation

Install with yarn

```bash
yarn add vue-typical
```

Or you can

```bash
npm install vue-typical
```

Or inject the script at your page by [jsdelivr CDN](https://www.jsdelivr.com/)

```html
<script src="https://cdn.jsdelivr.net/npm/vue-typical@latest/dist/vue-typical.umd.js"></script>
```

## 🚀 Usage

### 1. Component

You can import it as a custom component.

```vue | pure
<template>
  <v-typical
    class="blink"
    :steps="['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
    :loop="Infinity"
    :wrapper="'h2'"
  ></v-typical>
</template>

<script lang="ts">
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};
</script>
```

### 2. Plugin API

If you want to configure default options, you can register this plugin through the use API of Vue.js.

```tsx | pure
// main.js or index.js
import VTypical from 'vue-typical';

Vue.use(VTypical, {
  /* options */
});
```

If you use the plugin API, the `VTypical` component will be registered as a global component just like when including it with the `script` tag, but you won't need to re-register it through the `components` property in your own components.

### 3. Composition API

You can also create typical animation by the composition API `useTypical`.

```typescript | pure
const ref = useTypical(options);
```

Coming Soon ...

## 📑 Properties

| Prop      | Required | Type                                | Eg.                                    |
| --------- | -------- | ----------------------------------- | -------------------------------------- |
| `steps`   | True     | Array<String \| Number \| Function> | `['Hello', 1000, () => alert('Word')]` |
| `loop`    | False    | Number                              | `1` or `'Infinity'`                    |
| `wrapper` | False    | String                              | `'div'`                                |

## ✨ Style

Add the blink cursor effect with `blink` classname.

```css
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
```

## 🔢 Coming Soon

- [ ] The demo of composition API in Vue 3.0
- [ ] Supported Vue 2 & 3

## 🔨 Contribute

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

## ❤️ Contributors

Thanks goes to these people:

![Contributors](https://contrib.rocks/image?repo=Turkyden/vue-typical)

Please Feel free to enjoy and participate in open source!

## ⭐ Stargazers

Thanks for your star!

[![Stargazers repo roster for @Turkyden/vue-typical](https://reporoster.com/stars/Turkyden/vue-typical)](https://github.com/Turkyden/vue-typical/stargazers)

## 🔖 License

This library is based on [@camwiegert/typical](https://github.com/camwiegert/typical) work and it currently is just a wrapper for vue.

Inspired by [@catalinmiron/react-typical](https://github.com/catalinmiron/react-typical).

[MIT](https://github.com/Turkyden/vue-typical/blob/main/LICENSE) © [Turkyden](https://github.com/Turkyden)