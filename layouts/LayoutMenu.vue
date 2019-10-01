<template>
  <nav class="menu">
    <div :class="['menu-container', { 'is-open': isOpen }]">
      <div :class="['menu-frame', { 'can-scroll': canScroll }]">
        <ul class="menu-list">
          <li v-for="service in services" :key="service.key" :class="`menu-item mod-${service.color}`">
            <nuxt-link :to="service.href" @click.native="handleClick">
              <ServicePartsIcon :name="service.key" class="menu-icon" />
              <span class="menu-name">{{ service.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <button class="menu-button" @click="toggle">
      <span class="menu-button-icon">
        <img v-if="isOpen" src="/img/icon/times.svg" alt="" />
        <img v-else src="/img/icon/bars.svg" alt="" />
      </span>
      <span class="menu-button-text">{{ buttonText }}</span>
    </button>
  </nav>
</template>

<script>
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutMenu',
  components: { ServicePartsIcon },
  data() {
    return {
      services: serviceConfig,
      isOpen: false,
      canScroll: false
    }
  },
  computed: {
    buttonText() {
      return this.isOpen ? 'CLOSE' : 'MENU'
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
  },
  methods: {
    handleClick() {
      this.isOpen = false
      this.$emit('change')
    },
    handleResize() {
      const menuHeight = document.querySelector('.menu-list').offsetHeight
      let footerHeight = 0

      if (window.matchMedia('(max-width: 1280px)').matches) {
        footerHeight = document.querySelector('.footer-action').offsetHeight
      } else {
        footerHeight = document.querySelector('.footer').offsetHeight
      }

      this.canScroll = menuHeight > window.innerHeight - footerHeight
    },
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
