<template>
  <ServiceTemplate service-name="aurora">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsCondition></ServicePartsCondition>

        <ServicePartsAccordion title="入力項目の補足" :force-open="true">
          <section class="section-child">
            <h3 class="title-small"><span>互換DB</span></h3>
            <p class="text">MySQL/PostgreSQLから選択してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>インスタンス</span></h3>
            <p class="text">
              利用する<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/"
                >インスタンスタイプ</ExternalLink
              >を選択してください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>ストレージ</span></h3>
            <p class="text">利用する予定のストレージの容量をGB単位で入力してください。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>I/O</span></h3>
            <p class="text">データベースに対するリクエストの件数を入力してください。</p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsAccordion title="対象外のもの" :force-open="true">
          <section class="section-child">
            <h3 class="title-small"><span>リザーブドインスタンスなど</span></h3>
            <p class="text">インスタンスの支払い方法は、オンデマンドインスタンスを前提にしています。</p>
            <p class="text">
              オンデマンドインスタンス以外にも、あらかじめ予約することで安く利用できるリザーブドインスタンスが用意されています。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>選択肢にないインスタンスタイプ</span></h3>
            <p class="text">
              選択肢にないインスタンスタイプは、<ExternalLink href="https://aws.amazon.com/jp/rds/aurora/pricing/"
                >公式の料金表</ExternalLink
              >でご確認ください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>バックアップストレージ</span></h3>
            <p class="text">バックアップストレージを利用する場合は追加料金がかかります。</p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>データ転送</span></h3>
            <p class="text">
              RDSからインターネットや別リージョンへデータを転送する場合は転送料がかかります。同一AZ内のRDSとEC2のインスタンス間のデータ転送や、Multi-AZのレプリケーションを目的とするデータ転送は無料です。
            </p>
          </section>
        </ServicePartsAccordion>
      </div>
    </template>

    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">クラウドに最適化されたリレーショナルデータベース。</p>
        <p class="text">
          高いパフォーマンスと耐久性に加え、MySQLおよびPostgreSQLとの互換性があります。
          <br class="pc" />
          パフォーマンスの魅力は大きいですが、ストレージが自動的に拡張してくれるところも嬉しいです。
        </p>
        <p class="text">
          立ち位置としては、RDSで選択できるデータベースエンジンのひとつですが、
          <br class="pc" />
          料金の算出時にデータのI/Oを考慮する必要があったのでページを分けています。
        </p>
      </div>
    </template>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'
import ServicePartsCondition from '@/components/service/parts/ServicePartsCondition'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceAurora',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
  head() {
    return meta.aurora
  }
}
</script>
