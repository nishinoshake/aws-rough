<template>
  <nav :class="['menu', { 'is-open': isMenuOpen, 'can-scroll': canScroll }]">
    <div class="menu-frame">
      <p class="menu-logo">
        <nuxt-link to="/" @click.native="HIDE_MENU">ZKR<br class="pc" />AWS</nuxt-link>
      </p>
      <ul class="menu-list" ref="menuList">
        <li v-for="service in services" :key="service.key" :class="`menu-item mod-${service.color}`">
          <nuxt-link :to="service.href" @click.native="handleClick">
            <span class="menu-name">{{ service.name }}</span>
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
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import Logo from '@/assets/svg/logo.svg'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutMenu',
  components: { ServicePartsIcon, Logo },
  data() {
    return {
      services: serviceConfig,
      canScroll: false
    }
  },
  computed: {
    ...mapState(['isMenuOpen'])
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', () => this.handleResize())
  },
  methods: {
    ...mapMutations(['HIDE_MENU', 'TOGGLE_MENU']),
    handleClick() {
      this.HIDE_MENU()
      this.$emit('change')
    },
    handleResize() {
      if (window.matchMedia('(max-width: 1192px)').matches) {
        return
      }

      const menuHeight = this.$refs.menuList.offsetHeight
      const menuOffsetY = this.$refs.menuList.getBoundingClientRect().top

      this.canScroll = menuHeight > window.innerHeight - menuOffsetY
    },
    toggle() {
      this.TOGGLE_MENU()
    }
  }
}
</script>
