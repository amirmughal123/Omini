<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card flat tile>
          <v-row class="d-flex justify-center">X Amount of Followers</v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Consumer</v-col>
            <v-col class="d-flex justify-center">Consumer Name</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Venture Participant</v-col>
            <v-col class="d-flex justify-center">Participant Name</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Audio</v-col>
            <v-col class="d-flex justify-center">Audio</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Visual</v-col>
            <v-col class="d-flex justify-center">Visual</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Design</v-col>
            <v-col class="d-flex justify-center">Design</v-col>
          </v-row>
           <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Performance</v-col>
            <v-col class="d-flex justify-center">Performance</v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card flat tile>
          <v-row class="d-flex justify-center">X Amount Following</v-row>
           <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Consumer</v-col>
            <v-col class="d-flex justify-center">Consumer Name</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Venture Participant</v-col>
            <v-col class="d-flex justify-center">Participant Name</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Audio</v-col>
            <v-col class="d-flex justify-center">Audio</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Visual</v-col>
            <v-col class="d-flex justify-center">Visual</v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Design</v-col>
            <v-col class="d-flex justify-center">Design</v-col>
          </v-row>
           <v-row>
            <v-col class="d-flex justify-left" style="margin-left: 10%">Performance</v-col>
            <v-col class="d-flex justify-center">Performance</v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat tile>
          <v-row class="d-flex justify-center">Recent Posts & Mentions</v-row>
          <v-list style="margin-left: 3%">
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
   data: () => ({
      items: [
      { active: true, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
      { active: true, title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
      { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
      { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
    ],
   })
}
</script>