<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.elb" />
    <div
      class="service-inside"
      :data-test="serviceName"
      v-for="serviceName in ['clb', 'alb', 'nlb']"
      :key="serviceName"
    >
      <ServiceTemplateLabel :label="service[serviceName].fullname" />
      <ServiceTemplateCalc :service="service[serviceName]" />
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan">
          <span>ざっくりわかるELB</span>
        </p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text">トラフィックを分散してくれるやつ（ロードバランサー）。</p>
            <p class="text">
              基本的にはインスタンスが複数台の場合に使いますが、
              <br class="pc" />
              無料の証明書を利用してSSLの終端ができたりもするので、
              <br class="pc" />
              お金が許すなら、インスタンスが1台の場合でも挟んでおいた方が、後々の拡張がしやすいです。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>補足と前提</span></p>
        <div class="service-summary accordion-list">
          <ServicePartsAccordion title="入力項目の補足">
            <section class="section-child">
              <h3 class="title-small"><span>台数</span></h3>
              <p class="text">利用するロードバランサーの台数を入力してください。</p>
            </section>
            <section class="section-child">
              <h3 class="title-small"><span>データ転送量</span></h3>
              <p class="text">ロードバランサーで処理されるデータ量の合計をGB単位で入力してください。</p>
              <p class="text">
                Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
              </p>
              <pre>2 * 100000 / 1024 ≒ 195GB</pre>
            </section>
            <section class="section-child">
              <h3 class="title-small"><span>LCU</span></h3>
              <p class="text">Load Balancer Capacity Unit(LCU)を入力してください。</p>
              <p class="text">
                名前だけではピンときませんが、単位時間あたりの接続数や帯域幅をもとに算出される数値です。このサイトでざっくりした説明するのは難しいので、<ExternalLink
                  href="https://aws.amazon.com/jp/elasticloadbalancing/pricing/"
                  >公式の料金表</ExternalLink
                >を参考に算出していただくか、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
                  >公式のツール</ExternalLink
                >をお使いください。
              </p>
            </section>
          </ServicePartsAccordion>
          <ServicePartsCondition></ServicePartsCondition>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateLabel from '@/components/service/template/ServiceTemplateLabel'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import serviceConfigELB from '@/config/service/elb'
import serviceConfigCLB from '@/config/service/clb'
import serviceConfigALB from '@/config/service/alb'
import serviceConfigNLB from '@/config/service/nlb'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceELB',
  components: {
    ServiceTemplateTitle,
    ServiceTemplateLabel,
    ServiceTemplateCalc,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
  head() {
    return meta.elb
  },
  data() {
    return {
      service: {
        elb: serviceConfigELB,
        clb: serviceConfigCLB,
        alb: serviceConfigALB,
        nlb: serviceConfigNLB
      }
    }
  }
}
</script>
