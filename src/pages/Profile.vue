<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          max-width="344"
          class="mx-auto text-center"
        >
          <v-card-text>Ventour Status</v-card-text>
          <v-card-text>Successfull Ventoures</v-card-text>
          <v-card-text><v-rating v-model="rating"></v-rating></v-card-text>
        </v-card><br/>
        <v-card
          max-width="344"
          class="mx-auto text-center"
        >
          <v-card-text>Skiils</v-card-text>
          <v-card-text>Attributes</v-card-text>
          <RadarChart />
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="344"
          class="mx-auto text-center"
        >
          <v-card-text>Reputation</v-card-text>
          <v-card-text>{{defaultText}}</v-card-text>
          <v-card-text>Current Venture/Past Featured Venture</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card
          max-width="344"
          class="mx-auto text-center"
        >
          <v-card-text>Completion Rate</v-card-text>
          <v-card-text>Task Timeliness</v-card-text>
          <hr/>
          <v-card-text class="text-left">Education</v-card-text>
          <v-card-text class="text-left">Location</v-card-text>
          <v-card-text class="text-left">Certification</v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      rating: 3,
      defaultText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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