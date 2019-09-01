<template>
  <div class="landing">
    <h1 class="landing-copy">
      Zakuri AWS helps you estimate monthly cost on AWS.<br class="pc" />Tadashi Tokyo region ni kagiru.
    </h1>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServicePartsIcon },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  head() {
    return meta.index
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : 'xxx'
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
