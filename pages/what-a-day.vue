<template>
  <div class="what">
    <div class="what-poem">
      <section class="section">
        <p class="what-poem-text">はじめてのAWS。<br />とりあえず入門書を読み進める。</p>
        <p class="what-poem-text">
          <nuxt-link to="/vpc/" class="mod-orange">VPC</nuxt-link>でネットワークを設計してから、<br
            class="pc"
          /><nuxt-link to="/ec2/" class="mod-orange">EC2</nuxt-link>を置くらしい。この単語には聞き覚えがあるぞ。<br
            class="pc"
          />念のためにロードバランサーの<nuxt-link to="/elb/" class="mod-orange">ELB</nuxt-link>も挟んでおこう。
        </p>
        <p class="what-poem-text">
          これだけでも悪くないけど、欲を言えばDockerを使いたい。<br class="pc" />ECSで<nuxt-link
            to="/fargate/"
            class="mod-orange"
            >Fargate</nuxt-link
          >を使用すると、サーバーの管理が不要になると。<br class="pc" />なんなんだこれは・・・革新的すぎるぞ。
        </p>
        <p class="what-poem-text">
          データベースは、直感で<nuxt-link to="/dynamodb/" class="mod-blue">DynamoDB</nuxt-link>にしよう。<br
            class="pc"
          />仕様上、どうしても向き不向きがあるみたいなので、<br class="pc" />場合によっては<nuxt-link
            to="/rds/"
            class="mod-blue"
            >RDS</nuxt-link
          >を使うことも視野に入れておく。 <br class="pc" />せっかくなら<nuxt-link to="/aurora/" class="mod-blue"
            >Aurora</nuxt-link
          >とかいうやつを使ってみようか。
        </p>
        <p class="what-poem-text">
          一旦これで様子を見て、キャッシュをかませたくなったら、<br class="pc" /><nuxt-link
            to="/elasticache/"
            class="mod-blue"
            >ElastiCache</nuxt-link
          >でRedisを動かすことも検討しよう。
        </p>
        <p class="what-poem-text">
          詰め込み過ぎて頭が痛くなってきたけど、<br class="pc" />サーバーレスで設計してみたい気持ちもある。
        </p>
        <p class="what-poem-text">
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

        <p class="what-poem-text">
          メールの送信をどう実装しようか。<br class="pc" />ひとまず<nuxt-link to="/sqs/" class="mod-beige"
            >SQS</nuxt-link
          >のキューに入れてから、<br class="pc" /><nuxt-link to="/lambda/" class="mod-orange">Lambda</nuxt-link
          >+<nuxt-link to="/ses/" class="mod-beige">SES</nuxt-link>で処理するのが良さそうだ。<br
            class="pc"
          />バウンスは<nuxt-link to="/sns/" class="mod-beige">SNS</nuxt-link>のトピックとして扱えるらしい。
        </p>

        <p class="what-poem-text">
          あとは<nuxt-link to="/cloudfront/" class="mod-red">CloudFront</nuxt-link>を手前に置いて、<br class="pc" />
          <nuxt-link to="/route53/" class="mod-orange">Route53</nuxt-link>でドメインの設定をすれば、<br
            class="pc"
          />なんとか公開まで持っていけそうだ。
        </p>
        <p class="what-poem-text">しかしこれ、一体いくらかかるんだ？</p>
      </section>
      <div class="what-footer">
        <nuxt-link to="/ec2/" class="what-button">まずはEC2の料金を計算</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsUnkown from '@/components/service/parts/ServicePartsUnkown'
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import { getService } from '@/lib/service'

export default {
  name: 'WhatADay',
  components: { ExternalLink, ServicePartsUnkown },
  head() {
    return meta.whatADay
  },
  computed: {
    services() {
      return serviceConfig.map(service => getService(service.key, serviceConfig))
    }
  }
}
</script>
