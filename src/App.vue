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
import Typical from './index.js'

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
