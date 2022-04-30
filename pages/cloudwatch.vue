<template>
  <ServiceArticle service-name="cloudwatch">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">監視。</p>
        <p class="text">
          システムの稼働状況を監視したり、アラートを設定したり、ダッシュボードを作成したりできます。他にも、cronのイベントを設定できたり様々な機能があるので、一言で説明するのが難しいです。
        </p>
        <p class="text">
          こんなページを作っておいてあれですが、入力項目が多いうえに対象外にしている項目も多いため、<ExternalLink
            href="https://calculator.aws/#/createCalculator/CloudWatch"
            >公式のツール</ExternalLink
          >の方が使いやすいです。
        </p>
      </div>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>カスタムメトリクス</span></h3>
        <p class="text">
          設定しているカスタムメトリクスの個数を入力してください。<br />
          詳細モニタリングのメトリクスは10個まで無料ですが、このサイトでは考慮していないため、無料分を差し引いた個数を入力してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ダッシュボード</span></h3>
        <p class="text">ダッシュボードの個数を入力してください。{{ free.dashboard }}個までは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ログ（GB）</span></h3>
        <p class="text">取り込んだログのサイズをGB単位で入力してください。{{ free.log }}GBまでは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>GetMetricData（メトリクス数）</span></h3>
        <p class="text">
          GetMetricData/GetInsightRuleReportのAPIでリクエストしたメトリクス数を入力してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>GetMetricWidgetImage（メトリクス数）</span></h3>
        <p class="text">
          GetMetricWidgetImageのAPIでリクエストしたメトリクス数を入力してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>その他のAPI（リクエスト数）</span></h3>
        <p class="text">上記以外のAPIのリクエスト数を入力してください。{{ free.otherApi }}回までは無料です。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>アラーム（標準）</span></h3>
        <p class="text">
          標準のアラームを設定している個数を入力してください。{{ free.standardAlarm }}個までは無料です。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>アラーム（高解像度）</span></h3>
        <p class="text">
          高解像度のアラームを設定している個数を入力してください。
        </p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>カスタムイベント</span></h3>
        <p class="text">
          カスタムイベントを使用すると料金が発生しますが、単価が安かったため対象外にしています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>複合アラーム（Composite Alarm）</span></h3>
        <p class="text">
          アラームを組み合わせて使う「複合アラーム」は対象外です。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ログの保持期間設定</span></h3>
        <p class="text">
          ログの保持期間はデフォルトの無制限を想定しています。ログの保持期間を短く設定した場合は料金が安くなります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>CloudWatch Logs Insights</span></h3>
        <p class="text">
          CloudWatch Logs Insightsによる分析の料金は対象外です。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送送信 (アウト) </span></h3>
        <p class="text">
          CloudWatch Logsから外部へ送信するデータ転送の料金は対象外です。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>その他</span></h3>
        <p class="text">
          Metric Streams/Vended Logs/Contributor Insights/Synthetics/Evidently/RUM
          などのサービスは、気が遠くなったため対象外にしています。
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
    return meta.cloudwatch
  },
  computed: {
    priceCloudWatch() {
      return this.$store.state.price.cloudwatch
    },
    free() {
      return {
        dashboard: addComma(this.priceCloudWatch.dashboard.free),
        log: addComma(this.priceCloudWatch.log.collect.free),
        otherApi: addComma(this.priceCloudWatch.api.other.free),
        standardAlarm: addComma(this.priceCloudWatch.alarm.standard.free)
      }
    }
  }
}
</script>
