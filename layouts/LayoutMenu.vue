<template>
  <nav :class="['menu', { 'is-open': isMenuOpen, 'can-scroll': canScroll }]" ref="menu">
    <div class="menu-frame">
      <div class="menu-list-container" ref="menuContainer">
        <p class="menu-logo">
          <nuxt-link to="/" @click.native="handleClick">ざっくりAWS</nuxt-link>
        </p>
        <ul class="menu-list">
          <li v-for="service in services" :key="service.key" class="menu-item">
            <nuxt-link :to="service.href" @click.native="handleClick">
              <span>{{ service.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <button :class="['menu-button', { 'is-open': isMenuOpen }]" @click="toggle">
      <span class="menu-button-icon">
        <span></span>
      </span>
    </button>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutMenu',
  data() {
    return {
      services: serviceConfig,
      canScroll: false
    }
  },
  computed: {
    ...mapState(['isMenuOpen']),
    routeName() {
      return this.$route.name
    }
  },
  watch: {
    async routeName(val) {
      await this.$nextTick()

      this.HIDE_MENU()
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
  },
  methods: {
    ...mapMutations(['HIDE_MENU', 'TOGGLE_MENU']),
    handleClick() {
      this.$emit('change')
    },
    handleResize() {
      const viewHeight = parseInt(window.innerHeight, 10)
      const menuHeight = parseInt(this.$refs.menuContainer.offsetHeight, 10)

      document.documentElement.style.setProperty('--view-height', `${viewHeight}px`)
      document.documentElement.style.setProperty('--menu-height', `${menuHeight}px`)

      if (window.matchMedia('(max-width: 1192px)').matches) {
        return
      }

      const menuOffsetY = this.$refs.menu.getBoundingClientRect().top

      this.canScroll = menuHeight + menuOffsetY > window.innerHeight
    },
    toggle() {
      this.TOGGLE_MENU()
    }
  }
}
</script>
