<template>
  <article class="detail">
    <h1 class="large-heading large-heading-ja">
      料金内訳
      <DetailCopy :services="services" />
    </h1>

    <div class="detail-body">
      <div :class="['detail-main', { 'is-visible': hasService }]">
        <div class="detail-main-content">
          <DetailPrice v-if="hasService" :services="services" :colors="colors" />
          <DetailChart v-if="hasService" :services="services" :colors="colors" :hover-colors="hoverColors" />
        </div>
        <ServiceSponsorBanner page-name="detail" />
      </div>
      <p :class="['detail-empty', { 'is-visible': !hasService && !isLoading }]">
        <span>With great power,<br />comes great responsibility</span>
      </p>
      <p :class="['detail-empty', { 'is-visible': isLoading }]">
        <span>Loading...</span>
      </p>
    </div>
  </article>
</template>

<script>
import Color from 'color'
import { mapGetters } from 'vuex'
import Price from '@/components/Price'
import DetailCopy from '@/components/detail/DetailCopy'
import DetailPrice from '@/components/detail/DetailPrice'
import DetailChart from '@/components/detail/DetailChart'
import ServiceSponsorBanner from '@/components/service/ServiceSponsorBanner'
import meta from '@/config/meta'

export default {
  name: 'DetailIndex',
  components: {
    Price,
    DetailCopy,
    DetailPrice,
    DetailChart,
    ServiceSponsorBanner
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
    ...mapGetters(['services', 'hasService']),
    total() {
      return this.$store.state.total
    },
    tables() {
      return this.$store.state.tables
    },
    colors() {
      const colorMap = {
        orange: [255, 153, 0],
        red: [255, 82, 82],
        blue: [82, 127, 255],
        purple: [161, 102, 255],
        pink: [255, 79, 139],
        green: [108, 174, 62]
      }
      const usedColorCount = {
        orange: 0,
        red: 0,
        blue: 0,
        purple: 0,
        pink: 0,
        green: 0
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
    },
    isLoading() {
      return this.$store.state.isDetailLoading
    }
  }
}
</script>
