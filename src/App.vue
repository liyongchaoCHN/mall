<template>
  <div id="app">
    <Topbar></Topbar>
    <Header></Header>
    <route-view></route-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Topbar from '@/components/content/Topbar.vue'
import Header from '@/components/content/Header.vue'
import Footer from '@/components/content/Footer.vue'

export default {
  components: {
    Topbar,
    Header,
    Footer
  }
}
</script>

<style></style>
