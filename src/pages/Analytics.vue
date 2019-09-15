<template>
  <div>
    <h3 class="subheading grey--text">Analytics-Finances</h3>
    <v-card
      class="mx-auto text-center my-2"
    >
      <v-card-text><h2>Profits</h2></v-card-text>
    </v-card>
    <v-card
      class="mx-auto text-center"
    >
      <ScatterChart />
    </v-card>
    <v-row>
      <v-col cols="6">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Spendings</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <DognutChart />
        </v-card>

        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Capital Goals</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <BarChart />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Investors</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <DognutChart />
        </v-card>
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Donations</h2></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <h3 class="subheading grey--text">Analytics-Engagement</h3>
    <v-card
      class="mx-auto text-center my-2"
    >
      <v-card-text><h2>Engagement</h2></v-card-text>
    </v-card>
    <v-row>
      <v-col cols="3">
        <v-card
          class="mx-auto text-center"
        >
          <FilledLineChart  style="height: 300px"/>
        </v-card>
      </v-col>
      
      <v-col cols="3">
        <v-card
          class="mx-auto text-center"
        >
          <FilledLineChart style="height: 300px"/>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="mx-auto text-center"
        >
          <FilledLineChart style="height: 300px"/>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card
          class="mx-auto text-center"
        >
          <BarChart style="height: 300px"/>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Effective Marketing</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <DognutChart />
        </v-card>
      </v-col>
      <v-col cols="6">
         <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Reputation</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <DognutChart />
        </v-card>
      </v-col>
    </v-row>
    <v-card
      class="mx-auto text-center my-2"
    >
      <v-card-text><b>{{defaultText}}</b></v-card-text>
    </v-card>
    <h3 class="subheading grey--text">Analytics-General</h3>
    <v-row>
      <v-col cols="6">
        <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Time Allocation</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <DognutChart />
        </v-card>
      </v-col>
      <v-col cols="6">
         <v-card
          class="mx-auto text-center my-2"
        >
          <v-card-text><h2>Task Timeliness</h2></v-card-text>
        </v-card>
        <v-card
          class="mx-auto text-center"
        >
          <bar-chart />
        </v-card>
      </v-col>
    </v-row>
    <v-row style="margin-top: 12px">
      <v-tabs
        grow
        v-model="tab"
        background-color="white"
        style="d-flex justify-space-around"
      >
        <v-tab>Feedback</v-tab>
        <v-tab>Milestones</v-tab>
      </v-tabs>
      <v-tabs-items style="width: 100%" v-model="tab">
        <v-tab-item 
          v-for="item in items"
          :key="item"
        >
          <v-card
            width="100%"
            class="mx-auto"
          >
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </div>
</template>

<script>
import ScatterChart from '../components/LineChart.vue';
import DognutChart from '../components/DoughnutChart.vue';
import BarChart from '../components/BarChart.vue';
import FilledLineChart from '../components/FilledLineChart.vue';

export default {
  components: {
    ScatterChart,
    DognutChart,
    BarChart,
    FilledLineChart
  },
  data() {
    return {
      tab: null,
      tabs: 3,
      defaultText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }
  }
}
</script>