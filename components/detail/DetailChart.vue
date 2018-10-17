<template>
  <DetailChartPie class="detail-chart" :data="data" :click-handler="handleClick" />
</template>

<script>
import DetailChartPie from '@/components/detail/DetailChartPie'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'DetailChart',
  components: { DetailChartPie },
  props: {
    services: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    hoverColors: {
      type: Array,
      required: true
    }
  },
  computed: {
    data() {
      const labels = this.services.map(service => service.name)
      const data = this.services.map(service => service.total)

      return {
        labels,
        datasets: [
          {
            backgroundColor: this.colors,
            hoverBackgroundColor: this.hoverColors,
            data
          }
        ]
      }
    }
  },
  methods: {
    handleClick(index) {
      const service = this.services[index]
      const { href } = getService(service.key, serviceConfig)

      this.$router.push(href)
    }
  }
}
</script>
