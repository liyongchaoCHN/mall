<template>
  <div id="app">
    <div class="header"></div>
  </div>
</template>

<script>
import { userinfo } from '@/network/api.js'

export default {
  created() {
    userinfo().then(res => {
      console.log(res)
    })
  }
}
</script>

<style></style>
