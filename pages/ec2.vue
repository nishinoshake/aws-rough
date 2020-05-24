<template>
  <ServiceTemplate service-name="ec2">
    <template v-slot:zakuri>
      <div class="section-child">
        <p class="text">
          なんでもできる仮想サーバー。
        </p>
        <p class="text">
          スペックやOSなどを指定するだけで、サーバーをポコポコ立てられます。
          <br class="pc" />
          OSより上が自由なので、好きなミドルウェアをいれて、やりたいようにやれますが、そのぶん責任も大きいです。
        </p>
        <p class="text">
          自由度が高いので、ついEC2で頑張りたくなってしまいますが、
          <br class="pc" />
          上手くやれるサービスが他にある場合は、そっちを使ったほうが楽をできます。
          <br class="pc" />
          データベースは<nuxt-link class="text-link" to="/rds/">RDS</nuxt-link>に。メールは<nuxt-link
            class="text-link"
            to="/ses/"
            >SES</nuxt-link
          >に。そんな感じで。
        </p>
        <p class="text">
          他のサービスを検討して、消去法でEC2が残った場合に使う、ぐらいが丁度いい塩梅かと。
        </p>
      </div>
    </template>

    <template v-slot:condition>
      <li class="list-item">オンデマンドインスタンス</li>
      <li class="list-item">OSはAmazon Linux</li>
      <li class="list-item">EBSは汎用SSD</li>
    </template>

    <template v-slot:help>
      <section class="section-child">
        <h3 class="title-small"><span>インスタンス</span></h3>
        <p class="text">
          利用する<ExternalLink href="https://aws.amazon.com/jp/ec2/instance-types/">インスタンスタイプ</ExternalLink
          >を選択してください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>データ転送量</span></h3>
        <p class="text">
          EC2からインターネットへ送信されるデータ量をGB単位で入力してください。<br />Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。
        </p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
    </template>

    <template v-slot:disclaimer>
      <section class="section-child">
        <h3 class="title-small"><span>ライセンス費用が発生するOS</span></h3>
        <p class="text">
          OSはAmazon Linuxを前提にしているので、RHELやWindows ServerなどのOSを利用する場合は、価格が高くなります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>リザーブドインスタンスなど</span></h3>
        <p class="text">
          オンデマンドインスタンスを前提にしているので、あらかじめ予約することで安く利用できる<ExternalLink
            href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-reserved-instances.html"
            >リザーブドインスタンス</ExternalLink
          >や、余っているインスタンスを安く利用できるかもしれない<ExternalLink
            href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-spot-instances.html"
            >スポットインスタンス</ExternalLink
          >などを利用する場合は、もっと安くなります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>選択肢にないインスタンスタイプ</span></h3>
        <p class="text">
          インスタンスタイプは、よく使いそうなものに絞っています。
          <br class="pc" />
          その他のインスタンスタイプについては、<ExternalLink href="https://aws.amazon.com/jp/ec2/instance-types/"
            >公式サイト</ExternalLink
          >でご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>汎用SSD以外のストレージ</span></h3>
        <p class="text">
          EBSは汎用SSDを前提にしていますが、パフォーマンスが高い「プロビジョンド IOPS
          SSD」や、安価な「マグネティック」なども用意されています。詳しくは、<ExternalLink
            href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/EBSVolumeTypes.html"
            >Amazon EBS ボリュームの種類</ExternalLink
          >をご確認ください。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>リージョン間のデータ転送量など</span></h3>
        <p class="text">
          単価は安いですが、インターネット向けのデータ転送量以外にも、リージョン間や別のVPCなどへのデータ転送量もかかります。
        </p>
      </section>
      <section class="section-child">
        <h3 class="title-small"><span>Elastic IP</span></h3>
        <p class="text">
          インスタンスに割り当てるElastic IPがひとつの場合は無料ですが、追加のElastic
          IPや利用されていないものには小額ですが料金が発生します。
        </p>
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

export default {
  name: 'ServiceEC2',
  components: {
    ServiceTemplate,
    ServicePartsAccordion,
    ServicePartsCondition,
    ExternalLink
  },
  head() {
    return meta.ec2
  }
}
</script>
