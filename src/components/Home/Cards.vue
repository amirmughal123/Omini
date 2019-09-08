<template>
  <v-row>
    <v-card
      class="mx-auto"
      max-width="324"
      v-for="(card, i) in cards"
      :key="i"
    >
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title class="d-flex justify-center">Cafe Badilico</v-card-title>
      <v-card-text>
        <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          color="blue accent-4"
          text
          @click="reserve"
        >
          MORE INFO
        </v-btn>
        <v-btn
          color="grey accent-4"
          text
          @click="reserve"
        >
          VIEW ALL
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        1,
        2,
        3
      ]
    })
  }
</script>