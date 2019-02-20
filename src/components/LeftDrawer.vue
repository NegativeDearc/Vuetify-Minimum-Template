<template>
  <v-navigation-drawer
    id="left"
    app
    clipped
    width="240"
    v-bind:stateless="!$vuetify.breakpoint.mdAndDown"
    v-bind:temporary="$vuetify.breakpoint.mdAndDown"
    v-bind:mini-variant="mini"
    v-model="drawerState"
    dark
    class="grey darken-4"
  >
    <v-list>
      <div id="menu-head" v-if="!mini">
        <v-container>
          <v-layout align-center justify-end column fill-height>
            <div class="display-2 grey--text">
              <span class="green--text">Vuetify Minimum Template</span>
            </div>
            <div class="body-2 grey--text">
              build with <v-icon color="red" size="14">mdi-heart</v-icon>
              made by <span><v-icon size="14" color="yellow">mdi-language-javascript</v-icon></span> + <span><v-icon size="14" color="blue">mdi-language-python</v-icon></span>
            </div>
          </v-layout>
        </v-container>
        <v-divider class="ml-4 mr-4"></v-divider>
        <v-container>
          <v-layout column>
            <v-flex>
              <div class="grey--text body-2">{{ new Date()| moment('MMMM, ddd') }}</div>
            </v-flex>
            <v-flex>
              <div class="blue--text display-3 font-weight-regular">{{ new Date()| moment('DD') }}</div>
            </v-flex>
            <v-flex>
              <div class="grey--text subheading">{{ new Date() | moment('YYYY') }}</div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

      <v-list-tile
        v-if="mini"
        v-on:click.stop="mini = !mini"
      >
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile tag="div">
        <v-list-tile-avatar>
          <img v-bind:src="require('../assets/logo.png')"/>
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>MVT</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-list class="pt-0">
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="goToRoute"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LeftDrawer',
  computed: {
    ...mapState({
      drawer: state => state.leftDrawer.drawer
    }),
    drawerState: {
      get: function () {
        return this.drawer
      },
      set: function (val) {
        this.changeDrawer(val)
      }
    }
  },
  data () {
    return {
      items: [
        { title: 'Dashboard', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true
    }
  },
  methods: {
    ...mapMutations('leftDrawer', {
      changeDrawer: 'undrawer'
    }),
    goToRoute: function () {
      //
    }
  }
}
</script>

<style scoped>
  #left {
    /*border-right: solid hsla(0,0%,100%,.12) 1px; !* to fix border-right issue of v-navigation-drawer *!*/
  }
  #menu-head {
  }
</style>
