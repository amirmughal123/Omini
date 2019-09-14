<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          borderColor: '#f87979',
          data: [1, 2, 3, 4]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>