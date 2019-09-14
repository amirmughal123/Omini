<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['VueJs','ReactJs', 'Angularjs'],
      datasets: [
        {
          backgroundColor: [
            '#00D8FF',
            '#DD1B16'
          ],
          data: [40, 50, 70]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>