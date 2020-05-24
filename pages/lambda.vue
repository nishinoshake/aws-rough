<template>
  <ServiceTemplate service-name="lambda">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">
          サーバーレスでコードを実行できるやつ。
        </p>
        <p class="text">
          サーバーレスとはいっても、どこかにサーバーはあるので、
          <br class="pc" />
          初めてこの単語を聞いた人は、いまいちピンと来ないかもしれませんが、
          <br class="pc" />
          サーバーの管理が開発者の手から離れ、使った分だけ課金される、みたいなニュアンスになります。
        </p>
        <p class="text">
          Lambdaだけを使うケースは稀で、他のサービスと連携することが多いです。
          <br class="pc" />
          S3に画像が保存されたタイミングでリサイズ処理をしたり、
          <br class="pc" />
          API Gatewayのバックエンドとして設定したり、使いみちは色々。
        </p>
        <p class="text">
          <ExternalLink href="https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/runtimes-custom.html"
            >カスタムランタイム</ExternalLink
          >を使用すれば好きな言語で実装できますが、
          <br class="pc" />
          ネイティブでは、Java、Go、PowerShell、Node.js、C#、Python、Rubyをサポートしています。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-small"><span>リクエスト数</span></h3>
        <p class="text">Lambdaへのリクエスト数を入力してください。</p>
        <p class="text">{{ freeRequest }}件のリクエストは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>メモリ</span></h3>
        <p class="text">
          Lambdaに割り当てたメモリと、実行された秒数をかけた値を入力してください。<br />
          {{
            freeMemory
          }}GB秒までは無料です。GB秒というのが直感的にわかりにくいですが、2048MB割り当てた関数を86,400秒実行した場合、下記のようになります
        </p>
        <pre>(2048 / 1024) * 86400 = 172,800GB秒</pre>
      </section>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'
import { addComma } from '@/lib/price'

export default {
  name: 'ServiceLambda',
  components: { ServiceTemplate, ServicePartsAccordion, ServicePartsCondition, ExternalLink },
  head() {
    return meta.lambda
  },
  computed: {
    priceLambda() {
      return this.$store.state.price.lambda
    },
    freeRequest() {
      if (!this.priceLambda) {
        return ''
      }

      return addComma(this.priceLambda.request.free)
    },
    freeMemory() {
      if (!this.priceLambda) {
        return ''
      }

      return addComma(this.priceLambda.memory.free)
    }
  }
}
</script>
