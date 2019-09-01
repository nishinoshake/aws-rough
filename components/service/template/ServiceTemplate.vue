<template>
  <article class="service">
    <ServiceTemplateTitle :service="service" />
    <div class="section">
      <ServiceTemplateCalc :service="service" />
    </div>
    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>補足と前提</span></p>
        <slot name="aside" />
      </div>
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceTemplate',
  components: { ServiceTemplateCalc, ServiceTemplateTitle },
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
