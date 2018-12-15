<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.elb" />
    <div class="service-inside" :data-test="serviceName" v-for="serviceName in ['clb', 'alb', 'nlb']" :key="serviceName">
      <ServiceTemplateLabel :label="service[serviceName].fullname" />
      <ServiceTemplateCalc :service="service[serviceName]" />
    </div>
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">複数のEC2インスタンスにトラフィックを分散するサービスです。<br>利用する台数とデータ転送量によって料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">台数</h3>
        <p class="text">利用するロードバランサーの台数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">ロードバランサーで処理されるデータ量の合計をGB単位で入力してください。</p>
        <p class="text">Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。</p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
      <section class="section-child">
        <h3 class="title-small">LCU</h3>
        <p class="text">Load Balancer Capacity Unit(LCU)を入力してください。</p>
        <p class="text">名前だけではピンときませんが、単位時間あたりの接続数や帯域幅をもとに算出される数値です。このサイトでざっくり説明するのは難しいので、<ExternalLink href="https://aws.amazon.com/jp/elasticloadbalancing/pricing/">公式の料金表</ExternalLink>を参考に算出していただくか、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html">公式のツール</ExternalLink>をお使いください。</p>
      </section>
    </section>
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
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceELB',
  components: { ServiceTemplateTitle, ServiceTemplateLabel, ServiceTemplateCalc, ExternalLink },
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
