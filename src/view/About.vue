<template>
  <center>
    <h1>About Page</h1>
    </center>
  </template>
  <script>
import { onMounted } from 'vue';
export default {
  setup(propos, context)
  {
    onMounted(() => {
      context.emit("id-menu", 3)
    })
  }
}
</script>