<template>
  <div class="registration">
      <RegInfo></RegInfo>
      <Form></Form>
  </div>
</template>

<script>
import RegInfo from '../RegInfo.vue';
import Form from './Form.vue';

export default {
  name: 'Registration',
  components: {
      RegInfo,
      Form
  }
}
</script>

<style>
.registration {
    height: 80vh;
    width: 100%;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
</style>
