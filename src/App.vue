<template>
  <div id="app" class="w-screen h-screen bg-gray-800 flex flex-col justify-center">
    <div class="container m-auto bg-gray-900 text-center text-white shadow-2xl h-64 flex flex-col justify-center rounded-lg text-3xl">
      <typical 
        class="vt-title" 
        :steps="['Hello', 1000, 'Hello world!', 500]" 
        :wrapper="'h2'"
      ></typical>
      <typical 
        class="vt-subTitle"
        :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]" 
        :loop=3 
        :wrapper="'h3'"
      ></typical>
    </div>
  </div>
</template>

<script>
import typical from './typical.js'

export default {
  name: 'app',
  data: function() {
    return {
      msg: 'vue typical'
    }
  },
  components: {
    typical
  }
}
</script>

<style>
.vt-title{
  color: #42b983;
}
</style>
