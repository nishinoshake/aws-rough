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
            AWSでは多くのサービスを提供していますが、料金の割合が大きいのは上記のカテゴリーになると思います。なかでも、コンピューティングとデータベースの料金が大半を占めることになるでしょう（雑）。
          </p>
          <p class="text">
            それから、ストレージやロードバランサーなどの料金を積んでごにょごにょしていけば、AWSにかかる料金の大枠は見えてくると思います。イメージが掴めていない方は、メニューから好きなサービスを選択して、ごにょごにょしてみてください。
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>データ転送量の概算</span></h3>
          <p class="text">
            データ転送料金は考え方に少しクセがありますが、AWSから見たアウト（エンドユーザーから見たらダウンロード）に対して料金が発生します。実際に使ってみないとわからない部分なので見積もりが難しいですが、トラフィックが多い場合はデータ転送料金も無視できないので、事前に余裕をもった見積もりを立てて請求に備えた方が得策です。
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
            「AWSの料金を安く」と考えたときに、まっ先に思いつくのがEC2やRDSで使える<ExternalLink
              href="https://aws.amazon.com/jp/ec2/pricing/reserved-instances/"
              >リザーブドインスタンス</ExternalLink
            >です。名前のとおり、◯年使ってくれるなら安くしますよ、という仕組みです。これとは別で、EC2の空いているインスタンスを安くつかえるかもしれない、<ExternalLink
              href="https://aws.amazon.com/jp/ec2/spot/"
              >スポットインスタンス</ExternalLink
            >というものもあります。（どちらもこのサイトでは計算できないですが...）
          </p>
          <p class="text">
            <span class="title-xsmall">ボリュームディスカウント</span>
            S3のストレージやデータ転送料金は、使うほど単価が安くなるようになっています。安くなるラインが結構高めなので、なかなか届かないかもしれませんが、<ExternalLink
              href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/con-bill-blended-rates.html"
              >一括請求</ExternalLink
            >という仕組みを利用すれば恩恵を受けられる可能性があります。
          </p>
          <p class="text">
            <span class="title-xsmall">ストレージクラス</span>
            このサイトでは計算できませんが、S3には<ExternalLink href="https://aws.amazon.com/jp/s3/storage-classes/"
              >ストレージクラス</ExternalLink
            >というものが用意されていて、アクセスの頻度が低いデータは安く保存できる（代わりに取り出しのコストがかかる）ようになっているので、利用を検討してみてもいいかもしれません。
          </p>
          <p class="text">
            <span class="title-xsmall">サーバーレスの利用</span>
            EC2は何でもできて便利ですが、料金は結構な額になります。EC2で行っている軽い処理をLambdaで置き換えてみたり、EC2で公開している静的サイトがあったらS3に移行してみたり、部分的にサーバーレスのサービスを導入するだけでもコストの削減が見込めます。
          </p>
        </div>
        <div class="section-child">
          <h3 class="title-small"><span>料金がざっくりわかるボタン</span></h3>
          <p class="text">色々考えるのが面倒な方はボタンを押してみてください。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'
import meta from '@/config/meta'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'LandingIndex',
  components: { ServicePartsIcon, ExternalLink },
  head() {
    return meta.index
  },
  data() {
    return {
      services: serviceConfig
    }
  },
  computed: {
    serviceKeys() {
      return serviceConfig.map(service => service.key)
    }
  }
}
</script>
