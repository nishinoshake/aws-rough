<template>
  <ServiceArticle service-name="cognito">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">
          アプリケーションにユーザの認証機能を追加できるサービスです。月間アクティブユーザー数に応じて料金が発生します。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>月間アクティブユーザー数（MAU）</span></h3>
        <p class="text">
          Cognitoでは、その月に変更が発生したユーザー数に基づいて課金されます。
        </p>
        <p class="text">
          サインアップ、サインイン、トークンの更新、パスワードの変更、またはユーザーアカウント属性の更新など、当該ユーザーに関わる
          ID 操作が発生したユーザーの数を入力してください。{{ free.mau }}人までは無料です。
        </p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>SAML/OIDC</span></h3>
        <p class="text">
          SAMLまたはOIDCを使用してサインインするユーザーの場合、料金が割高になります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>アドバンストセキュリティ</span></h3>
        <p class="text">
          アドバンストセキュリティを有効にした場合、ユーザー数に応じて料金が上乗せされます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>MFAのSMS</span></h3>
        <p class="text">
          Multi-Factor Authentication
          (MFA)でSMSを送信する場合、別料金が発生します。SMSの送信にはSNSを使用するので、<ExternalLink
            href="https://aws.amazon.com/sns/sms-pricing/"
            >こちらの料金</ExternalLink
          >を参考にしてください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>Cognito Sync</span></h3>
        <p class="text">
          Cognito Syncは対象外です。
        </p>
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
import { addComma } from '@/lib/price'

export default {
  name: 'ServiceCloudWatch',
  components: {
    ServiceArticle,
    Condition,
    Spec,
    ExternalLink
  },
  head() {
    return meta.cognito
  },
  computed: {
    priceCognito() {
      return this.$store.state.price.cognito
    },
    free() {
      return {
        mau: addComma(this.priceCognito.mau.free)
      }
    }
  }
}
</script>
