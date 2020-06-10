<template>
  <footer class="footer" id="footer">
    <div class="footer-container">
      <p class="footer-link">
        <a href="https://calculator.aws" target="_blank" rel="noopener">公式のやつ</a>
      </p>
      <div class="footer-inner">
        <div class="footer-list">
          <p class="footer-item" v-for="n of 2" :key="n">
            はじめてのAWS。とりあえず入門書を読み進める。<nuxt-link to="/vpc/" class="mod-orange">VPC</nuxt-link
            >でネットワークを設計してから、<nuxt-link to="/ec2/" class="mod-orange">EC2</nuxt-link
            >を置くらしい。この単語には聞き覚えがあるぞ。念のためにロードバランサーの<nuxt-link
              to="/elb/"
              class="mod-orange"
              >ELB</nuxt-link
            >も挟んでおこう。これだけでも悪くないけど、欲を言えばDockerを使いたい。ECSで<nuxt-link
              to="/fargate/"
              class="mod-orange"
              >Fargate</nuxt-link
            >を使用すると、サーバーの管理が不要になると。なんなんだこれは・・・革新的すぎるぞ。データベースは、直感で<nuxt-link
              to="/dynamodb/"
              class="mod-blue"
              >DynamoDB</nuxt-link
            >にしよう。仕様上、どうしても向き不向きがあるみたいなので、場合によっては<nuxt-link
              to="/rds/"
              class="mod-blue"
              >RDS</nuxt-link
            >を使うことも視野に入れておく。 せっかくなら<nuxt-link to="/aurora/" class="mod-blue">Aurora</nuxt-link
            >とかいうやつを使ってみようか。一旦これで様子を見て、キャッシュをかませたくなったら、<nuxt-link
              to="/elasticache/"
              class="mod-blue"
              >ElastiCache</nuxt-link
            >でRedisを動かすことも検討しよう。詰め込み過ぎて頭が痛くなってきたけど、サーバーレスで設計してみたい気持ちもある。
            <nuxt-link to="/apigateway/" class="mod-beige">API Gateway</nuxt-link>に<nuxt-link
              to="/lambda/"
              class="mod-orange"
              >Lambda</nuxt-link
            >を繋げて、<nuxt-link to="/s3/" class="mod-red">S3</nuxt-link>を組み合わせれば色々できそうだ。とりあえず<a
              href="https://www.serverless.com/"
              target="_blank"
              rel="noopener"
              class="mod-serverless"
              >⚡Serverless</a
            >を触ってみよう。メールの送信はどう実装しようか。ひとまず<nuxt-link to="/sqs/" class="mod-beige"
              >SQS</nuxt-link
            >のキューに入れてから、<nuxt-link to="/lambda/" class="mod-orange">Lambda</nuxt-link>+<nuxt-link
              to="/ses/"
              class="mod-beige"
              >SES</nuxt-link
            >で処理するのが良さそうだ。バウンスは<nuxt-link to="/sns/" class="mod-beige">SNS</nuxt-link
            >のトピックとして扱えるらしい。あとは<nuxt-link to="/cloudfront/" class="mod-red">CloudFront</nuxt-link
            >を手前に置いて、
            <nuxt-link to="/route53/" class="mod-orange">Route53</nuxt-link
            >でドメインの設定をすれば、なんとか公開まで持っていけそうだ。しかしこれ、一体いくらかかるんだ？
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutFooter',
  data() {
    return {
      services: serviceConfig
    }
  }
}
</script>
