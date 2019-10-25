<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Typical',
  props: {
    msg: String,
    steps: Array,
    wrapper: String,
    loop: Number
  }
}
</script>

<style>

</style>