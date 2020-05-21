<template>
  <article class="service">
    <ServiceTemplateTitle :service="service" />
    <div class="section">
      <ServiceTemplateCalc :service="service" />
    </div>
    <section class="section">
      <h2 class="title-section">
        <span>ざっくりわかる{{ service.name }}</span>
      </h2>
      <div class="service-zakuri">
        <slot name="zakuri" />
      </div>
    </section>
    <div class="section">
      <slot name="aside" />
    </div>
    <section class="section">
      <h2 class="title-section">
        <span>料金の計算式をざっくり</span>
      </h2>
      <div class="service-zakuri">
        <ServicePartsCode :service-name="serviceName" />
      </div>
    </section>
    <ServiceTemplateAds />
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ServicePartsCode from '@/components/service/parts/ServicePartsCode'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceTemplate',
  components: { ServiceTemplateCalc, ServiceTemplateTitle, ServiceTemplateAds, ServicePartsCode, ExternalLink },
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
