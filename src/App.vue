<template>
  <div id="app" class="w-screen h-screen bg-gray-800 flex flex-col justify-center items-center">
    <!-- <div class="absolute top-0 left-0 w-full text-center text-gray-500">
      <div class="container m-auto flex justify-center py-4">
        <a href="https://github.com/Turkyden/vue-typical" target="_balnk" class="pl-2 cursor-pointer">
          <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Turkyden/vue-typical?style=social">
        </a>
      </div>
    </div> -->
    <div class="w-full">
      <div class="relative container m-auto bg-gray-900 text-center text-white shadow-2xl h-64 flex flex-col justify-center rounded-lg text-3xl">
        <div class="absolute top-0 right-0 px-4 py-2 text-sm text-gray-600">Preview</div>
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
      </div>
      <br/>
      <transition name="fade">
        <div v-show="codeVisibled" class="relative container m-auto bg-gray-900 bg-opacity-25 text-gray-300 shadow-inner shadow-2xl flex rounded-lg text-lg px-8">
          <a class="absolute top-0 right-0 px-4 py-2 text-sm text-gray-600 hover:bg-gray-800 hover:text-gray-500 cursor-pointer transition-all duration-150 ease-in"
            href="https://github.com/Turkyden/vue-typical" target="_blank"
          >Resource</a>
          <pre>
            <typical
              :steps="code"
              :wrapper="'code'"
              class="html"
            ></typical>
          </pre>
        </div>
      </transition>
      <transition name="fade">
        <p v-show="codeCoyright" class="text-gray-500 text-center py-10"> MIT ❤️ Designed by
          <a href="https://github.com/Turkyden" target="_blank" class="text-green-500 hover:underline">@Turkyden</a>
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import typical from './typical.js'
import hljs from 'highlight.js'
import './assets/atom-one-dark.css'

export default {
  name: 'app',
  data: function() {
    return {
      codeVisibled: false,
      codeCoyright: false,
      code: [1000, this.showCode, `
<typical
  :steps="['Hello', 1000, 'Hello world!', 500]"
  :wrapper="'h2'"
></typical>
<typical
  class="typicalWrapper"
  :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
  :loop="Infinity"
  :wrapper="'h3'"
></typical>`, hljs.highlightAll, 500, this.showCoyright]
    }
  },
  methods: {
    showCode() {
      this.codeVisibled = true;
    },
    showCoyright() {
      this.codeCoyright = true;
    }
  },
  components: {
    typical
  }
}
</script>

<style>
h2{
  color: #42b983;
}
/* blink effect */
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
