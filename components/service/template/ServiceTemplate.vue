<template>
  <article class="service">
    <div class="service-header">
      <ServiceTemplateTitle :service="service" />
      <ServiceTemplateCalc :service="service" />
    </div>
    <div class="service-body">
      <section class="section">
        <h2 class="title-section" id="zakkuri">
          <a href="#zakkuri"
            ><span class="title-section-large">{{ service.name }}</span
            >についてざっくり</a
          >
        </h2>
        <div class="service-zakuri">
          <slot name="zakuri" />
        </div>
      </section>

      <section class="section section-notice">
        <section class="section" v-if="hasHelp">
          <h2 class="title-section" id="help"><a href="#help">入力項目の補足</a></h2>
          <div class="service-zakuri">
            <slot name="help" />
          </div>
        </section>

        <section class="section">
          <h2 class="title-section" id="condition"><a href="#condition">料金計算の前提</a></h2>
          <div class="service-zakuri">
            <slot name="fullCondition" v-if="hasFullCondition" />
            <ServicePartsCondition v-else>
              <slot name="condition" />
            </ServicePartsCondition>
          </div>
        </section>

        <section class="section" v-if="hasDisclaimer">
          <h2 class="title-section" id="disclaimer"><a href="#disclaimer">対象外のもの</a></h2>
          <div class="service-zakuri">
            <slot name="disclaimer" />
          </div>
        </section>
      </section>

      <section class="section">
        <h2 class="title-section" id="code">
          <a href="#code"
            ><span class="title-section-large">{{ service.name }}</span
            >の料金計算式をざっくり</a
          >
        </h2>
        <div class="service-zakuri">
          <p class="text">ざっくりこんな感じで料金を計算しています。</p>
          <ServicePartsCode :service-name="serviceName" />
        </div>
      </section>

      <!-- <ServiceTemplateAds /> -->
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ServicePartsCode from '@/components/service/parts/ServicePartsCode'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
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
