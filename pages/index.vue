<template>
  <div class="landing">
    <p class="text-zakuri">はじめてのAWS。</p>
    <p class="text-zakuri">
      どこから手をつけていいのかわからないので、とりあえず入門書を読んでみることに。まずは、本に書いてあるとおりに、
      <nuxt-link to="/vpc/" class="text-zakuri-service"><ServicePartsIcon name="vpc" />VPC</nuxt-link>
      でネットワークを設計して、
      <nuxt-link to="/ec2/" class="text-zakuri-service"><ServicePartsIcon name="ec2" />EC2</nuxt-link>
      のインスタンスを置いてみる。これだけでも使えそうだけど、負荷の増減に対応するには、手前に
      <nuxt-link to="/elb/" class="text-zakuri-service"><ServicePartsIcon name="elb" />ELB</nuxt-link>
      を置くのが定石らしい。
    </p>
    <p class="text-zakuri">
      このところ、開発環境にコンテナを使うことが多いので、本番環境もコンテナで統一しておきたい。AWSのECSではサーバーの管理が不要な
      <nuxt-link to="/fargate/" class="text-zakuri-service"><ServicePartsIcon name="fargate" />Fargate</nuxt-link>
      という実行環境を選べるらしい。こりゃすごいや。
    </p>
    <p class="text-zakuri">
      だいぶコンテナに気持ちを持っていかれたけど、APIの部分はサーバーレスで設計してみたい気持ちもある。
    </p>

    <p class="text-zakuri">「サーバーレスはいいぞ」</p>

    <p class="text-zakuri">
      という話をちらほら耳にするけど、実際に使ってみないと本当のところはわからない。とりあえず、
      <nuxt-link to="/apigateway/" class="text-zakuri-service">
        <ServicePartsIcon name="apigateway" />API Gateway
      </nuxt-link>
      と
      <nuxt-link to="/lambda/" class="text-zakuri-service"><ServicePartsIcon name="lambda" />Lambda</nuxt-link>
      に、ストレージの
      <nuxt-link to="/s3/" class="text-zakuri-service"><ServicePartsIcon name="s3" />S3</nuxt-link>
      を合わせれば、色々できそうだ。
    </p>
    <p class="text-zakuri">
      データベースは、サーバーレスのアーキテクチャと相性が良いらしい
      <nuxt-link to="/dynamodb/" class="text-zakuri-service"><ServicePartsIcon name="dynamodb" />DynamoDB</nuxt-link>
      を使ってみよう。調べてみると、設計にコツが必要らしいので、心が折れたら全体的に構成を見直して、リレーショナルデータベースの
      <nuxt-link to="/rds/" class="text-zakuri-service"><ServicePartsIcon name="rds" />RDS</nuxt-link>
      を使うことも視野に入れておく。どこで見たかは忘れたけど、クラウド向けに最適化された
      <nuxt-link to="/aurora/" class="text-zakuri-service"><ServicePartsIcon name="aurora" />Aurora</nuxt-link>
      がすごいらしい。
    </p>
    <p class="text-zakuri">
      一旦はこれで行けそうだけど、データベースのパフォーマンスが気になり始めたら、インメモリキャッシュとして
      <nuxt-link to="/elasticache/" class="text-zakuri-service">
        <ServicePartsIcon name="elasticache" />ElastiCache
      </nuxt-link>
      の導入も検討しよう。最初から入れておくべきか、悩ましい。
    </p>
    <p class="text-zakuri">
      あとは、
      <nuxt-link to="/cloudfront/" class="text-zakuri-service">
        <ServicePartsIcon name="cloudfront" />CloudFront
      </nuxt-link>
      を手前に置いて、
      <nuxt-link to="/route53/" class="text-zakuri-service"><ServicePartsIcon name="route53" />Route53</nuxt-link>
      でドメインの設定をすれば、とりあえず始められそうだ。
    </p>
    <p class="text-zakuri">しかしこれ、<br class="sp" />一体いくらかかるんだ？</p>
    <p class="text-zakuri">ざっくりとした料金を知りたい方は、メニューから気になるサービスを選択してください。</p>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { MONTHLY_DATE } from '@/config/constants'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServicePartsIcon },
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
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : 'xxx'
    },
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
