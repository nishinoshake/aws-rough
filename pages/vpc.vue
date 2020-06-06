<template>
  <article class="service">
    <ServiceTemplateTitle :service="service.vpc" />
    <div class="section">
      <div class="service-inside" :data-test="serviceName" v-for="serviceName in ['natgw']" :key="serviceName">
        <ServiceTemplateLabel :label="service[serviceName].fullname" />
        <ServiceTemplateCalc :service="service[serviceName]" />
      </div>
    </div>

    <section class="section">
      <h2 class="title-section" id="zakkuri">
        <a href="#zakkuri">ざっくりわかるVPC</a>
      </h2>
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
    </section>

    <section class="section section-notice">
      <section class="section">
        <h2 class="title-section" id="help"><a href="#help">入力項目の補足</a></h2>
        <div class="service-zakuri">
          <section class="section-child">
            <h3 class="title-small"><span>個数</span></h3>
            <p class="text">利用するNAT Gatewayの個数を入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>処理データ量</span></h3>
            <p class="text">NAT Gatewayで処理されるデータ量の合計をGB単位で入力してください。</p>
          </section>
        </div>
      </section>

      <section class="section">
        <h2 class="title-section" id="condition"><a href="#condition">料金計算の前提</a></h2>
        <div class="service-zakuri">
          <ServicePartsCondition />
        </div>
      </section>

      <section class="section">
        <h2 class="title-section" id="disclaimer"><a href="#disclaimer">対象外のもの</a></h2>
        <div class="service-zakuri">
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
        </div>
      </section>
    </section>

    <section class="section">
      <h2 class="title-section" id="code">
        <a href="#code">NAT Gatewayの料金計算式をざっくり</a>
      </h2>
      <div class="service-zakuri">
        <p class="text">ざっくりこんな感じで料金を計算しています。</p>
        <ServicePartsCode service-name="natgw" />
      </div>
    </section>

    <ServiceTemplateAds />
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateLabel from '@/components/service/template/ServiceTemplateLabel'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ServicePartsCode from '@/components/service/parts/ServicePartsCode'
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
    ServiceTemplateAds,
    ServicePartsCode,
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
