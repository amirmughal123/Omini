<template>
  <v-container>
    <h3 class="subheading grey--text">Ominios</h3>
    <div class="my-5" style="margin-left: 5px">
      <v-layout row class="mb-4" style="margin-left: -5px">
        <v-tooltip bottom>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>mdi-folder</v-icon>
            <span class="caption text-lowercase">by project name</span>
          </v-btn>
          <span>Sort Task By Priority</span>
        </v-tooltip>&nbsp;&nbsp;
        <v-tooltip right>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>mdi-account</v-icon>
            <span class= "caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat  v-for="project in projects" :key="project.title">
        <v-layout row wrap :class ="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">
                {{project.status}}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </div>
    <Team />
    <Analytics />
  </v-container>
</template>

<script>
  import Team from './Team.vue';
  import Analytics from './Analytics.vue';
  export default {
    components: {
      Team,
      Analytics
    },
    data() {
        return {
          projects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
    },
    methods: {
      sortBy(prop)  {
        this.projects.sort((a,b) => a[prop] < b [prop] ? -1 : 1)
      }
    }
  }

</script>

<style>
  .project.complete {
    border-left: 4px solid #3CD1C2;
  }
  .project.ongoing  {
    border-left: 4px solid orange;
  }
  .project.overdue  {
    border-left: 4px solid tomato;
  }
  .v-chip.complete  {
    background: #3cd1c2 !important;
  }
  .v-chip.ongoing {
    background: #ffaa2c !important;
  }
  .v-chip.overdue {
    background: #f83e70 !important;
  }
  .project {
    margin-left: -5px;
  }
  .right {
    float: right;
    margin-right: 5px;
  }
</style>
 

