<template>
  <ServiceArticle service-name="route53">
    <template v-slot:zakuri>
      <p class="text">ドメイン名を解決してくれるやつ（DNS）。</p>
      <p class="text">
        ドメインごとにホストゾーンというものを作成し、そこにDNSレコードを追加していきます。可用性が高く、CloudFrontやS3などのAWSのサービスと連携がしやすいのが特徴です。あまり使われてないかもしれませんが、ドメインの取得もできます。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>ホストゾーン数</span></h3>
        <p class="text">
          Route53で管理するドメインの数を入力してください。example.comとexample.netのふたつのドメインを管理する場合は、ホストゾーン数は2つになります。サブドメインを使用する場合は、同一のホストゾーンで管理することになるので、example.comとsub.example.comを使用してもホストゾーン数は1つです。
        </p>
      </section>

      <section class="section-child">
        <h3 class="small-heading"><span>クエリ数</span></h3>
        <p class="text">
          DNSクエリの数を入力してください。料金が安いため、余程トラフィックが多い場合でなければ、適当な数値でいいと思います。
        </p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>レイテンシーベースルーティングクエリなど</span></h3>
        <p class="text">
          標準的クエリ以外を利用する場合や、ヘルスチェックを行う場合は料金がかかります。詳しくは<ExternalLink
            href="https://aws.amazon.com/jp/route53/pricing/"
            >公式の料金表</ExternalLink
          >をご確認ください。
        </p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Condition from '@/components/Condition'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceRoute53',
  components: { ServiceArticle, Condition, ExternalLink },
  head() {
    return meta.route53
  }
}
</script>
