<template>
  <div>
    <router-view name="toolbar"></router-view>
    <router-view name="leftDrawer"></router-view>
    <router-view name="rightDrawer"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>

export default {
  name: 'Index'
}
</script>

<style scoped>

</style>
