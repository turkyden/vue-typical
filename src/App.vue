<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Typical 
      v-bind:msg="msg" 
      v-bind:steps="steps" 
      v-bind:loop="loop" 
      v-bind:wrapper="wrapper"
    />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Typical from './components/Typical.vue'

export default {
  name: 'app',
  data: function() {
    return {
      msg: "Fucking Awesome !",
      steps: ['Hello', 1000, 'Hello world!', 500],
      loop: 1,
      wrapper: 'span'
    }
  },
  components: {
    Typical
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
