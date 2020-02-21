<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/posts">Posts</router-link>
        <router-link to="/posts/create">Create</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
