<template>
  <div class="landing">
    <h1 class="title-page service-copy">
      <span class="title-page-ja">AWSの料金を、<br class="sp" />日本円で{{ makura }}</span>
    </h1>
    <section class="section">
      <h2 class="title-section landing-first-title">料金が気になるサービスはありますか？</h2>
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
    <div class="service-container service-container-without-margin">
      <div class="service-body">
        <section class="section">
          <h2 class="title-section">公式の料金計算ツールではありません</h2>
          <div class="service-content">
            <p class="text">本サイトは公式のものではありません。</p>
            <p class="text">
              公式の料金計算ツールには、2018年にリリースされた<ExternalLink href="https://calculator.aws"
                >AWS Pricing Calculator</ExternalLink
              >と、2007年にリリースされた歴史のある<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
                >SIMPLE MONTHLY CALCULATOR</ExternalLink
              >があります。本サイトは、これらのツールから計算に必要な項目を最小限に絞ってシンプルにしたものです。
            </p>
            <p class="text">
              そのため、AWSの料金をざっくり知りたいときには便利ですが、正確な料金を知りたい場合は、公式の料金計算ツールを使用してください。
            </p>
          </div>
        </section>
        <section class="section">
          <h2 class="title-section">AWSの料金をざっくり知るには</h2>
          <div class="service-content">
            <div class="landing-summary">
              <ol class="landing-summary-list">
                <li class="landing-summary-item">料金が高くなりがちなサービスに絞って考える</li>
                <li class="landing-summary-item">具体的にはEC2とRDS</li>
                <li class="landing-summary-item">まずはインスタンスの料金だけでも</li>
                <li class="landing-summary-item">これで大体の料金がわかる（十万か、百万か）</li>
                <li class="landing-summary-item">他のサービスも重要な項目のみを計算</li>
                <li class="landing-summary-item">全体の費用感がざっくりわかる</li>
              </ol>
            </div>
            <p class="text">
              AWSの料金は、リソースを使った分だけ請求される<ExternalLink href="https://aws.amazon.com/jp/pricing/"
                >従量課金</ExternalLink
              >です。サービスの種類が多岐にわたっているため、どこから計算すればよいか迷ってしまうかもしれませんが、料金への影響が大きい部分に絞ると案外シンプルです。
            </p>
            <p class="text">
              要件によって上下はありますが、コンピューティングとデータベースの料金が大部分を占めることが多いです。具体的にはEC2とRDSというサービスになります。これらの料金を算出するには、インスタンスに求めるスペックを考えます。インスタンスというのは、仮想サーバーのことです。
            </p>
            <p class="text">
              たとえば、EC2のインスタンスには 2vCPU/8GiB ぐらいのスペックが欲しいので、 m5.large のインスタンスタイプ
              を使用する、といった感じです。インスタンスタイプの英数字を初めて見た方は戸惑うかもしれませんが、インスタンスのファミリー/世代/スペックを表しています。
            </p>
            <p class="text">
              EC2で用意されているインスタンスタイプは、<ExternalLink
                href="https://aws.amazon.com/jp/ec2/instance-types/"
                >インスタンスタイプの一覧ページ</ExternalLink
              >から確認できます。あとは、インスタンスの台数を決めれば、大まかな料金を算出できます。
            </p>
            <p class="text">
              本サイトで計算すると、EC2で m5.large を2台使用した際の料金は<button
                type="button"
                @click="handleClickMonthlyPrice"
                class="text-link"
              >
                {{ priceEc2M5LargeMonthlyJpy }}円
              </button>
              です。ドル円のレートは毎朝10時に更新しており、いま適用しているレートは {{ usdjpy }}円/ドル になります。
            </p>
            <p class="text">
              これはEC2の料金の例ですが、他のサービスも料金への影響が大きい項目に絞ることで、ざっくりとした料金を知ることができます。
            </p>
          </div>
        </section>
        <section class="section">
          <h2 class="title-section">EC2とRDSの料金計算例</h2>
          <div class="service-content">
            <p class="text">
              より具体的に、EC2とRDSの料金の計算式を見てみましょう。細かい事は気にせずに、インスタンスタイプとストレージの種類/容量を決めて、ひと月にかかる料金をざっくり計算します。
            </p>
            <pre>
# インスタンスの単価 * 時間 + ストレージの単価 * 容量

# EC2
${{ priceEc2T3MicroInstance }}(t3.micro) * 30.5日 * 24時間 + ${{ priceEc2Gp2 }}(gp2) * 20GB
{{ priceEc2T3MicroInstance }} * 30.5 * 24 + {{ priceEc2Gp2 }} * 20 = ${{ priceEc2T3MicroMonthlyUsd }} → {{
                priceEc2T3MicroMonthlyJpy
              }}円

# RDS
${{ priceRdsT3MicroInstance }}(MySQL/db2.t3.micro) * 30.5日 * 24時間 + ${{ priceRdsGp2 }}(gp2) * 20GB
{{ priceRdsT3MicroInstance }} * 30.5 * 24 + {{ priceRdsGp2 }} * 20 = ${{ priceRdsT3MicroMonthlyUsd }} → {{
                priceRdsT3MicroMonthlyJpy
              }}円
</pre
            >
            <p class="text">
              料金計算を簡単にするために、あえて無視している細かい項目については、各ページの<nuxt-link
                to="/ec2/#notice"
                class="text-link"
                >対象外のもの</nuxt-link
              >というセクションに記載しています。具体例をあげると、追加のElastic
              IPやリージョン間のデータ転送料金などです。
            </p>
          </div>
        </section>
        <section class="section">
          <h2 class="title-section">データ転送料金の計算例</h2>
          <div class="service-content">
            <p class="text">
              AWSの料金を計算するうえで大切な項目に、データ転送料金があります。
            </p>
            <p class="text">
              考え方に少しクセがありますが、基本的にはAWSから外へ出るデータに対して料金が発生すると覚えておけばシンプルです。実際に使ってみないとわからない部分なので見積もりが難しいですが、トラフィックが多い場合は無視できないので、事前に余裕をもった見積もりを立てておいた方が安心できます。
            </p>
            <p class="text">
              具体的な数値がイメージしにくいかもしれませんが、Webサーバーを例にすると以下のようになります。
            </p>
            <pre>
# ページあたりの容量が2MBで月間10万PV（ページビュー）
2 * 100000 / 1024 ≒ 195GB

# 最初の1GBは無料で、10TBまでは${{ priceSecondRangeTransfer }}/GB
(195 - 1) * {{ priceSecondRangeTransfer }} = ${{ priceTransferMonthlyUsd }} → {{ priceTransferMonthlyJpy }}円</pre
            >
          </div>
        </section>
        <section class="section">
          <h2 class="title-section">計算式の確認</h2>
          <div class="service-content">
            <p class="text">
              各サービスの料金計算に使用している式は、各ページの<nuxt-link to="/ec2/#function" class="text-link"
                >◯◯◯の料金計算式をざっくり</nuxt-link
              >というセクションに記載してますので、どんな計算をしているか気になる方は確認してみてください。計算に不備が見つかった場合は、<ExternalLink
                href="https://github.com/nishinoshake/aws-rough/issues"
                >GitHubのIssue</ExternalLink
              >にあげてもらえたら助かります。<br />
            </p>
          </div>
        </section>
        <section class="section">
          <h2 class="title-section">AWSの料金を抑えるには</h2>
          <div class="service-content">
            <div class="section-child">
              <h3 class="title-xsmall">リザーブド/スポットインスタンス</h3>
              <p class="text">
                「AWSの料金を安くする」と考えたときに、最初に思いつくのがEC2やRDSで使える<ExternalLink
                  href="https://aws.amazon.com/jp/ec2/pricing/reserved-instances/"
                  >リザーブドインスタンス</ExternalLink
                >です。名前のリザーブドが示すとおり、◯年使ってくれるなら安くしますよ、という仕組みです。これとは別で、EC2の空いているインスタンスを安くつかえるかもしれない、<ExternalLink
                  href="https://aws.amazon.com/jp/ec2/spot/"
                  >スポットインスタンス</ExternalLink
                >というものもあります。本サイトでは、どちらもサポートしていません。
              </p>
            </div>
            <div class="section-child">
              <h3 class="title-xsmall">ボリュームディスカウント</h3>
              <p class="text">
                S3のストレージやデータ転送料金は、使うほど単価が安くなる料金体系になっています。安くなるラインが高めなので、なかなか届かないかもしれませんが、<ExternalLink
                  href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html"
                  >一括請求</ExternalLink
                >という仕組みで複数のアカウントを合算すれば恩恵を受けられるかもしれません。
              </p>
            </div>
            <div class="section-child">
              <h3 class="title-xsmall">ストレージクラス</h3>
              <p class="text">
                S3には<ExternalLink href="https://aws.amazon.com/jp/s3/storage-classes/">ストレージクラス</ExternalLink
                >というものがあり、アクセスの頻度が低いデータは安く保存できる（代わりに取り出しのコストがかかる）ようになっているので、利用を検討してみてもいいかもしれません。本サイトでは、標準以外のストレージクラスはサポートしていません。
              </p>
            </div>
            <div class="section-child">
              <h3 class="title-xsmall">サーバーレスのサービス</h3>
              <p class="text">
                EC2で行っている処理をLambdaで置き換えてみたり、EC2で公開している静的サイトがあったらS3に移行してみたり、部分的にサーバーレスのサービスを導入してみたら、料金が安くなるかもしれません。
              </p>
            </div>
          </div>
        </section>
        <section class="section" id="my-first-aws">
          <h2 class="title-section">はじめてのAWS</h2>
          <div class="service-content">
            <div class="what-poem">
              <section class="section">
                <p class="what-poem-text">はじめてのAWS。<br />とりあえず入門書を読み進める。</p>
                <p class="what-poem-text">
                  <nuxt-link to="/vpc/" class="mod-orange">VPC</nuxt-link>でネットワークを設計してから、<br
                    class="pc"
                  /><nuxt-link to="/ec2/" class="mod-orange">EC2</nuxt-link
                  >を置くらしい。この単語には聞き覚えがあるぞ。<br class="pc" />念のためにロードバランサーの<nuxt-link
                    to="/elb/"
                    class="mod-orange"
                    >ELB</nuxt-link
                  >も挟んでおこう。
                </p>
                <p class="what-poem-text">
                  これだけでも悪くないけど、欲を言えばDockerを使いたい。<br class="pc" /><nuxt-link
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
                  >でRedisを導入することも検討しよう。
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
                  あとは<nuxt-link to="/cloudfront/" class="mod-red">CloudFront</nuxt-link>を手前に置いて、<br
                    class="pc"
                  />
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
        </section>

        <ServiceTemplateAds />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import mokuji from '@/config/service/mokuji'
import serviceConfig from '@/config/service'
import meta from '@/config/meta'
import ServiceTemplateAds from '@/components/service/template/ServiceTemplateAds'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import ExternalLink from '@/components/text/ExternalLink'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'
import { addComma } from '@/lib/price'

export default {
  name: 'LandingIndex',
  components: { ServicePartsIcon, ServiceTemplateAds, ExternalLink },
  head() {
    return meta.index
  },
  data() {
    return {
      services: mokuji
    }
  },
  computed: {
    ...mapState(['makura']),
    serviceKeys() {
      return mokuji.map(service => service.key)
    },
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    priceEc2Gp2() {
      return this.$store.state.price.ebs.gp2.price
    },
    priceEc2M5LargeInstance() {
      const instance = parseInstance('m5.large', this.$store.state.price.ec2.instance)

      return instance.price
    },
    priceEc2T3MicroInstance() {
      const instance = parseInstance('t3.micro', this.$store.state.price.ec2.instance)

      return instance.price
    },
    priceEc2M5LargeMonthlyJpy() {
      return addComma(Math.floor(this.priceEc2M5LargeInstance * MONTHLY_HOURS * this.usdjpy * 2))
    },
    priceEc2T3MicroMonthlyUsd() {
      return Math.floor(10 * (this.priceEc2T3MicroInstance * MONTHLY_HOURS + this.priceEc2Gp2 * 20)) / 10
    },
    priceEc2T3MicroMonthlyJpy() {
      return addComma(Math.floor((this.priceEc2T3MicroInstance * MONTHLY_HOURS + this.priceEc2Gp2 * 20) * this.usdjpy))
    },
    priceRdsGp2() {
      return this.$store.state.price.rds.storage.gp2.price
    },
    priceRdsT3MicroInstance() {
      const instance = parseInstance('db.t3.micro', this.$store.state.price.rds.instance.MySQL)

      return instance.price
    },
    priceRdsT3MicroMonthlyUsd() {
      return Math.floor(10 * (this.priceRdsT3MicroInstance * MONTHLY_HOURS + this.priceRdsGp2 * 20)) / 10
    },
    priceRdsT3MicroMonthlyJpy() {
      return addComma(Math.floor((this.priceRdsT3MicroInstance * MONTHLY_HOURS + this.priceRdsGp2 * 20) * this.usdjpy))
    },
    priceSecondRangeTransfer() {
      return this.$store.state.price.transfer.out.priceRange[1].price
    },
    priceTransferMonthlyUsd() {
      return (195 - 1) * this.priceSecondRangeTransfer
    },
    priceTransferMonthlyJpy() {
      return addComma(Math.floor((195 - 1) * this.priceSecondRangeTransfer * this.usdjpy))
    }
  },
  methods: {
    handleClickMonthlyPrice() {
      this.$store.commit('SET_INITIAL_TABLES', { serviceConfig })
      this.$store.commit('UPDATE', { serviceKey: 'ec2', index: 0, columnKey: 'instance', value: 'm5.large' })
      this.$store.commit('UPDATE', { serviceKey: 'ec2', index: 0, columnKey: 'unit', value: '2' })

      this.$router.push('/ec2/')
    }
  }
}
</script>
