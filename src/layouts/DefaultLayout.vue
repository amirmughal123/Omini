<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense link>
        <div class="text-center">
          <v-avatar :size="80">
            <img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="avatar">
          </v-avatar>
        </div>
        <v-row align="center">
          <v-col class="text-center" cols="12" sm="12">
            <div class="my-2">
              <v-btn small color="deep-purple" style="color: white">ADD NEW PROJECT</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-list-item @click="navigation('/')">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigation('/profile')">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigation('/ominios')">
          <v-list-item-action>
            <v-icon>mdi-widgets</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Ominios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="navigation('/my-projects')">
          <v-list-item-action>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ominiOS</v-toolbar-title>
      <div class="d-flex justify-end" style="width: 50%">
        <v-toolbar-items class="pa-12">
          <v-btn text @click="navigation('/')">Home</v-btn>
          <v-btn text @click="navigation('/recruitment')">Discovery</v-btn>
        </v-toolbar-items>
      </div>
    </v-app-bar>
    <v-content style="background: #eae8e8">
      <router-view></router-view>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    methods: {
      navigation (type) {
        this.$router.push(type);
      }
    }
  }
</script>