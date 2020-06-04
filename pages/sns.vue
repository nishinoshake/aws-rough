<template>
  <ServiceTemplate service-name="sns">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">フルマネージド型のPub/Subサービス。</p>
        <p class="text">
          メッセージを送る「パブリッシャー」と、受け取る「サブスクライバー」を、
          <br class="pc" />
          「トピック」を介して繋ぐことで、異なるシステムやサービスをサクッと連携できます。
        </p>

        <p class="text">
          AWS内のメッセージングだけでなく、モバイルのプッシュ通知や、Email/HTTPなどの通知もサポートしています。
          <br class="pc" />
          結構な量の無料利用枠があるので、下の表を参考にしてください。SQS/Lambdaへの配信は無料です。
          <br class="pc" />
          SMSの通知も用意されていますが、本サイトではサポートしていないので<ExternalLink
            href="https://aws.amazon.com/sns/sms-pricing/"
            >こちら</ExternalLink
          >を参考にしてください。
        </p>

        <table class="spec">
          <thead>
            <tr>
              <th colspan="2">無料利用枠</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>リクエスト数</th>
              <td class="mod-align-right">{{ freeRequest }}件</td>
            </tr>
            <tr>
              <th>モバイルプッシュ</th>
              <td class="mod-align-right">{{ freeMobile }}件</td>
            </tr>
            <tr>
              <th>HTTP/S</th>
              <td class="mod-align-right">{{ freeHttp }}件</td>
            </tr>
            <tr>
              <th>Email</th>
              <td class="mod-align-right">{{ freeEmail }}件</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section-child">
        <h3 class="title-small"><span>SNSの使用例</span></h3>
        <p class="text">
          EC2のCPU使用率が高いときに知らせるためのSNSトピックを、<ExternalLink
            href="https://aws.amazon.com/jp/cloudwatch/"
            >CloudWatch</ExternalLink
          >で設定しておき、
          <br class="pc" />
          それをLambdaでサブスクライブして、Slackへ通知するコードを実行する。みたいな事ができます。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-small"><span>リクエスト数/配信数</span></h3>
        <p class="text">
          SNSに送るパブリッシュなどのリクエスト数と、通知の配信数を入力してください。
          <br class="pc" />
          リクエストと配信は、64KB単位でカウントするので、64KB以下のデータの場合は1リクエスト(配信)、
          <br class="pc" />
          256KBのデータの場合は4リクエスト(配信)になります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>データ転送量</span></h3>
        <p class="text">インターネットへ送信されるデータ量をGB単位で入力してください。</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="title-small"><span>SMSの通知</span></h3>
        <p class="text">
          SNSでは、SMSの通知も用意されていますが、本サイトではサポートしていないので、<ExternalLink
            href="https://aws.amazon.com/sns/sms-pricing/"
            >こちら</ExternalLink
          >を参考にしてください。
        </p>
      </section>
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
import { addComma } from '@/lib/price'

export default {
  name: 'ServiceSNS',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.sns
  },
  computed: {
    priceSns() {
      return this.$store.state.price.sns
    },
    freeRequest() {
      return addComma(this.priceSns.request.priceRange[0].endRange)
    },
    freeMobile() {
      return addComma(this.priceSns.mobile.free)
    },
    freeHttp() {
      return addComma(this.priceSns.http.priceRange[0].endRange)
    },
    freeEmail() {
      return addComma(this.priceSns.email.priceRange[0].endRange)
    }
  }
}
</script>
