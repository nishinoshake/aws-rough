<template>
  <article>
    <ServiceHeading :service="service" />
    <slot v-if="hasCalc" name="calc" />
    <ServiceCalc v-else :service="service" />
    <div class="notice">
      <Accordion v-if="hasHelp" title="入力項目の補足" slug="help">
        <slot name="help" />
      </Accordion>

      <Accordion title="料金計算の前提" slug="condition">
        <slot name="fullCondition" v-if="hasFullCondition" />
        <Condition v-else>
          <slot name="condition" />
        </Condition>
      </Accordion>

      <Accordion v-if="hasDisclaimer" title="対象外のもの" slug="disclaimer">
        <slot name="disclaimer" />
      </Accordion>
    </div>

    <div class="section-list" itemscope itemtype="https://schema.org/FAQPage">
      <section class="section" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h2 class="heading" itemprop="name">{{ service.name }}についてざっくり</h2>
        <div class="section-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">
            <slot name="zakuri" />
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="heading">{{ service.name }}の料金計算式をざっくり</h2>
        <div class="section-content">
          <CodeBlock :service-name="serviceName" />
          <ServiceSourceLink :service-name="serviceName" />
        </div>
      </section>

      <ServiceAds />
    </div>
  </article>
</template>

<script>
import ServiceHeading from '@/components/service/ServiceHeading'
import ServiceCalc from '@/components/service/ServiceCalc'
import ServiceAds from '@/components/service/ServiceAds'
import ServiceSourceLink from '@/components/service/ServiceSourceLink'
import CodeBlock from '@/components/CodeBlock'
import Condition from '@/components/Condition'
import Accordion from '@/components/Accordion'
import ExternalLink from '@/components/ExternalLink'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceArticle',
  components: {
    ServiceCalc,
    ServiceHeading,
    ServiceAds,
    ServiceSourceLink,
    CodeBlock,
    Condition,
    Accordion,
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
