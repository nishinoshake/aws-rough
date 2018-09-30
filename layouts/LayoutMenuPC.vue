<template>
  <div class="menu">
    <div class="menu-inside">
      <h1 class="menu-logo">
        <nuxt-link to="/"><IconLogo /></nuxt-link>
      </h1>
      <nav class="menu-nav">
        <ul class="menu-list">
          <li v-for="service in services" :key="service.key" class="menu-item">
            <nuxt-link :to="`/${service.key}/`">{{ service.name }}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'
import IconLogo from '@/assets/svg/logo.svg'

export default {
  name: 'LayoutMenuPC',
  components: { IconLogo },
  data() {
    return {
      services: serviceConfig
    }
  }
}
</script>
