<template>
  <div class="landing">
    <p class="text-zakuri">はじめてのAWS。</p>
    <p class="text-zakuri">
      提供しているサービスが多すぎて、<br />どこから手をつければいいのか・・・<br />とりあえず入門書を読み進めることに。
    </p>
    <p class="text-zakuri">
      まずは
      <nuxt-link to="/vpc/" class="text-zakuri-service mod-orange"><ServicePartsIcon name="vpc" />VPC</nuxt-link>
      でネットワークを設計し、<br />
      そこに
      <nuxt-link to="/ec2/" class="text-zakuri-service mod-orange"><ServicePartsIcon name="ec2" />EC2</nuxt-link>
      を置いていく。<br />
      この単語には聞き覚えがあるぞ。<br />
    </p>
    <p class="text-zakuri">
      これだけでも使えそうだけど、<br />トラフィックの増減に備えて、<br />手前に
      <nuxt-link to="/elb/" class="text-zakuri-service mod-orange"><ServicePartsIcon name="elb" />ELB</nuxt-link>
      を置くのが定石らしい。
    </p>
    <p class="text-zakuri">
      とりあえず最低限の環境はできたが、<br />
      欲を言えばDockerを使いたい。
    </p>
    <p class="text-zakuri">
      ECSでは、サーバーの管理が不要な<br />
      <nuxt-link to="/fargate/" class="text-zakuri-service mod-orange">
        <ServicePartsIcon name="fargate" />Fargate
      </nuxt-link>
      というやつが選べるらしい。<br />
    </p>
    <p class="text-zakuri">こりゃすごいや。</p>
    <p class="text-zakuri">
      すでにお腹がいっぱいだけど、<br />APIの部分はサーバーレスで<br />設計してみたい気持ちもある。
    </p>

    <p class="text-zakuri">「サーバーレスはいいぞ」</p>

    <p class="text-zakuri">
      という話をちらほら耳にするが、<br />実際に使ってみないと、<br />本当のところはわからない。
    </p>
    <p class="text-zakuri">
      <nuxt-link to="/apigateway/" class="text-zakuri-service mod-beige">
        <ServicePartsIcon name="apigateway" />API Gateway
      </nuxt-link>
      と
      <nuxt-link to="/lambda/" class="text-zakuri-service mod-orange">
        <ServicePartsIcon name="lambda" />Lambda
      </nuxt-link>
      に、<br />ストレージの
      <nuxt-link to="/s3/" class="text-zakuri-service mod-red"> <ServicePartsIcon name="s3" />S3 </nuxt-link>
      をあわせれば、<br />いろいろとできそうな気がする。
    </p>
    <p class="text-zakuri">とりあえず、やってみよう。</p>
    <p class="text-zakuri">
      データベースは、<br />サーバーレスでスケーラブルな<br />
      <nuxt-link to="/dynamodb/" class="text-zakuri-service mod-blue">
        <ServicePartsIcon name="dynamodb" />DynamoDB
      </nuxt-link>
      を使うことに。
    </p>

    <p class="text-zakuri">
      よくよく調べてみると、<br />設計にコツが必要らしいので、<br />途中で心が折れるかもしれない。
    </p>
    <p class="text-zakuri">
      そのときは潔く、<br />すぐに馴染めそうな
      <nuxt-link to="/rds/" class="text-zakuri-service mod-blue"> <ServicePartsIcon name="rds" />RDS </nuxt-link>
      <br />
      を使うことも視野に入れておこう。
    </p>
    <p class="text-zakuri">
      どこで見たかは覚えてないが、<br />
      <nuxt-link to="/aurora/" class="text-zakuri-service mod-blue">
        <ServicePartsIcon name="aurora" />Aurora
      </nuxt-link>
      とかいうやつがすごいらしい。
    </p>
    <p class="text-zakuri">
      一旦これで走り始めて、<br />手軽なキャッシュが欲しくなったら、<br />
      <nuxt-link to="/elasticache/" class="text-zakuri-service mod-blue">
        <ServicePartsIcon name="elasticache" />ElastiCache
      </nuxt-link>
      の導入も考えよう。
    </p>
    <p class="text-zakuri">
      あとは
      <nuxt-link to="/cloudfront/" class="text-zakuri-service mod-red">
        <ServicePartsIcon name="cloudfront" />CloudFront
      </nuxt-link>
      を手前に置いて、<br />
      <nuxt-link to="/route53/" class="text-zakuri-service mod-orange">
        <ServicePartsIcon name="route53" />Route53
      </nuxt-link>
      でドメインを設定すれば、<br />とりあえず公開できそうだ。
    </p>
    <p class="text-zakuri">しかしこれ、一体いくらかかるんだ？</p>
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
