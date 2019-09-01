<template>
  <ServiceTemplate service-name="lambda">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>リクエスト数</span></h3>
            <p class="text">Lambdaへのリクエスト数を入力してください。</p>
            <p class="text">{{ freeRequest }}件のリクエストは無料です。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>メモリ</span></h3>
            <p class="text">Lambdaに割り当てたメモリと、実行された秒数をかけた値を入力してください。</p>
            <p class="text">
              {{
                freeMemory
              }}GB秒までは無料です。<br />GB秒というのが直感的にわかりにくいですが、2048MB割り当てた関数を86,400秒実行した場合、下記のようになります
            </p>
            <pre>(2048 / 1024) * 86400 = 172,800GB秒</pre>
          </section>
        </ServicePartsAccordion>

        <ServicePartsCondition></ServicePartsCondition>
      </div>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'
import { addComma } from '@/lib/price'

export default {
  name: 'ServiceLambda',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.lambda
  },
  computed: {
    priceLambda() {
      return this.$store.state.price.lambda
    },
    freeRequest() {
      if (!this.priceLambda) {
        return ''
      }

      return addComma(this.priceLambda.request.free)
    },
    freeMemory() {
      if (!this.priceLambda) {
        return ''
      }

      return addComma(this.priceLambda.memory.free)
    }
  }
}
</script>
