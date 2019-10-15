<template>
  <div class="landing">
    <p class="landing-text">
      AWSの料金を、<br class="sp" />ざっくり計算できるサイトです。
      <br />
      <br class="sp" />
      料金が気になるサービスを<br class="sp" />メニューから選択してください。
      <br />
      <br class="sp" />
      BiSHのライブを観たい方は、<br class="sp" /><ExternalLink
        href="https://www.youtube.com/results?search_query=BRiNG+iCiNG+SHiT+HORSE+TOUR+FiNAL"
        >こちら</ExternalLink
      >から離脱してください。
    </p>
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
