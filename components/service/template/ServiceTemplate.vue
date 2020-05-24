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

    <section class="section section-notice">
      <section class="section" v-if="hasHelp">
        <h2 class="title-section"><span>入力項目の補足</span></h2>
        <div class="service-zakuri">
          <slot name="help" />
        </div>
      </section>

      <section class="section">
        <h2 class="title-section"><span>料金計算の前提</span></h2>
        <div class="service-zakuri">
          <slot name="fullCondition" v-if="hasFullCondition" />
          <ServicePartsCondition v-else>
            <slot name="condition" />
          </ServicePartsCondition>
        </div>
      </section>

      <section class="section" v-if="hasDisclaimer">
        <h2 class="title-section"><span>対象外のもの</span></h2>
        <div class="service-zakuri">
          <slot name="disclaimer" />
        </div>
      </section>
    </section>

    <section class="section">
      <h2 class="title-section">
        <span>{{ service.name }}の料金計算式をざっくり</span>
      </h2>
      <div class="service-zakuri">
        <p class="text">ざっくりこんな感じで料金を計算しています。</p>
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
