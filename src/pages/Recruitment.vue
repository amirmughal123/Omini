<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Attribute Distribution</h2></v-card-text>
        </v-card>
        <v-card>
          <RadarChart />
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Search Bar</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-container v-for="person in items" :key="person.name">
            <v-row>
              <v-col cols="4">
                <img :src="person.avatar" alt="avatar" style="width: 80px">
                <div class="grey--text"><b>{{person.name}}</b></div>
              </v-col>
              <v-col style="font-size: 12px" class="text-left">
                <div class="grey--text">{{person.recommended}}</div>
                <div class="grey--text">{{person.attribute}}</div>
                <div class="grey--text">{{person.location}}</div>
                <div class="grey--text">{{person.age}}</div>
                <div class="grey--text">{{person.workExp}}</div>
              </v-col>
              <v-col style="font-size: 12px" class="text-left">
                <div class="grey--text">{{person.skill}}</div>
              </v-col>
              <v-col style="font-size: 12px" class="text-left">
                <div class="grey--text">{{person.compVentures}}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="grey--text" style="font-size: 12px"><b>Update</b></v-col>
              <v-col class="grey--text" style="font-size: 12px"><b>Clear all</b></v-col>
            </v-row>
            <v-divider></v-divider>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-card
      class="mx-auto text-center"
    >
      <v-card-text><h2>Team</h2></v-card-text>
    </v-card>
    <v-card
      class="mx-auto"
    >
      <v-container>
        <v-row>
          <v-col cols="6">
            <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt="avatar" style="width: 45%; height: 100%">&nbsp;&nbsp;
            <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt="avatar" style="width: 45%; height: 100%">
          </v-col>
          <v-col cols="6">
            <v-row>
              <v-col cols="3" style="border: 5px solid black" class="text-center">
                <div><h3>HTML</h3></div>
                <div><h3>CSS</h3></div>
                <div><h3>JAVA</h3></div>
              </v-col>&nbsp;&nbsp;
              <v-col cols="6">
                <div style="border: 5px solid black" class="text-center"><h3 class="my-2">4 verified ventures</h3></div>
                <div style="border: 5px solid black" class="my-3 text-center"><h3 class="my-2">occupation</h3></div>
              </v-col>
            </v-row>
            <v-row style="border: 5px solid black" class="my-2">
              <div class="my-2 text-center" style="width: 100%">
                <h3>New Brunswick, NJ</h3>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import RadarChart from '../components/Chart.vue'
export default {
  components: {
    RadarChart
  },
  data() {
    return {
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'Amir',
          recommended: 'recomended',
          attribute: 'attribute',
          location: 'location',
          age: 'age',
          workExp: 'Experience',
          skill: 'skill',
          compVentures: 'ventures'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Waqar',
          recommended: 'recomended',
          attribute: 'attribute',
          location: 'location',
          age: 'age',
          workExp: 'workExp',
          skill: 'skill',
          compVentures: 'ventures'
        },
      ]
    }
  }
}
</script>