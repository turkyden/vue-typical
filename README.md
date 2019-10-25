# vue-typical

> Vue Animated typing in ~400 bytes 🐡 of JavaScript.

[DEMO](https://catalinmiron.github.io/react-typical/)

<!-- ![React Typical](react-typical.gif) -->

Based on awesome typical library by [@camwiegert](https://github.com/camwiegert/typical)

[![NPM](https://img.shields.io/npm/v/react-typical.svg)](https://www.npmjs.com/package/react-typical) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save vue-typical
```

## Usage

``` html
<template>
  <div id="app">
    <Typical
      v-bind:steps="steps"
      v-bind:loop="loop"
      v-bind:wrapper="wrapper"
    />
  </div>
</template>

<script>
import Typical from 'vue-typical'

export default {
  name: 'app',
  data: function() {
    return {
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: 1,
      wrapper: 'span'
    }
  },
  components: {
    Typical: Typical
  }
}
</script>

```

## Properties

prop|mandatory|type|Eg.
|--|--|--|--|
|`steps`|yes|[]|`['Hello', 1000, 'World']`
|`wrapper`|no|string|'p'
|`loop`|no|number|`3`|

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
npm run build:lib
```

## License

This library is based on [@camwiegert/typical](https://github.com/camwiegert/typical) work and it currently is just a wrapper for vue.

Inspired by [@catalinmiron/react-typical](https://github.com/catalinmiron/react-typical).

MIT © [Turkyden](https://github.com/Turkyden)
