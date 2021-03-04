# vue-typical

简体中文 | [English](./README.md)

仅用约 400 bytes 🐡 JavaScript 写成的 Vue 自动打字动画。 基于强大的 [@camwiegert](https://github.com/camwiegert) 的 [typical](https://github.com/camwiegert/typical) 库。

[![NPM](https://img.shields.io/npm/v/vue-typical.svg)](https://www.npmjs.com/package/react-typical) [![](https://data.jsdelivr.com/v1/package/npm/vue-typical/badge)](https://www.jsdelivr.com/package/npm/vue-typical) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

[Preview in CodePen &rarr;](https://codepen.io/turkyden/pen/abbWPYm)

[![Vue Typical](./vue-typical.gif)](https://codepen.io/turkyden/pen/abbWPYm)

## 安装

你可以通过 `npm` 安装这个依赖：

```bash
npm install vue-typical
```

或者直接使用 cdn：

```html
<script src="https://cdn.jsdelivr.net/npm/vue-typical@latest/dist/typical.umd.min.js"></script>
```

## 使用

```vue
<typical
  :steps="['Hello', 1000, 'Hello world!', 500]"
  :wrapper="'h2'"
></typical>
<typical
  class="typicalWrapper"
  :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
  :loop="3"
  :wrapper="'h3'"
></typical>
```

## 属性

| Prop      | 必要  | 类型   | 例子                                   |    默认 |
| --------- | ----- | ------ | -------------------------------------- | ------: |
| `steps`   | True  | Array  | `['Hello', 1000, 'Hello world!', 500]` |       - |
| `wrapper` | False | String | `'p'`                                  | `'div'` |
| `loop`    | False | Number | `3` or `'Infinity'`                    |     `1` |

## 贡献

```npm
npm install
```

### 开发环境打包

```npm
npm run serve
```

### 生产环境打包

```npm
npm run build
```

## 协议

这个库基于 [@camwiegert/typical](https://github.com/camwiegert/typical)，不过是一个 vue 版本。

受到 [@catalinmiron/react-typical](https://github.com/catalinmiron/react-typical) 的启发。

MIT © [Turkyden](https://github.com/Turkyden)
