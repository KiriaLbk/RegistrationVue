<template>
  <div class="auth">
      <RegInfo></RegInfo>
      <FormAuth></FormAuth>
  </div>
</template>

<script>
import RegInfo from '../RegInfo.vue'
import FormAuth from './FormAuth.vue';

export default {
  name: 'Auth',
  components: {
      RegInfo,
      FormAuth
  }
}
</script>

<style>
.auth {
    height: 80vh;
    width: 100%;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
</style>
