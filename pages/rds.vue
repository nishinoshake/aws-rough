<template>
  <ServiceTemplate service-name="rds">
    <template v-slot:aside>
      <div class="service-summary accordion-list">
        <ServicePartsCondition></ServicePartsCondition>

        <ServicePartsAccordion title="入力項目の補足" :force-open="true">
          <section class="section-child">
            <h3 class="title-small"><span>DBエンジン</span></h3>
            <p class="text">
              利用する<ExternalLink href="https://aws.amazon.com/jp/rds/#Amazon_RDS_データベースエンジン"
                >データベースエンジン</ExternalLink
              >を選択してください。<br />当サイトでは、MySQL/MariaDB/PostgreSQLの中からお選びいただけます。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>インスタンス</span></h3>
            <p class="text">
              利用する<ExternalLink href="https://aws.amazon.com/jp/rds/instance-types/"
                >インスタンスタイプ</ExternalLink
              >を選択してください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>AZ</span></h3>
            <p class="text">
              シンプルなSingle-AZか、冗長構成の<ExternalLink href="https://aws.amazon.com/jp/rds/details/multi-az/"
                >Multi-AZ</ExternalLink
              >のどちらかを選択してください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>ストレージ</span></h3>
            <p class="text">RDSに割り当てるストレージの容量をGB単位で入力してください。</p>
          </section>
        </ServicePartsAccordion>

        <ServicePartsAccordion title="対象外のもの" :force-open="true">
          <section class="section-child">
            <h3 class="title-small"><span>ライセンスがややこしいデータベース</span></h3>
            <p class="text">
              選択できるDBエンジンは、MySQL/MariaDB/PostgreSQLに絞っています。<br />OracleとMicrosoft SQL
              Serverは、ライセンスまわりがややこしかったので除外しています。すみません。
            </p>
          </section>
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
              インスタンスタイプは、よく使いそうなものに絞っています。<br />その他のインスタンスタイプについては、<ExternalLink
                href="https://aws.amazon.com/jp/rds/instance-types/"
                >公式サイト</ExternalLink
              >でご確認ください。
            </p>
          </section>
          <section class="section-child">
            <h3 class="title-small"><span>汎用SSD以外のストレージ</span></h3>
            <p class="text">ストレージはEBSの汎用SSDを前提にしています。</p>
            <p class="text">
              汎用SSD以外にもパフォーマンスが高い「プロビジョンド IOPS
              SSD」や、安価な「マグネティック」なども用意されています。
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
        <p class="text">フルマネージド型のリレーショナルデータベース。</p>
        <p class="text">
          EC2でもリレーショナルデータベースは構築できますが、
          <br class="pc" />
          RDSを使うことで、バックアップやパッチの適用などの作業を自動化できます。
          <br class="pc" />
          マルチAZによる冗長化や、ポイントインタイムリカバリなどの機能は、特にありがたいです。
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
