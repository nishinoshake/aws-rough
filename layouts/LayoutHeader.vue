<template>
  <header class="l-header">
    <div class="l-header-inner">
      <div class="l-header-box">
        <LayoutCart :total="$store.state.total.jpy" />
      </div>
    </div>
  </header>
</template>

<script>
import LayoutCart from '@/layouts/LayoutCart'
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutHeader',
  components: { LayoutCart },
  data() {
    return {
      services: serviceConfig
    }
  }
}
</script>
