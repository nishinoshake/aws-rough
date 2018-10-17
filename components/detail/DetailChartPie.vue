<script>
import { Pie } from 'vue-chartjs'

export default {
  name: 'DetailChartPie',
  extends: Pie,
  props: {
    data: Object,
    clickHandler: Function
  },
  data() {
    const self = this

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
        maintainAspectRatio: false,
        onHover(e) {
          const points = this.getElementAtEvent(e)

          e.target.style.cursor = points.length ? 'pointer' : 'default'
        },
        onClick(e) {
          if (self.clickHandler) {
            const points = this.getElementAtEvent(e)

            if (points.length) {
              self.clickHandler(points[0]._index)
            }
          }
        }
      }
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
</script>
