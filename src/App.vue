<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
