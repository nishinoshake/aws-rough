<template>
  <nav :class="['menu', { 'is-open': isMenuOpen, 'is-small': isSmall }]" ref="menu">
    <div class="menu-frame">
      <div class="menu-list-container">
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
      isSmall: false
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
      const menuHeight = parseInt(this.$refs.menu.offsetHeight, 10)

      document.documentElement.style.setProperty('--view-height', `${viewHeight}px`)
      document.documentElement.style.setProperty('--menu-height', `${menuHeight}px`)

      if (window.matchMedia('(max-width: 1192px)').matches) {
        return
      }

      this.isSmall = menuHeight > window.innerHeight
    },
    toggle() {
      this.TOGGLE_MENU()
    }
  }
}
</script>
