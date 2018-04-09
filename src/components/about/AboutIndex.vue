<template>
  <div class="about">
    <h1 class="about-copy"><em>AWS</em>の料金を、<br>日本円でざっくり。</h1>
    <section class="section">
      <h2 class="title">よく使うサービス</h2>
      <ul class="about-service-list">
        <li class="about-service-item" v-for="service in recommendServices" :key="service.key">
          <router-link :to="service.key">
            <ServicePartsIcon :name="service.key" />
            <span>{{ service.name }}</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="section">
      <h2 class="title">このサイトについて</h2>
      <p class="text">AWSの利用料金を最小限の入力項目で「ざっくり」計算できるサイトです。見積もりなどで正確さを要求される場合は<ExternalLink href="https://calculator.s3.amazonaws.com/index.html">公式のツール</ExternalLink>をお使いください。</p>
    </section>
    <section class="section">
      <h2 class="title">計算の前提</h2>
      <ul class="list">
        <li class="list-item">価格は<em>東京リージョン</em>のものを使用しています</li>
        <li class="list-item">料金は<em>月額の円表記で税抜き</em>です</li>
        <li class="list-item">計算に日数が必要な場合は、ひと月を<em>{{ monthlyDate }}日</em>としています</li>
      </ul>
    </section>
    <section class="section">
      <h2 class="title">利用しているデータ</h2>
      <section class="section-child">
        <h3 class="title-small">サービスの価格</h3>
        <p class="text">各サービスの価格は、AWSが提供している<ExternalLink href="https://docs.aws.amazon.com/ja_jp/awsaccountbilling/latest/aboutv2/price-changes.html">Price List API</ExternalLink>から取得しています。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">為替レート</h3>
        <p class="text">為替レートの取得には、<ExternalLink href="https://twitter.com/kujirahand">クジラ飛行机</ExternalLink>さんが公開されている、<ExternalLink href="http://api.aoikujira.com/kawase/">クジラ外国為替確認API</ExternalLink>を使わせてもらっています。<br>現在、計算に適用しているドル円のレートは<em>{{ usdjpy }}円</em>です。</p>
      </section>
    </section>
    <section class="section">
      <h2 class="title">お問い合わせ</h2>
      <p class="text">不具合などのご連絡は、お手数ですが下記へメールをお願いいたします。</p>
      <p class="text"><a href="mailto:lawson.and.7.11@gmail.com" class="text-link">lawson.and.7.11@gmail.com</a></p>
    </section>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'
import ServicePartsIcon from '@/components/service/parts/ServicePartsIcon'
import serviceConfig from '@/config/service'
import store from '@/store'
import { MONTHLY_DATE } from '@/store/constants'
import { getService } from '@/store/service'

export default {
  name: 'AboutIndex',
  components: { ExternalLink, ServicePartsIcon },
  data() {
    return {
      monthlyDate: MONTHLY_DATE
    }
  },
  computed: {
    usdjpy() {
      return store.state.fx ? store.state.fx.usdjpy : 'xxx'
    },
    recommendServices() {
      return ['ec2', 'route53', 's3', 'rds'].map(name => getService(name, serviceConfig))
    }
  }
}
</script>
