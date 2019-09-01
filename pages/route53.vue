<template>
  <ServiceTemplate service-name="route53">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="入力項目の補足">
          <section class="section-child">
            <h3 class="title-small"><span>ホストゾーン数</span></h3>
            <p class="text">Route53で管理するドメインの数を入力してください。</p>
            <p class="text">
              example.comとexample.netのふたつのドメインを管理する場合は、ホストゾーン数は2つになります。サブドメインを使用する場合は、同一のホストゾーンで管理することになるので、example.comとsub.example.comを使用してもホストゾーン数は1つです。
            </p>
          </section>

          <section class="section-child">
            <h3 class="title-small"><span>クエリ数</span></h3>
            <p class="text">DNSクエリの数を入力してください。</p>
            <p class="text">料金が安いため、余程トラフィックが多い場合でなければ、適当な数値でいいと思います。</p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsCondition></ServicePartsCondition>

        <ServicePartsAccordion title="対象外のもの">
          <section class="section-child">
            <h3 class="title-small"><span>レイテンシーベースルーティングクエリなど</span></h3>
            <p class="text">
              標準的クエリ以外を利用する場合や、ヘルスチェックを行う場合は料金がかかります。詳しくは<ExternalLink
                href="https://aws.amazon.com/jp/route53/pricing/"
                >公式の料金表</ExternalLink
              >をご確認ください。
            </p>
          </section>
        </ServicePartsAccordion>
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

export default {
  name: 'ServiceRoute53',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.route53
  }
}
</script>
