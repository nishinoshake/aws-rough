<template>
  <div class="landing">
    <section class="section">
      <h2 class="title-section">料金が気になるサービスはありますか？</h2>
      <div class="service-content">
        <ul class="landing-service-list">
          <li v-for="service in services" :key="service.key" class="landing-service-item">
            <nuxt-link :class="`landing-service-link mod-${service.color}`" :to="service.href">
              <div class="landing-service-inner">
                <ServicePartsIcon :name="service.key" class="landing-service-icon" />
                <span class="landing-service-body">
                  <span class="landing-service-name">{{ service.name }}</span>
                  <span class="landing-service-desc">{{ service.description }}</span>
                </span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'

export default {
  name: 'LandingIndex',
  components: { ServicePartsIcon },
  head() {
    return meta.index
  },
  data() {
    return {
      services: serviceConfig
    }
  },
  computed: {
    serviceKeys() {
      return serviceConfig.map(service => service.key)
    }
  }
}
</script>
