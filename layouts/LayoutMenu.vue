<template>
  <nav :class="['menu', { 'is-open': isMenuOpen, 'can-scroll': canScroll }]" ref="menu">
    <div class="menu-frame">
      <div class="menu-list-container" ref="menuContainer">
        <p class="menu-logo">
          <nuxt-link to="/" @click.native="handleClick">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184 36">
                <path
                  d="M4.123 32.469l1.908-12.635h13.354l-3.636-8.567H2.359l.5-1.584H15.1l-3.022-7.055h5.579l3.023 7.055h9.432l-.469 1.584h-8.278l3.671 8.567-.468 1.584H11l-1.44 9.467h15.55l-.468 1.584zM24.352 8.1l1.08-6.3h1.548l-1.116 6.3zm2.808 0l1.116-6.3h2.591l-1.115 6.3zM31.2 32.447l.36-1.26h9.66l2.939-8.7-.479-4.41h-13.5l.42-1.26h16.83l.63 5.61-3.27 10.02zM62.189 32.865L51.462 18.826l.72-4.535 14.183-9.683h9.826l-.576 1.584h-3.167L57.4 16.378l-.361 1.656 12.133 14.831zM77.382 21.562l1.872-17.35H84.4l-1.655 15.766h4.211l-.467 1.584zm6.083 11.447l9.287-11.915 1.8-16.882h5.255l-1.943 17.962-8.135 10.835zM120.94 32.469l-2.628-11.195H108.27l-4.176 11.2h-5.76l10.944-28.01h10.366l7.2 28.005zM114.821 6.3h-.972l-4.9 13.1h8.927zM146.321 32.469l-3.852-18.286-8.062 18.286h-5.256l1.116-28.005h5.291l-.935 22.461 6.731-14.686h2.556l3.384 15.661 4.894-23.433h5.292l-5.939 28.005zM157.2 32.469l.864-8.5h5.536l-.647 6.623h10.87l1.224-11.95h-16.376l1.763-14.182h20.986l-.756 7.739h-5.471l.684-5.867h-10.259l-1.26 10.438h16.2l-1.4 15.7z"
                />
              </svg>
            </span>
          </nuxt-link>
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
