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

<style>
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
