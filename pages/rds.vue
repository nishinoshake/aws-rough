<template>
  <ServiceTemplate service-name="rds">
    <template v-slot:zakuri>
      <p class="text">フルマネージド型のリレーショナルデータベース。</p>
      <p class="text">
        EC2でもリレーショナルデータベースは構築できますが、RDSを使うことで、バックアップやパッチの適用などの作業を自動化できます。マルチAZによる冗長化や、ポイントインタイムリカバリなどの機能は、特にありがたいです。
      </p>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="small-heading"><span>DBエンジン</span></h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/rds/#Amazon_RDS_データベースエンジン"
            >データベースエンジン</ExternalLink
          >を選択してください。当サイトでは、MySQL/MariaDB/PostgreSQLの中からお選びいただけます。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>インスタンス</span></h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/rds/instance-types/">インスタンスタイプ</ExternalLink
          >を選択してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>AZ</span></h3>
        <p class="text">
          シンプルなSingle-AZか、冗長構成の<ExternalLink href="https://aws.amazon.com/jp/rds/details/multi-az/"
            >Multi-AZ</ExternalLink
          >のどちらかを選択してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>ストレージ</span></h3>
        <p class="text">RDSに割り当てるストレージの容量をGB単位で入力してください。</p>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="small-heading"><span>ライセンスがややこしいデータベース</span></h3>
        <p class="text">
          選択できるDBエンジンは、MySQL/MariaDB/PostgreSQLに絞っています。>OracleとMicrosoft SQL
          Serverは、ライセンスまわりがややこしかったので除外しています。すみません。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>リザーブドインスタンスなど</span></h3>
        <p class="text">
          インスタンスの支払い方法は、オンデマンドインスタンスを前提にしています。>オンデマンドインスタンス以外にも、あらかじめ予約することで安く利用できるリザーブドインスタンスが用意されています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>選択肢にないインスタンスタイプ</span></h3>
        <p class="text">
          インスタンスタイプは、よく使いそうなものに絞っています。>その他のインスタンスタイプについては、<ExternalLink
            href="https://aws.amazon.com/jp/rds/instance-types/"
            >公式サイト</ExternalLink
          >でご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>汎用SSD以外のストレージ</span></h3>
        <p class="text">
          ストレージはEBSの汎用SSDを前提にしています。汎用SSD以外にもパフォーマンスが高い「プロビジョンド IOPS
          SSD」や、安価な「マグネティック」なども用意されています。
        </p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>バックアップストレージ</span></h3>
        <p class="text">バックアップストレージを利用する場合は追加料金がかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="small-heading"><span>データ転送</span></h3>
        <p class="text">
          RDSからインターネットや別リージョンへデータを転送する場合は転送料がかかります。>同一AZ内のRDSとEC2のインスタンス間のデータ転送や、Multi-AZのレプリケーションを目的とするデータ転送は無料です。
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

export default {
  name: 'ServiceRDS',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.rds
  }
}
</script>
