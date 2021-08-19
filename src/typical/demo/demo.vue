<template>
  <VueTypical
    class="typicalWrapper"
    :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
    :loop="Infinity"
    :wrapper="'div'"
  ></VueTypical>
</template>

<script lang="ts">
import { VueTypical } from 'vue-typical';

export default {
  components: {
    VueTypical,
  }
};
</script>
