<template>
  <nav :class="['menu', { 'is-open': isMenuOpen, 'is-small': isSmall }]" ref="menu">
    <div class="menu-frame">
      <p class="menu-logo">
        <nuxt-link to="/" class="menu-logo-link" :class="{ 'is-visible': makura }"
          ><span class="menu-logo-makura">{{ makura || 'ざっくり' }}</span
          >AWS</nuxt-link
        >
      </p>
      <ul class="menu-list">
        <li v-for="service in services" :key="service.key" class="menu-item">
          <nuxt-link :class="`menu-link mod-${service.color}`" :to="service.href" @click.native="handleClick">
            <ServicePartsIcon :name="service.key" />
            <span>{{ service.name }}</span>
          </nuxt-link>
        </li>
      </ul>
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
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'

export default {
  name: 'LayoutMenu',
  components: { ServicePartsIcon },
  data() {
    return {
      makuraLoaded: false,
      services: serviceConfig,
      isSmall: false
    }
  },
  computed: {
    ...mapState(['isMenuOpen', 'makura']),
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

    this.UPDATE_MAKURA()
  },
  methods: {
    ...mapMutations(['SHOW_MENU', 'HIDE_MENU', 'TOGGLE_MENU', 'UPDATE_MAKURA']),
    handleClick() {
      this.$emit('change')
    },
    handleResize() {
      const viewHeight = parseInt(window.innerHeight, 10)
      const menuHeight = parseInt(this.$refs.menu.offsetHeight, 10)
      const contentWidth = parseInt(document.querySelector('.contents').clientWidth, 10)
      const headerHeight = parseInt(document.getElementById('header').clientHeight, 10)

      document.documentElement.style.setProperty('--view-height', `${viewHeight}px`)
      document.documentElement.style.setProperty('--menu-height', `${menuHeight}px`)
      document.documentElement.style.setProperty('--content-width', `${contentWidth}px`)

      if (window.matchMedia('(max-width: 1192px)').matches) {
        return
      }

      this.isSmall = menuHeight + headerHeight > window.innerHeight
    },
    toggle() {
      this.TOGGLE_MENU()
    }
  }
}
</script>
