<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/views/components/header';

export default {
  name: 'App',
  components: {
    MyHeader
  }
};
</script>

<style lang="less">
html {
  font-size: 12px;
}
body {
  background: #f4f5f5;
}
* {
  list-style: none;
}
#app {
  min-height: calc(100vh);
}
</style>
