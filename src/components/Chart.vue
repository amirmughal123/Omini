
<script>

import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  components: {
    Radar
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'OminiOS',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39]
        }
      ]
    })
  }
}
</script>