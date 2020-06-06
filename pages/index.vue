<template>
  <div class="landing">
    <p class="landing-please landing-please-menu">お急ぎの方はメニューからサービスを選んでください</p>
    <p class="landing-please landing-please-poem">AWSが初めての方は文章からも選べます</p>
    <div class="service-body">
      <div class="service-main">
        <div class="landing-poem">
          <section class="landing-poem-section">
            <h2 class="title-section" id="intro"><a href="#intro">導入</a></h2>
            <p class="landing-poem-text">はじめてのAWS。<br />とりあえず入門書を読み進める。</p>
            <p class="landing-poem-text">
              <nuxt-link to="/vpc/" class="mod-orange">VPC</nuxt-link>でネットワークを設計してから、<br class="pc" />
              <nuxt-link to="/ec2/" class="mod-orange">EC2</nuxt-link>を置くらしい。この単語には聞き覚えがあるぞ。<br
                class="pc"
              />
              念のためにロードバランサーの<nuxt-link to="/elb/" class="mod-orange">ELB</nuxt-link>も挟んでおこう。
            </p>
          </section>

          <section class="landing-poem-section">
            <h2 class="title-section" id="ecs"><a href="#ecs">コンテナ</a></h2>
            <p class="landing-poem-text">
              これだけでも悪くないけど、欲を言えばDockerを使いたい。 <br class="pc" />ECSで<nuxt-link
                to="/fargate/"
                class="mod-orange"
                >Fargate</nuxt-link
              >を使用すると、サーバーの管理が不要になると。<br class="pc" />なんなんだこれは・・・革新的すぎるぜ。
            </p>
          </section>

          <section class="landing-poem-section">
            <h2 class="title-section" id="database"><a href="#database">データベース</a></h2>
            <p class="landing-poem-text">
              データベースは、直感で<nuxt-link to="/dynamodb/" class="mod-blue">DynamoDB</nuxt-link>に決める。<br
                class="pc"
              />仕様上、どうしても向き不向きがあるみたいなので、<br class="pc" />場合によっては<nuxt-link
                to="/rds/"
                class="mod-blue"
                >RDS</nuxt-link
              >を使うことも視野に入れておこう。 <br class="pc" />せっかくなら<nuxt-link to="/aurora/" class="mod-blue"
                >Aurora</nuxt-link
              >とかいうやつを使ってみたい。
            </p>
            <p class="landing-poem-text">
              一旦これで様子を見て、キャッシュをかませたくなったら、<br class="pc" />
              <nuxt-link to="/elasticache/" class="mod-blue">ElastiCache</nuxt-link
              >でRedisを動かすことも検討してみよう。
            </p>
          </section>

          <section class="landing-poem-section">
            <h2 class="title-section" id="sls"><a href="#sls">サーバーレス</a></h2>

            <p class="landing-poem-text">
              詰め込み過ぎて頭が痛くなってきたけど、<br class="pc" />サーバーレスで設計してみたい気持ちもある。
            </p>
            <p class="landing-poem-text">
              <nuxt-link to="/apigateway/" class="mod-beige">API Gateway</nuxt-link>に<nuxt-link
                to="/lambda/"
                class="mod-orange"
                >Lambda</nuxt-link
              >を繋げて、<br class="pc" /><nuxt-link to="/s3/" class="mod-red">S3</nuxt-link
              >を組み合わせれば色々できそうだ。<br class="pc" />とりあえず<a
                href="https://www.serverless.com/"
                target="_blank"
                rel="noopener"
                class="mod-serverless"
                >⚡Serverless</a
              >を触ってみよう。
            </p>
          </section>

          <section class="landing-poem-section">
            <h2 class="title-section" id="sxs"><a href="#sxs">メール</a></h2>
            <p class="landing-poem-text">
              メールの送信をどう実装しようか。<br class="pc" />ひとまず<nuxt-link to="/sqs/" class="mod-beige"
                >SQS</nuxt-link
              >のキューに入れてから、<br class="pc" /><nuxt-link to="/lambda/" class="mod-orange">Lambda</nuxt-link
              >+<nuxt-link to="/ses/" class="mod-beige">SES</nuxt-link>で処理するのが良さそうだ。<br
                class="pc"
              />バウンスは<nuxt-link to="/sns/" class="mod-beige">SNS</nuxt-link>のトピックとして扱えるらしい。
            </p>
          </section>

          <section class="landing-poem-section">
            <h2 class="title-section" id="what-a-day"><a href="#what-a-day">なんて日だ！</a></h2>
            <p class="landing-poem-text">
              あとは<nuxt-link to="/cloudfront/" class="mod-red">CloudFront</nuxt-link>を手前に置いて、<br class="pc" />
              <nuxt-link to="/route53/" class="mod-orange">Route53</nuxt-link>でドメインの設定をすれば、<br
                class="pc"
              />なんとか公開まで持っていけそうだ。
            </p>
            <p class="landing-poem-text">しかしこれ、一体いくらかかるんだ？</p>
          </section>

          <ServiceTemplateAbout class="landing-poem-section" />
        </div>
      </div>
      <ServicePartsUnkown />
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServiceTemplateAbout from '@/components/service/template/ServiceTemplateAbout'
import ServicePartsUnkown from '@/components/service/parts/ServicePartsUnkown'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { getService } from '@/lib/service'

export default {
  name: 'LandingIndex',
  components: { ExternalLink, ServiceTemplateAbout, ServicePartsUnkown },
  data() {
    return {
      isPlaying: false
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
  },
  mounted() {
    this.isPlaying = true
  }
}
</script>
