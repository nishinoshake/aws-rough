<template>
  <nav :class="['l-menu', { 'is-open': isMenuOpen, 'is-small': isSmall }]" ref="menu">
    <div class="l-menu-frame" ref="frame">
      <div class="l-menu-main" ref="menuMain">
        <p class="l-menu-logo">
          <nuxt-link to="/" class="l-menu-logo-link">ざっくりAWS</nuxt-link>
        </p>
        <ul class="l-menu-list">
          <li v-for="service in services" :key="service.key" class="l-menu-item">
            <nuxt-link :class="`l-menu-link mod-${service.color}`" :to="service.href" @click.native="handleClick">
              <AwsIcon :name="service.key" />
              <span>{{ service.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <button :class="['l-menu-button', { 'is-open': isMenuOpen }]" @click="toggle">
      <span class="l-menu-button-icon">
        <span></span>
      </span>
    </button>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import serviceConfig from '@/config/service/mokuji'
import AwsIcon from '@/components/AwsIcon'

export default {
  name: 'LayoutMenu',
  components: { AwsIcon },
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
    },
    isMenuOpen(val) {
      this.$refs.frame.scrollTo(0, 0)
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
  },
  methods: {
    ...mapMutations(['SHOW_MENU', 'HIDE_MENU', 'TOGGLE_MENU']),
    handleClick() {
      this.$emit('change')
    },
    handleResize() {
      const menuMainHeight = this.$refs.menuMain.offsetHeight

      if (window.matchMedia('(max-width: 700px)').matches) {
        return
      }

      this.isSmall = menuMainHeight > window.innerHeight
    },
    toggle() {
      this.TOGGLE_MENU()
    }
  }
}
</script>
