<template>
  <div class="header">
      <div class="container">
          <img src="../assets/logo.jpg" alt="logo">
          <div>
            <router-link class="href" to="/reg" v-if="conditionReg">
                Sign up
            </router-link>
            <router-link class="href" to="/auth" v-if="conditionAuth">
                Sign in
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  watch: {
      $route(url){
          this.conditionReg = (url.path !== '/reg' && url.path !== '/first') ? true : false;
          this.conditionAuth = (url.path !== '/auth' && url.path !== '/first') ? true : false;
      }
  },
  data() {
      return {
          conditionAuth: true,
          conditionReg: true,
      }
  }
}
</script>

<style>
.header {
    display: flex;
    justify-content: flex-end;
    height: 80px;
    width: 100%;
    background-color: #000;
}
.href {
    align-self: flex-end;
    color: white;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 800;
    width:110px;
    height: 23px;
    margin-right: 50px;
    padding: 10px;
    align-self: center;
    border: 2px solid #fff;
}
img {
    height: 80px;
    width: 80px;
}
.container {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
</style>
