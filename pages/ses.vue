<template>
  <ServiceArticle service-name="ses" hide-condition>
    <template v-slot:zakuri>
      <p class="text">メールを送れるやつ。</p>
      <p class="text">
        構築や運用が面倒なメールサーバーを持たずに、メールの送受信を行なえます。新規のアカウントは、機能が制限されているサンドボックスに配置されているため、本格的に利用する前に<ExternalLink
          href="https://docs.aws.amazon.com/ja_jp/ses/latest/DeveloperGuide/request-production-access.html"
          >申請</ExternalLink
        >を行う必要があります。現在、SESが東京リージョンでは提供されていないため、バージニア北部（us-east-1）リージョンの料金をもとに計算しています。
      </p>
    </template>

    <template v-slot:fullCondition>
      <ul class="list">
        <li class="list-item">バージニア北部リージョン</li>
        <li class="list-item">ひと月は30.5日</li>
        <li class="list-item">{{ usdjpy }}円/ドル（毎朝10時更新）</li>
      </ul>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送量</span></h3>
        <p class="text">
          送信されるデータ転送量をGB単位で入力してください。これには、ヘッダー/メール本文/添付ファイルが含まれます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>受信の平均サイズ</span></h3>
        <p class="text">
          受信メールの平均サイズをKB単位で入力してください。課金対象である受信メールチャンクという項目は、256KBを1単位としてカウントするので、受信メールが255KBの場合は料金が発生せず、768KBの場合は、受信メールチャンクが3としてカウントされます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>専用 IP アドレス</span></h3>
        <p class="text">送信用のIPアドレスをリースする場合は、個数を入力してください。</p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Condition from '@/components/Condition'
import Spec from '@/components/Spec'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceSES',
  components: {
    ServiceArticle,
    Condition,
    Spec,
    ExternalLink
  },
  head() {
    return meta.ses
  },
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    }
  }
}
</script>
