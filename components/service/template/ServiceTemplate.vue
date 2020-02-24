<template>
  <article class="service">
    <ServiceTemplateTitle :service="service" />
    <div class="section">
      <ServiceTemplateCalc :service="service" />
    </div>
    <div class="section">
      <h2 class="title-section">
        <span>ざっくりわかる{{ service.name }}</span>
      </h2>
      <div class="service-zakuri">
        <slot name="zakuri" />
      </div>
    </div>
    <div class="section">
      <h2 class="title-section"><span>補足と前提</span></h2>
      <slot name="aside" />
    </div>
    <ServiceTemplateAds />
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceTemplate',
  components: { ServiceTemplateCalc, ServiceTemplateTitle, ServiceTemplateAds, ExternalLink },
  props: {
    serviceName: {
      type: String,
      required: true
    }
  },
  computed: {
    service() {
      return getService(this.serviceName, serviceConfig)
    }
  }
}
</script>
