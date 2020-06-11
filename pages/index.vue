<template>
  <div class="landing">
    <section class="section">
      <h2 class="title-section">AWSの料金を、日本円でざっくり</h2>
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
    <section class="section">
      <h2 class="title-section">適当なページに飛ぶガチャ</h2>
      <div class="service-content">
        <div class="landing-ball-frame">
          <button type="button" class="landing-ball" @mouseenter="handleMouseenter" @click="handleClick">
            <span class="landing-ball-body"></span>
            <p class="landing-ball-caption">ガチャ</p>
          </button>
        </div>
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
  },
  methods: {
    handleClick() {
      const key = this.serviceKeys[Math.floor(Math.random() * this.serviceKeys.length)]
      this.$router.push({ path: `/${key}/` })
    }
  }
}
</script>
