<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'DetailChartPie',
  extends: Pie,
  props: {
    data: Object
  },
  data() {
    return {
      options: {
        animation: {
          duration: 500,
          easing: 'easeOutExpo'
        },
        legend: {
          display: false
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem, data) => {
              return data.labels[tooltipItem.index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
</script>
