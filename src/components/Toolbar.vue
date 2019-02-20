<template>
  <v-toolbar
    dark
    app
    class="indigo darken-4"
    clipped-left
    prominent
  >
    <v-toolbar-side-icon
      v-on:click="leftDrawer"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Vuetify Minimum Template</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  methods: {
    leftDrawer: function () {
      this.$store.commit('leftDrawer/undrawer')
    }
  }
}
</script>

<style scoped>
</style>
