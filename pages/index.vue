<template>
  <div class="landing">
    <section class="section">
      <h1 class="title-section"><span>料金が気になるサービスはありますか？</span></h1>
      <div class="service-zakuri">
        <ul class="landing-service-list">
          <li :class="`landing-service-item mod-${service.color}`" v-for="service in services" :key="service.key">
            <nuxt-link :to="`/${service.key}/`">
              <span class="landing-service-name">{{ service.name }}</span>
              <span class="landing-service-description">{{ service.description }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <div class="landing-ticker">
      <div class="landing-ticker-list">
        <p class="landing-ticker-item" v-for="i of 2" :key="i">
          はじめてのAWS。とりあえず入門書を読み進める。
          <nuxt-link to="/vpc/" class="text-link">VPC</nuxt-link>
          でネットワークを設計し、 そこに
          <nuxt-link to="/ec2/" class="text-link">EC2</nuxt-link>
          を置くらしい。 この単語には聞き覚えがあるぞ。 これだけでも使えそうだけど、トラフィックの増減に備えて、手前に
          <nuxt-link to="/elb/" class="text-link">ELB</nuxt-link>
          を置くのが定石とのこと。 とりあえずサーバーは起動できたが、 欲を言えばDockerを使いたい。
          ECSでは、サーバーの管理が不要な
          <nuxt-link to="/fargate/" class="text-link">Fargate</nuxt-link>
          というやつが使えるらしい。 こりゃすごいや。
          すでにお腹がいっぱいだけど、APIの部分はサーバーレスで設計してみたい気持ちもある。 「サーバーレスはいいぞ」
          という話をちらほら耳にするが、実際に使ってみないと、本当のところはわからない。
          <nuxt-link to="/apigateway/" class="text-link">
            API Gateway
          </nuxt-link>
          と
          <nuxt-link to="/lambda/" class="text-link">Lambda</nuxt-link>
          に、ストレージの
          <nuxt-link to="/s3/" class="text-link">S3</nuxt-link>
          をあわせれば、いろいろとできそうな気がする。 とりあえず、やってみよう。
          データベースは、サーバーレスでスケーラブルな
          <nuxt-link to="/dynamodb/" class="text-link">DynamoDB</nuxt-link>
          を使うことに。 よくよく調べてみると、設計にコツが必要らしいので、途中で心が折れるかもしれない。
          そのときは潔く、すぐに馴染めそうな <nuxt-link to="/rds/" class="text-link">RDS</nuxt-link>
          を使うことも視野に入れておこう。 どこで見たかは覚えてないが、
          <nuxt-link to="/aurora/" class="text-link">Aurora</nuxt-link>とかいうやつがすごいらしい。
          一旦これで走り始めて、手軽なキャッシュが欲しくなったら、
          <nuxt-link to="/elasticache/" class="text-link">
            ElastiCache
          </nuxt-link>
          の導入も考えよう。 あとは、
          <nuxt-link to="/cloudfront/" class="text-link">
            CloudFront
          </nuxt-link>
          を手前に置いて、
          <nuxt-link to="/route53/" class="text-link">Route53</nuxt-link>
          でドメインの設定をすれば、とりあえず公開できそうだ。 しかしこれ、一体いくらかかるんだ？
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServiceTemplateAds },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  head() {
    return meta.index
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
