<template>
  <header class="header" id="header">
    <div class="header-inner">
      <ul class="header-list">
        <li class="header-item">
          <nuxt-link to="/" class="header-link">ざっくりAWS</nuxt-link>
        </li>
        <li class="header-item">
          <nuxt-link to="/about/" class="header-link">ABOUT</nuxt-link>
        </li>
        <li class="header-item">
          <a href="https://github.com/nishinoshake/aws-rough" class="header-link" target="_blank" rel="noopener"
            >GitHub</a
          >
        </li>
      </ul>
      <LayoutCart :total="$store.state.total.jpy" />
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
  }
}
</script>
