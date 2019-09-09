<template>
  <v-app>
    <v-flex>
      <v-row>
        <v-img
          src="https://picsum.photos/id/11/500/300"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-height="300"
        >
          <v-row class="profile-row d-flex align-center">
            <v-avatar :size="80">
              <img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" alt="avatar">
            </v-avatar>&nbsp;&nbsp;&nbsp;
            <h3 class="white--text">Hello world, Yes my name is Amir</h3>
          </v-row>
        </v-img>
      </v-row>
      <v-row>
        <v-toolbar>
          <v-toolbar-items>
            <v-btn text @click="navigation('/profile')">Overview</v-btn>
            <v-btn text @click="navigation('/portfolio')">Portfolio</v-btn>
            <v-btn text>Community Engagement</v-btn>
          </v-toolbar-items>

          <div class="flex-grow-1"></div>
          <v-toolbar-items>
            <v-btn text>More</v-btn>
          </v-toolbar-items>
          
        </v-toolbar>
      </v-row>
      <router-view></router-view>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    navigation(type) {
      this.$router.push(type)
    }
  }
}
</script>
<style>
  .profile-row {
    margin-left: 5%;
    position: absolute;
    bottom: 5%;
  }
</style>