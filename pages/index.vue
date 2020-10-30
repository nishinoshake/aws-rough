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
    <section class="section" id="how-much" ref="howMuch">
      <h2 class="title-section">AWSの料金はどれぐらいかかるのか</h2>
      <div class="service-content">
        <div class="section-child">
          <h3 class="title-small"><span>料金がざっくりわかるボタン</span></h3>
          <p class="text">いろいろ考えるのが面倒な方は、とりあえずボタンを押してみてください。</p>
          <ul class="button-list">
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('4fcacf46c2c155dfd1cf')">激安</button>
            </li>
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('915dbae595d92581209f')">富豪</button>
            </li>
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('75178340160441c9ca8e')">静的サイト</button>
            </li>
            <li class="button-item">
              <button type="button" class="button-inner" @click="toDetail('4c5c5254e11f97276ede')">いろいろ</button>
            </li>
          </ul>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>AWSの料金の特徴</span></h3>
          <p class="text">
            AWSの料金は、使った分だけ請求される<ExternalLink href="https://aws.amazon.com/jp/pricing/"
              >従量課金</ExternalLink
            >になっています。<ExternalLink href="https://lolipop.jp/pricing/">ロリポップ</ExternalLink
            >などのレンタルサーバーのように、月額〇〇〇円のような決まった額ではなく、EC2を720時間使ったから〇〇〇円のように計算されるため、毎月の請求額が変動します。費用が変動するのは不便な面もありますが、フェアな料金体系といえます。
          </p>
          <p class="text">
            また、リソースの増減が管理画面やコマンドラインから簡単に行えるため、お金さえ払えばすぐにスケールアウトできる所も大きな利点といえるでしょう。
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>サービスのカテゴリ分け</span></h3>
          <ul class="list list-bg">
            <li class="list-item">コンピューティング（EC2/Fargate/...）</li>
            <li class="list-item">データベース（RDS/DynamoDB/...）</li>
            <li class="list-item">ストレージ（S3/EBS/...）</li>
            <li class="list-item">ネットワークと配信（CloudFront/ELB/...）</li>
          </ul>
          <p class="text">
            AWSでは多くのサービスを提供していますが、よく使うサービスのカテゴリをざっくり分けると上記のようになります。慣れてくると、アイコンの色でピンと来るようになるかもしれません。要件によって上下はありますが、大概のシステムではコンピューティングとデータベースの料金が大部分を占めると思うので、ここから計算すると費用感を掴みやすいです。
          </p>
        </div>
        <div class="section-child" id="zakuri-main">
          <h3 class="title-small"><span>EC2とRDSの概算</span></h3>
          <p class="text">
            よく使うであろうEC2とRDSの料金を計算してみましょう。細かい事は気にせずに、インスタンスタイプとストレージの種類/容量を決めれば、ひと月にかかる料金をざっくり計算できます。
          </p>
          <pre>
# インスタンスの単価 * 時間 + ストレージの単価 * 容量

# EC2
${{ priceEc2Instance }}(t3.micro) * 30.5日 * 24時間 + ${{ priceEc2Gp2 }}(gp2) * 20GB
{{ priceEc2Instance }} * 30.5 * 24 + {{ priceEc2Gp2 }} * 20 = ${{
              Math.floor(10 * (priceEc2Instance * 30.5 * 24 + priceEc2Gp2 * 20)) / 10
            }} → {{ Math.floor((priceEc2Instance * 30.5 * 24 + priceEc2Gp2 * 20) * usdjpy) }}円

# RDS
${{ priceRdsInstance }}(MySQL/db2.t3.micro) * 30.5日 * 24時間 + ${{ priceRdsGp2 }}(gp2) * 20GB
{{ priceRdsInstance }} * 30.5 * 24 + {{ priceRdsGp2 }} * 20 = ${{
              Math.floor(10 * (priceRdsInstance * 30.5 * 24 + priceRdsGp2 * 20)) / 10
            }} → {{ Math.floor((priceRdsInstance * 30.5 * 24 + priceRdsGp2 * 20) * usdjpy) }}円
</pre
          >
          <p class="text">
            料金計算を簡単にするために、あえて無視している細かい事については、各ページの<nuxt-link
              to="/ec2/#notice"
              class="text-link"
              >対象外のもの</nuxt-link
            >というセクションに記載しています。具体例をあげると、追加のElastic
            IPやリージョン間のデータ転送料金などです。
          </p>
        </div>
        <div class="section-child" id="zakuri-transfer">
          <h3 class="title-small"><span>データ転送料金の概算</span></h3>
          <p class="text">
            AWSの料金を計算するうえで忘れてはいけない項目に、データ転送料金があります。
          </p>
          <p class="text">
            考え方に少しクセがありますが、基本的にはAWSから外へ出るデータに対して料金が発生すると覚えておけばシンプルです。実際に使ってみないとわからない部分なので見積もりが難しいですが、トラフィックが多い場合は無視できないので、事前に余裕をもった見積もりを立てておいた方が安心できます。
          </p>
          <p class="text">
            具体的な数値がイメージしにくいかもしれませんが、Webサーバーを例にすると以下のようになります。
          </p>
          <pre>
# ページあたりの容量が2MBで月間10万PV
2 * 100000 / 1024 ≒ 195GB

# 最初の1GBは無料 | 10TBまでは${{ priceSecondRangeTransfer }}/GB
(195 - 1) * {{ priceSecondRangeTransfer }} = ${{ (195 - 1) * priceSecondRangeTransfer }} → {{
              Math.floor((195 - 1) * priceSecondRangeTransfer * usdjpy)
            }}円</pre
          >
        </div>
        <div class="section-child" id="zakuri-function">
          <h3 class="title-small"><span>計算式の確認</span></h3>
          <p class="text">
            各サービスの料金計算に使用している式は、各ページの<nuxt-link to="/ec2/#function" class="text-link"
              >◯◯◯の料金計算式をざっくり</nuxt-link
            >というセクションに記載してますので、どんな計算をしているか気になる方は確認してみてください。計算に不備が見つかった場合は、<ExternalLink
              href="https://github.com/nishinoshake/aws-rough/issues"
              >GitHubのIssue</ExternalLink
            >にあげて頂けたら助かります。<br />
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>AWSの料金を抑えるには</span></h3>
          <p class="text">
            <span class="title-xsmall">リザーブド/スポットインスタンス</span>
            「AWSの料金を安くする」と考えたときに、最初に思いつくのがEC2やRDSで使える<ExternalLink
              href="https://aws.amazon.com/jp/ec2/pricing/reserved-instances/"
              >リザーブドインスタンス</ExternalLink
            >です。名前のリザーブドが示すとおり、◯年使ってくれるなら安くしますよ、という仕組みになります。これとは別で、EC2の空いているインスタンスを安くつかえるかもしれない、<ExternalLink
              href="https://aws.amazon.com/jp/ec2/spot/"
              >スポットインスタンス</ExternalLink
            >というものもあります。どちらもこのサイトでは計算できないですが...
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
            S3には<ExternalLink href="https://aws.amazon.com/jp/s3/storage-classes/">ストレージクラス</ExternalLink
            >というものがあって、アクセスの頻度が低いデータは安く保存できる（代わりに取り出しのコストがかかる）ようになっているので、利用を検討してみてもいいかもしれません。これもこのサイトでは計算できないですが...
          </p>
          <p class="text">
            <span class="title-xsmall">サーバーレスのサービス</span>
            EC2で行っている処理をLambdaで置き換えてみたり、EC2で公開している静的サイトがあったらS3に移行してみたり、部分的にサーバーレスのサービスを導入してみたら、料金が安くなるかもしれません。
          </p>
        </div>
      </div>
    </section>
    <section class="section" id="my-first-aws">
      <h2 class="title-section">使い道を想像するためにサービス名を網羅するだけの作文</h2>
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
              データベースは、<nuxt-link to="/rds/" class="mod-blue">RDS</nuxt-link>と<nuxt-link
                to="/dynamodb/"
                class="mod-blue"
                >DynamoDB</nuxt-link
              >を併用する形で。<br />せっかくなら<nuxt-link to="/aurora/" class="mod-blue">Aurora</nuxt-link
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
              これでもう十分な感はあるけど、<br class="pc" />サーバーレスで設計してみたい気持ちになってきた。
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
import { parseInstance } from '@/lib/service'
import { fetchZ } from '@/api'

let observer = null

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
    },
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    priceEc2Instance() {
      const instance = parseInstance('t3.micro', this.$store.state.price.ec2.instance)

      return instance.price
    },
    priceEc2Gp2() {
      return this.$store.state.price.ebs.gp2.price
    },
    priceRdsInstance() {
      const instance = parseInstance('db.t3.micro', this.$store.state.price.rds.instance.MySQL)

      return instance.price
    },
    priceRdsGp2() {
      return this.$store.state.price.rds.storage.gp2.price
    },
    priceSecondRangeTransfer() {
      return this.$store.state.price.transfer.out.priceRange[1].price
    }
  },
  mounted() {
    this.watchScroll()
  },
  destroyed() {
    this.unwatchScroll()
  },
  methods: {
    toDetail(z) {
      this.$store.commit('SET_INITIAL_TABLES', { serviceConfig })
      this.$store.dispatch('fetchZ', { fetchZ, hash: z, serviceConfig })
      this.$router.push('/detail/')
    },
    watchScroll() {
      observer = new IntersectionObserver(
        entries => {
          console.log(entries)
        },
        {
          root: null,
          rootMargin: '-50% 0px 0px',
          threshold: 0
        }
      )

      observer.observe(this.$refs.howMuch)
    },
    unwatchScroll() {}
  }
}
</script>
