<template>
  <ServiceTemplate service-name="rds">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">リレーショナルデータベースのサービスです。</p>
      <p class="text">主に、インスタンスのスペックや利用する台数、冗長構成、ストレージの容量によって料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">DBエンジン</h3>
        <p class="text">利用する<ExternalLink href="https://aws.amazon.com/jp/rds/#Amazon_RDS_データベースエンジン">データベースエンジン</ExternalLink>を選択してください。<br>当サイトでは、MySQL/MariaDB/PostgreSQLの中からお選びいただけます。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">インスタンス</h3>
        <p class="text">利用する<ExternalLink href="https://aws.amazon.com/jp/rds/instance-types/">インスタンスタイプ</ExternalLink>を選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">AZ</h3>
        <p class="text">シンプルなSingle-AZか、冗長構成の<ExternalLink href="https://aws.amazon.com/jp/rds/details/multi-az/">Multi-AZ</ExternalLink>のどちらかを選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">ストレージ</h3>
        <p class="text">RDSに割り当てるストレージの容量をGB単位で入力してください。</p>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">ライセンスがややこしいデータベース</h3>
        <p class="text">選択できるDBエンジンは、MySQL/MariaDB/PostgreSQLに絞っています。<br>OracleとMicrosoft SQL Serverは、ライセンスまわりがややこしかったので除外しています。すみません。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">リザーブドインスタンスなど</h3>
        <p class="text">インスタンスの支払い方法は、オンデマンドインスタンスを前提にしています。</p>
        <p class="text">オンデマンドインスタンス以外にも、あらかじめ予約することで安く利用できるリザーブドインスタンスが用意されています。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">「汎用」以外のインスタンス</h3>
        <p class="text">インスタンスタイプの選択肢は「汎用」ものに絞っています。</p>
        <p class="text">RDSでは、「汎用」のもの以外にも「メモリ最適化インスタンス」が用意されています。詳しくは、<ExternalLink href="https://aws.amazon.com/jp/rds/mysql/pricing/">公式の料金表</ExternalLink>をご確認ください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">汎用SSD以外のストレージ</h3>
        <p class="text">ストレージはEBSの汎用SSDを前提にしています。</p>
        <p class="text">汎用SSD以外にもパフォーマンスが高い「プロビジョンド IOPS SSD」や、安価な「マグネティック」なども用意されています。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">バックアップストレージ</h3>
        <p class="text">バックアップストレージを利用する場合は追加料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送</h3>
        <p class="text">RDSからインターネットや別リージョンへデータを転送する場合は転送料がかかります。同一AZ内のRDSとEC2のインスタンス間のデータ転送や、Multi-AZのレプリケーションを目的とするデータ転送は無料です。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ServicePartsSpec from '@/components/service/parts/ServicePartsSpec'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceRDS',
  components: {
    ServiceTemplate,
    ServicePartsExclude,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.rds
  }
}
</script>
