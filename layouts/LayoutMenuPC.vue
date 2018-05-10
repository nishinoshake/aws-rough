<template>
  <div class="menu">
    <div class="menu-inside">
      <h1 class="menu-logo">
        <router-link to="/"><IconLogo /></router-link>
      </h1>
      <nav class="menu-nav">
        <ul class="menu-list">
          <li v-for="service in services" :key="service.key" class="menu-item">
            <router-link :to="service.key">{{ service.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import serviceConfig from '@/config/service'
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
