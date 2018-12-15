<template>
  <article class="detail">
    <h1 class="title-page">料金内訳<DetailCopy :services="services" /></h1>
    <div class="detail-body">
      <div :class="['detail-main', {'is-visible': hasService}]">
        <DetailPrice v-if="hasService" :services="services" :colors="colors" />
        <DetailChart v-if="hasService" :services="services" :colors="colors" :hover-colors="hoverColors" />
      </div>
      <p :class="['detail-empty', {'is-visible': !hasService}]">
        <span>With Great Power</span>
        <span>Comes Great Responsibility</span>
      </p>
    </div>
  </article>
</template>

<script>
import Color from 'color'
import ServicePartsPrice from '@/components/service/parts/ServicePartsPrice'
import DetailCopy from '@/components/detail/DetailCopy'
import DetailPrice from '@/components/detail/DetailPrice'
import DetailChart from '@/components/detail/DetailChart'
import meta from '@/config/meta'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'
import { totalTable } from '@/lib/calc/total'

export default {
  name: 'DetailIndex',
  components: {
    ServicePartsPrice,
    DetailCopy,
    DetailPrice,
    DetailChart
  },
  head() {
    return meta.detail
  },
  data() {
    return {
      isCopied: false
    }
  },
  computed: {
    total() {
      return this.$store.state.total
    },
    tables() {
      return this.$store.state.tables
    },
    services() {
      return Object.keys(this.tables).reduce((services, serviceKey) => {
        const { name, color } = getService(serviceKey, serviceConfig)
        const { jpy } = totalTable(this.tables[serviceKey])

        if (jpy > 0) {
          return [...services, { key: serviceKey, name, color, total: jpy }]
        }

        return services
      }, [])
    },
    hasService() {
      return this.services.length > 0
    },
    colors() {
      const colorMap = {
        orange: [245, 133, 54],
        red: [224, 82, 67],
        blue: [46, 115, 184],
        beige: [217, 167, 65]
      }
      const usedColorCount = {
        orange: 0,
        red: 0,
        blue: 0,
        beige: 0
      }

      return this.services.map(service => {
        const rgb = colorMap[service.color]
        const usedCount = usedColorCount[service.color]
        const color = Color.rgb(rgb)
          .lighten(0.08 * usedCount)
          .string()

        usedColorCount[service.color]++

        return color
      })
    },
    hoverColors() {
      return this.colors.map(color => {
        return Color.hsl(color)
          .darken(0.12)
          .string()
      })
    }
  }
}
</script>
