<template>
  <ServiceArticle service-name="vpc">
    <template v-slot:calc>
      <div>
        <div class="service-inside" :data-test="serviceName" v-for="serviceName in ['natgw']" :key="serviceName">
          <ServiceLabel :label="service[serviceName].fullname" />
          <ServiceCalc :service="service[serviceName]" />
        </div>
      </div>
    </template>

    <template v-slot:zakuri>
      <p class="text">
        AWS上にネットワークを構築できるやつ。
      </p>
      <p class="text">
        サブネットを作成したり、ルートテーブルやゲートウェイを設定したり、色々できます。VPCの利用自体は無料ですが、プライベートサブネットから外へ出るためのNATゲートウェイは有料です。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>個数</span></h3>
        <p class="text">利用するNAT Gatewayの個数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>処理データ量</span></h3>
        <p class="text">NAT Gatewayで処理されるデータ量の合計をGB単位で入力してください。</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>VPN/PrivateLink</span></h3>
        <p class="text">
          <ExternalLink href="https://aws.amazon.com/jp/vpn/">AWS VPN</ExternalLink>や<ExternalLink
            href="https://aws.amazon.com/jp/privatelink/"
            >AWS PrivateLink</ExternalLink
          >を使う場合は料金が発生しますが、本サイトでは未対応です。<ExternalLink
            href="https://aws.amazon.com/jp/vpc/pricing/"
            >料金表</ExternalLink
          >をご確認いただくか、<ExternalLink href="https://calculator.aws">公式のツール</ExternalLink
          >を使用してください。
        </p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import ServiceLabel from '@/components/service/ServiceLabel'
import ServiceCalc from '@/components/service/ServiceCalc'
import ExternalLink from '@/components/ExternalLink'
import serviceConfigVPC from '@/config/service/vpc'
import serviceConfigNATGW from '@/config/service/natgw'
import meta from '@/config/meta'

export default {
  name: 'ServiceVPC',
  components: {
    ServiceArticle,
    ServiceLabel,
    ServiceCalc,
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
