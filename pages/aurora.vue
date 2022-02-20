<template>
  <ServiceArticle service-name="aurora">
    <template v-slot:zakuri>
      <p class="text">クラウドに最適化されたリレーショナルデータベース。</p>
      <p class="text">
        高いパフォーマンスと耐久性に加え、MySQLおよびPostgreSQLとの互換性があります。パフォーマンスの魅力は大きいですが、ストレージが自動的に拡張してくれるところも嬉しいです。立ち位置としては、RDSで選択できるデータベースエンジンのひとつですが、料金の算出時にデータのI/Oを考慮する必要があったのでページを分けています。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>互換DB</span></h3>
        <p class="text">MySQL/PostgreSQLから選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>インスタンス</span></h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/">インスタンスタイプ</ExternalLink
          >を選択してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ストレージ</span></h3>
        <p class="text">利用する予定のストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>I/O</span></h3>
        <p class="text">データベースに対するリクエストの件数を入力してください。</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>リザーブドインスタンスなど</span></h3>
        <p class="text">
          インスタンスの支払い方法は、オンデマンドインスタンスを前提にしています。オンデマンドインスタンス以外にも、あらかじめ予約することで安く利用できるリザーブドインスタンスが用意されています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>選択肢にないインスタンスタイプ</span></h3>
        <p class="text">
          選択肢にないインスタンスタイプは、<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/"
            >公式の料金表</ExternalLink
          >でご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>バックアップストレージ</span></h3>
        <p class="text">バックアップストレージを利用する場合は追加料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送</span></h3>
        <p class="text">
          RDSからインターネットや別リージョンへデータを転送する場合は転送料がかかります。同一AZ内のRDSとEC2のインスタンス間のデータ転送や、Multi-AZのレプリケーションを目的とするデータ転送は無料です。
        </p>
      </section>
    </template>
  </ServiceArticle>
</template>

<script>
import ServiceArticle from '@/components/service/ServiceArticle'
import Condition from '@/components/Condition'
import ExternalLink from '@/components/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceAurora',
  components: {
    ServiceArticle,
    Condition,
    ExternalLink
  },
  head() {
    return meta.aurora
  }
}
</script>
