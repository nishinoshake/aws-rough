<template>
  <div class="landing">
    <section class="section">
      <div class="service-zakuri">
        <ul class="landing-service-list">
          <li :class="`landing-service-item mod-${service.color}`" v-for="service in services" :key="service.key">
            <nuxt-link :to="`/${service.key}/`" class="landing-service-link">
              <span class="landing-service-inner">
                <span class="landing-service-name">{{ service.name }}</span>
                <span v-if="service.fullname" class="landing-service-fullname">{{ service.fullname }}</span>
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServiceTemplateAds },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  head() {
    return meta.index
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
