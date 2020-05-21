<template>
  <ServiceTemplate service-name="ses">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsAccordion title="計算の前提" :force-open="true">
          <ul class="list">
            <li class="list-item">バージニア北部リージョン</li>
            <li class="list-item">ひと月は30.5日</li>
            <li class="list-item">{{ usdjpy }}円/ドル（毎朝10時更新）</li>
            <slot />
          </ul>
        </ServicePartsAccordion>

        <ServicePartsAccordion title="入力項目の補足" :force-open="true">
          <section class="section-child">
            <h3 class="title-small"><span>データ転送量</span></h3>
            <p class="text">
              送信されるデータ転送量をGB単位で入力してください。
              <br class="pc" />
              これには、ヘッダー/メール本文/添付ファイルが含まれます。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>受信の平均サイズ</span></h3>
            <p class="text">
              受信メールの平均サイズをKB単位で入力してください。
              <br class="pc" />
              課金対象である受信メールチャンクという項目は、256KBを1単位としてカウントするので、
              <br class="pc" />
              受信メールが255KBの場合は料金が発生せず、768KBの場合は、受信メールチャンクが3としてカウントされます。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>専用 IP アドレス</span></h3>
            <p class="text">送信用のIPアドレスをリースする場合は、個数を入力してください。</p>
          </section>
        </ServicePartsAccordion>
      </div>
    </template>

    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">フルマネージド型のメールサービス。</p>
        <p class="text">
          構築や運用が面倒なメールサーバーを持たずに、メールの送受信を行なえます。
          <br class="pc" />
          新規のアカウントは、機能が制限されているサンドボックスに配置されているため、
          <br class="pc" />
          本格的に利用する前に<ExternalLink
            href="https://docs.aws.amazon.com/ja_jp/ses/latest/DeveloperGuide/request-production-access.html"
            >申請</ExternalLink
          >を行う必要があります。
        </p>
        <p class="text">
          現在、SESが東京リージョンでは提供されていないため、
          <br class="pc" />
          バージニア北部（us-east-1）リージョンの料金をもとに計算しています。
        </p>
      </div>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ServicePartsSpec from '@/components/service/parts/ServicePartsSpec'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceSES',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ServicePartsSpec,
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
