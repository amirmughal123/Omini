<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
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
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Messages</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-widgets</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>My Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Team</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
          <v-btn text>Home</v-btn>
          <v-btn text>Discovery</v-btn>
        </v-toolbar-items>
      </div>
    </v-app-bar>

    <v-content style="background: #eae8e8">
      <v-row>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-carousel
              cycle
              height="550"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">{{ slide }} Slide</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-container>
      </v-row>
      <v-row>
        <v-card
          class="mx-auto my-2"
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
      <v-row>
        <v-tabs
          grow
          v-model="tab"
          background-color="white"
          style="d-flex justify-space-around"
        >
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat color="basil">
              <v-card-text>{{tabText}}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-row>
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
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      cards: [
        1,
        2,
        3
      ],
      tabText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }),
  }
</script>