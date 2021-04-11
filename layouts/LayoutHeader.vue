<template>
  <header class="header" id="header">
    <div class="header-inner">
      <div class="header-box" ref="box">
        <LayoutCart :total="$store.state.total.jpy" />
      </div>
    </div>
  </header>
</template>

<script>
import LayoutCart from '@/layouts/LayoutCart'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutHeader',
  components: { LayoutCart, ExternalLink },
  data() {
    return {
      services: serviceConfig
    }
  },
  mounted() {
    this.updateCssVariable()

    if (typeof ResizeObserver === 'undefined') {
      return
    }

    const resizeObserver = new ResizeObserver(entries => {
      this.updateCssVariable()
    })
    resizeObserver.observe(this.$refs.box)
  },
  methods: {
    updateCssVariable() {
      document.documentElement.style.setProperty('--header-width', `${Math.floor(this.$refs.box.clientWidth)}px`)
    }
  }
}
</script>
