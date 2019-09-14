<template>
  <div class="team">
    <h3 class="subheading grey--text">Team</h3>
    <v-container class="my-5" style="padding: 8px">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-4">
            <div class="text-center pa-md-4 mx-lg-auto">
              <v-avatar :size="100">
                <img :src="person.avatar" alt="avatar">
              </v-avatar>
            </div>
            <v-card-text class="d-flex flex-column align-sm-center">
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
              <v-icon small>mdi-message</v-icon>
              <v-icon small>mdi-account</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: [
          { name: 'The Net Ninja', role: 'Influencer', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
          { name: 'Ryu', role: 'Facilitator', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
          { name: 'Chun Li', role: 'Organizer', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
          { name: 'Gouken', role: 'Ditto', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
          { name: 'Yoshi', role: 'Facilitator', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',}
        ]
      }
    }
  }
</script>