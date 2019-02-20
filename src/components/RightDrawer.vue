<template>
  <v-navigation-drawer
    right
    app
    v-model="drawer"
    clipped
    class="transparent"
    stateless
    v-bind:value="!$vuetify.breakpoint.smAndDown"
  >
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RightDrawer',
  data () {
    return {
      drawer: true
    }
  }
}
</script>

<style scoped>

</style>
