# vue-typical

> Vue Animated typing in ~400 bytes 🐡 of JavaScript.

<!-- [DEMO](https://turkyden.github.io/vue-typical/) -->

[CodePen](https://codepen.io/turkyden/pen/abbWPYm)

![Vue Typical](./vue-typical.gif)

Based on awesome typical library by [@camwiegert](https://github.com/camwiegert/typical)

[![NPM](https://img.shields.io/npm/v/vue-typical.svg)](https://www.npmjs.com/package/react-typical) [![](https://data.jsdelivr.com/v1/package/npm/vue-typical/badge)](https://www.jsdelivr.com/package/npm/vue-typical) 

## Install

```bash
npm install --save vue-typical
```

## Usage

``` html
<template>
  <div id="app" class="w-screen h-screen bg-gray-800 flex flex-col justify-center">
    <div class="container m-auto bg-gray-900 text-center text-white shadow-2xl h-64 flex flex-col justify-center rounded-lg text-3xl">
      <Typical
        v-bind:steps="['Hello', 1000, 'Hello world!', 500]"
        v-bind:loop=1
        v-bind:wrapper="'h2'"
        v-bind:className="'vt-title'"
      />
      <Typical
        v-bind:steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
        v-bind:loop=3
        v-bind:wrapper="'h3'"
        v-bind:className="'vt-subTitle'"
      />
    </div>
  </div>
</template>

<script>
import Typical from 'vue-typical'

export default {
  name: 'app',
  data: function() {
    return {
      msg: 'vue typical'
    }
  },
  components: {
    Typical
  }
}
</script>

<style>
.vt-title{
  color: #42b983;
}
</style>
```

## Properties

prop|mandatory|type|Eg.
|--|--|--|--|
|`steps`|yes|[]|`['Hello', 1000, 'World']`
|`wrapper`|no|string|`'p'`
|`loop`|no|number|`3`|
|`className`|no|string|`'vt-title'`|

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
