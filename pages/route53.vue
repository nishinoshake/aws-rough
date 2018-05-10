<template>
  <ServiceTemplate service-name="route53">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">可用性と拡張性に優れたDNSのサービスです。</p>
      <p class="text">主に、ホストゾーン数とクエリ数で料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">ホストゾーン数</h3>
        <p class="text">Route53で管理するドメインの数を入力してください。</p>
        <p class="text">example.comとexample.netのふたつのドメインを管理する場合は、ホストゾーン数は2つになります。サブドメインを使用する場合は、同一のホストゾーンで管理することになるので、example.comとsub.example.comを使用してもホストゾーン数は1つです。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">クエリ数</h3>
        <p class="text">DNSクエリの数を入力してください。</p>
        <p class="text">料金が安いため、余程トラフィックが多い場合でなければ、適当な数値でいいと思います。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">レイテンシーベースルーティングクエリなど</h3>
        <p class="text">標準的クエリ以外を利用する場合や、ヘルスチェックを行う場合は料金がかかります。詳しくは<ExternalLink href="https://aws.amazon.com/jp/route53/pricing/">公式の料金表</ExternalLink>をご確認ください。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceRoute53',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink },
  head() {
    return meta.route53
  }
}
</script>
