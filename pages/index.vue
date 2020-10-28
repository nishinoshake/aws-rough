<template>
  <div class="landing">
    <section class="section">
      <h2 class="title-section">料金が気になるサービスはありますか？</h2>
      <div class="service-content">
        <ul class="landing-service-list">
          <li v-for="service in services" :key="service.key" class="landing-service-item">
            <nuxt-link :class="`landing-service-link mod-${service.color}`" :to="service.href">
              <div class="landing-service-inner">
                <ServicePartsIcon :name="service.key" class="landing-service-icon" />
                <span class="landing-service-body">
                  <span class="landing-service-name">{{ service.name }}</span>
                  <span class="landing-service-desc">{{ service.description }}</span>
                </span>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="section">
      <h2 class="title-section">AWSの料金はどれぐらいかかるのか？</h2>
      <div class="service-content">
        <div class="section-child">
          <ul class="list list-bg">
            <li class="list-item">コンピューティング（EC2/Fargate/...）</li>
            <li class="list-item">データベース（RDS/DynamoDB/...）</li>
            <li class="list-item">ストレージ（S3/EBS/...）</li>
            <li class="list-item">ネットワークと配信（CloudFront/ELB/...）</li>
            <li class="list-item">データ転送料金</li>
          </ul>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>まずはコンピューティングとデータベース</span></h3>
          <p class="text">
            AWSでは多くのサービスを提供していますが、料金の割合が大きいのは上記のカテゴリーになると思います。なかでも、コンピューティングとデータベースの料金が大半を占めることになるでしょう。
          </p>
          <p class="text">
            それから、ストレージやロードバランサーなどの料金を積んで、ごにょごにょしていけば、AWSにかかる料金の大枠は見えてくると思います。イメージが掴めていない方は、メニューから好きなサービスを選択して、料金を確認してみてください。
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>データ転送量の概算</span></h3>
          <p class="text">
            データ転送料金は考え方に少しクセがありますが、エンドユーザーから見たダウンロード（AWSからのOUT）に対して料金が発生すると覚えておけばシンプルです。実際に使ってみないとわからない部分なので見積もりが難しいですが、トラフィックが多い場合はデータ転送料金も無視できないので、事前に余裕をもった見積もりを立てて請求に備えた方が安心できます。
          </p>
          <p class="text">
            具体的な数値がイメージしにくいかもしれませんが、Webサイトを例にすると以下のようになります。
          </p>
          <pre>
#ページの容量が2MBで月間10万PV
2 * 100000 / 1024 ≒ 195GB</pre
          >
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>AWSの料金を抑えるには</span></h3>
          <p class="text">
            <span class="title-xsmall">お得なインスタンス</span>
            「AWSの料金を安くする」と考えたときに、まっ先に思いつくのがEC2やRDSで使える<ExternalLink
              href="https://aws.amazon.com/jp/ec2/pricing/reserved-instances/"
              >リザーブドインスタンス</ExternalLink
            >です。名前のリザーブドが示すとおり、◯年使ってくれるなら安くしますよ、という仕組みになります。これとは別で、EC2の空いているインスタンスを安くつかえるかもしれない、<ExternalLink
              href="https://aws.amazon.com/jp/ec2/spot/"
              >スポットインスタンス</ExternalLink
            >というものもあります。（どちらもこのサイトでは計算できないですが...）
          </p>
          <p class="text">
            <span class="title-xsmall">ボリュームディスカウント</span>
            S3のストレージやデータ転送料金は、使うほど単価が安くなる料金体系になっています。安くなるラインが高めなので、なかなか届かないかもしれませんが、<ExternalLink
              href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html"
              >一括請求</ExternalLink
            >という仕組みで複数のアカウントを合算すれば恩恵を受けられるかもしれません。
          </p>
          <p class="text">
            <span class="title-xsmall">ストレージクラス</span>
            このサイトでは計算できませんが、S3には<ExternalLink href="https://aws.amazon.com/jp/s3/storage-classes/"
              >ストレージクラス</ExternalLink
            >というものがあって、アクセスの頻度が低いデータは安く保存できる（代わりに取り出しのコストがかかる）ようになっているので、利用を検討してみてもいいかもしれません。
          </p>
          <p class="text">
            <span class="title-xsmall">サーバーレスのサービス</span>
            EC2で行っている処理をLambdaで置き換えてみたり、EC2で公開している静的サイトがあったらS3に移行してみたり、部分的にサーバーレスのサービスを導入してみたら、料金が安くなるかもしれません。
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>料金がざっくりわかるボタン</span></h3>
          <p class="text">いろいろ考えるのが面倒な方はボタンを押してみてください。</p>
          <ul class="button-list">
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('4fcacf46c2c155dfd1cf')">激安</button>
            </li>
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('75178340160441c9ca8e')">静的サイト</button>
            </li>
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('4c5c5254e11f97276ede')">いろいろ</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title-section">AWSはじめました</h2>
      <div class="service-content">
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
              一旦これで様子を見て、キャッシュさせる必要が出てきたら、<br class="pc" /><nuxt-link
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
            <p class="what-poem-text">しかしこれ、料金はいくらかかるんだ？</p>
          </section>
          <div class="what-footer">
            <nuxt-link to="/ec2/" class="what-button">まずはEC2の料金を計算</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import mokuji from '@/config/service/mokuji'
import serviceConfig from '@/config/service'
import meta from '@/config/meta'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import ExternalLink from '@/components/text/ExternalLink'
import { fetchZ } from '@/api'

export default {
  name: 'LandingIndex',
  components: { ServicePartsIcon, ExternalLink },
  head() {
    return meta.index
  },
  data() {
    return {
      services: mokuji
    }
  },
  computed: {
    serviceKeys() {
      return mokuji.map(service => service.key)
    }
  },
  methods: {
    toDetail(z) {
      this.$store.commit('SET_INITIAL_TABLES', { serviceConfig })
      this.$store.dispatch('fetchZ', { fetchZ, hash: z, serviceConfig })
      this.$router.push('/detail/')
    }
  }
}
</script>
