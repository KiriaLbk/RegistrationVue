<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
body {
  margin: 0px;
}
.app {
  height: 100vh;
  width: 100%;
}
</style>
