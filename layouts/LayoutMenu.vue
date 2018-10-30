<template>
  <div :class="['menu', {'is-open': isOpen}]">
    <div class="menu-container">
      <h1 class="menu-logo">
        <nuxt-link to="/" @click.native="close()">
          <span><IconLogo /></span>
        </nuxt-link>
      </h1>
      <nav class="menu-nav">
        <ul class="menu-list">
          <li v-for="service in services" :key="service.key" class="menu-item">
            <nuxt-link :to="service.href" @click.native="close()">{{ service.name }}</nuxt-link>
          </li>
          <li class="menu-item mod-detail">
            <nuxt-link to="/detail/" @click.native="close()">内訳を見る</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <button class="menu-button" @click="toggle">{{ isOpen ? 'CLOSE' : 'MENU' }}</button>
  </div>
</template>

<script>
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service/mokuji'
import IconLogo from '@/assets/svg/logo.svg'

export default {
  name: 'LayoutMenu',
  components: { IconLogo, ServicePartsIcon },
  data() {
    return {
      isOpen: false,
      services: serviceConfig
    }
  },
  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
