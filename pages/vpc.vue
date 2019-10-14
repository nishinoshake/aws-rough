<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.vpc" />
    <div class="service-inside" :data-test="serviceName" v-for="serviceName in ['natgw']" :key="serviceName">
      <ServiceTemplateLabel :label="service[serviceName].fullname" />
      <ServiceTemplateCalc :service="service[serviceName]" />
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>補足と前提</span></p>
        <div class="service-summary accordion-list">
          <ServicePartsAccordion title="入力項目の補足">
            <section class="section-child">
              <h3 class="title-small"><span>個数</span></h3>
              <p class="text">利用するNAT Gatewayの個数を入力してください。</p>
            </section>
            <section class="section-child">
              <h3 class="title-small"><span>処理データ量</span></h3>
              <p class="text">NAT Gatewayで処理されるデータ量の合計をGB単位で入力してください。</p>
            </section>
          </ServicePartsAccordion>

          <ServicePartsCondition></ServicePartsCondition>

          <ServicePartsAccordion title="対象外のもの">
            <section class="section-child">
              <h3 class="title-small"><span>VPN/PrivateLink</span></h3>
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
          </ServicePartsAccordion>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="section-box">
        <p class="title-daitan">
          <span>ざっくりVPC</span>
        </p>
        <div class="service-zakuri">
          <div class="section-child">
            <p class="text">
              AWS上にネットワークを構築できるやつ。
            </p>
            <p class="text">
              サブネットを作成したり、ルートテーブルやゲートウェイを設定したり、色々できます。
              <br class="pc" />
              VPCの利用自体は無料ですが、プライベートサブネットから外へ出るためのNATゲートウェイは有料です。
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateLabel from '@/components/service/template/ServiceTemplateLabel'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfigVPC from '@/config/service/vpc'
import serviceConfigNATGW from '@/config/service/natgw'
import meta from '@/config/meta'

export default {
  name: 'ServiceVPC',
  components: {
    ServiceTemplateTitle,
    ServiceTemplateLabel,
    ServiceTemplateCalc,
    ServicePartsExclude,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
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
