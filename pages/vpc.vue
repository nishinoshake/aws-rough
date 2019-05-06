<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.vpc" />
    <div class="service-inside" :data-test="serviceName" v-for="serviceName in ['natgw']" :key="serviceName">
      <ServiceTemplateLabel :label="service[serviceName].fullname" />
      <ServiceTemplateCalc :service="service[serviceName]" />
    </div>
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">
        AWS上にサブネットやルートテーブルなどを定義したネットワークを構築できるサービスです。<br />
        基本的な使用は無料ですが、NAT Gatewayなどを使う場合は料金が発生します。
      </p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">個数</h3>
        <p class="text">利用するNAT Gatewayの個数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">処理データ量</h3>
        <p class="text">NAT Gatewayで処理されるデータ量の合計をGB単位で入力してください。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">VPN/PrivateLink</h3>
        <p class="text">
          <ExternalLink href="https://aws.amazon.com/jp/vpn/">AWS VPN</ExternalLink>や<ExternalLink
            href="https://aws.amazon.com/jp/privatelink/"
            >AWS PrivateLink</ExternalLink
          >を使う場合は料金が発生しますが、本サイトでは未対応です。<br />
          <ExternalLink href="https://aws.amazon.com/jp/vpc/pricing/">料金表</ExternalLink
          >をご確認いただくか、<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
            >公式のツール</ExternalLink
          >を使用してください。
        </p>
      </section>
    </ServicePartsExclude>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateLabel from '@/components/service/template/ServiceTemplateLabel'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfigVPC from '@/config/service/vpc'
import serviceConfigNATGW from '@/config/service/natgw'
import meta from '@/config/meta'

export default {
  name: 'ServiceVPC',
  components: { ServiceTemplateTitle, ServiceTemplateLabel, ServiceTemplateCalc, ServicePartsExclude, ExternalLink },
  head() {
    return meta.vpc
  },
  data() {
    return {
      service: {
        vpc: serviceConfigVPC,
        natgw: serviceConfigNATGW
      }
    }
  }
}
</script>
