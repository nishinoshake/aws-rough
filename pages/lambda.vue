<template>
  <ServiceArticle service-name="lambda">
    <template v-slot:zakuri>
      <p class="text">
        サーバーレスでコードを実行できるやつ。
      </p>
      <p class="text">
        サーバーレスとはいっても、どこかにサーバーはあるので、サーバーの管理が開発者の手から離れる、ぐらいのニュアンスです。Lambdaだけを使うケースは稀で、他のサービスと連携することが多いです。S3に画像が保存されたタイミングでリサイズ処理をしたり、API
        Gatewayのバックエンドとして設定したり、使いみちは色々。
      </p>
      <p class="text">
        <ExternalLink href="https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/runtimes-custom.html"
          >カスタムランタイム</ExternalLink
        >を使用すれば好きな言語で実装できますが、ネイティブでは、Java、Go、PowerShell、Node.js、C#、Python、Rubyをサポートしています。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>リクエスト数</span></h3>
        <p class="text">Lambdaへのリクエスト数を入力してください。</p>
        <p class="text">{{ freeRequest }}件のリクエストは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>メモリ</span></h3>
        <p class="text">
          Lambdaに割り当てたメモリと、実行された秒数をかけた値を入力してください。{{
            freeMemory
          }}GB秒までは無料です。GB秒というのが直感的にわかりにくいですが、2048MB割り当てた関数を86,400秒実行した場合、下記のようになります
        </p>
        <pre>(2048 / 1024) * 86400 = 172,800GB秒</pre>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Accordion from '@/components/Accordion'
import Condition from '@/components/Condition'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'
import { addComma } from '@/lib/price'

export default {
  name: 'ServiceLambda',
  components: { ServiceArticle, Accordion, Condition, ExternalLink },
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
