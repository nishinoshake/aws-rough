<template>
  <article class="service">
    <div class="service-header">
      <ServiceTemplateTitle :service="service" />
      <slot v-if="hasCalc" name="calc" />
      <ServiceTemplateCalc v-else :service="service" />
    </div>
    <div class="service-container">
      <div class="service-body">
        <section class="accordion-list" id="notice">
          <ServicePartsAccordion v-if="hasHelp" title="入力項目の補足">
            <slot name="help" />
          </ServicePartsAccordion>

          <ServicePartsAccordion title="料金計算の前提">
            <slot name="fullCondition" v-if="hasFullCondition" />
            <ServicePartsCondition v-else>
              <slot name="condition" />
            </ServicePartsCondition>
          </ServicePartsAccordion>

          <ServicePartsAccordion v-if="hasDisclaimer" title="対象外のもの">
            <slot name="disclaimer" />
          </ServicePartsAccordion>
        </section>

        <div class="section-list">
          <section class="section" id="description">
            <h2 class="title-section">
              <span class="title-section-large">{{ service.name }}</span
              >についてざっくり
            </h2>
            <div class="service-content">
              <slot name="zakuri" />
            </div>
          </section>

          <section class="section" id="function">
            <h2 class="title-section">
              <span class="title-section-large">{{ service.name }}</span
              >の料金計算式をざっくり
            </h2>
            <div class="service-content">
              <ServicePartsCode :service-name="serviceName" />
            </div>
          </section>

          <ServiceTemplateAds />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ServicePartsCode from '@/components/service/parts/ServicePartsCode'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsUnkown from '@/components/service/parts/ServicePartsUnkown'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceTemplate',
  components: {
    ServiceTemplateCalc,
    ServiceTemplateTitle,
    ServiceTemplateAds,
    ServicePartsCode,
    ServicePartsCondition,
    ServicePartsAccordion,
    ServicePartsUnkown,
    ExternalLink
  },
  props: {
    serviceName: {
      type: String,
      required: true
    },
    hideCondition: {
      type: Boolean
    }
  },
  computed: {
    service() {
      return getService(this.serviceName, serviceConfig)
    },
    hasCalc() {
      return !!this.$slots.calc
    },
    hasFullCondition() {
      return !!this.$slots.fullCondition
    },
    hasHelp() {
      return !!this.$slots.help
    },
    hasDisclaimer() {
      return !!this.$slots.disclaimer
    }
  }
}
</script>
