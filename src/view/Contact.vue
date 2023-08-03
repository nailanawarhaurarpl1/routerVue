<template>
    <center>
    <h1>Contact Page</h1>
  </center>
  </template>
  
  <script>
import { onMounted } from 'vue';
export default {
  setup(propos, context)
  {
    onMounted(() => {
      context.emit("id-menu", 2)
    })
  }
}
</script>