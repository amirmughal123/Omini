<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          fill: false,
          backgroundColor: '#f87979',
          borderColor: '#f87979',
          data: [10, 20, 30, 40, 50, 45, 70]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>