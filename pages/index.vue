<template>
  <div class="landing">
    <h1 class="landing-copy"><em>AWS</em>の料金を、<br>日本円でざっくり。</h1>
    <section class="section">
      <h2 class="title">サービスを選択してください</h2>
      <div class="landing-service-list">
        <section class="landing-service-item" v-for="service in services" :key="service.key">
          <nuxt-link :to="`/${service.key}/`">
            <figure class="landing-service-icon">
              <ServicePartsIcon :name="service.key" />
            </figure>
            <div class="landing-service-summary">
              <h3 class="landing-service-name">{{ service.name }}</h3>
              <p class="landing-service-description">{{ service.description }}</p>
            </div>
          </nuxt-link>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServicePartsIcon },
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
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : 'xxx'
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
