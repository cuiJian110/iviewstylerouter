<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
  }
}
</script>

<style lang="scss">
@import "../static/myiview.scss";
</style>
