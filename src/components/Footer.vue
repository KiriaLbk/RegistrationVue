<template>
  <div class="footer">
      <span>
          @2020
      </span>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style scoped>
.footer {
    background-color: #000;
    display: flex;
    position: absolute;
    bottom: 0px;
    height: 72px;
    width: 100%;
}
span {
    color: #fff;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    align-self: center;
    margin-left: 50px;
}
</style>
