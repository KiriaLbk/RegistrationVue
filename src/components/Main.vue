<template>
  <div class="main">
      <img src="../assets/sea.jpg" alt="sea">
      <div>
        <p>KL</p>
        <span>Main Page</span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  components: {
  }
}
</script>

<style scoped>
.main {
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    align-items: center;
}
img {
    height: 100%;
    width: 50%;
}
.main div {
    margin-left: 50px;
}
p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 33px;
    font-weight: 800;
}
span {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 600;
}
</style>
