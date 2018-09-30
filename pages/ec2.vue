<template>
  <ServiceTemplate service-name="ec2">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">スペックや台数が柔軟に変更できる仮想サーバーです。</p>
      <p class="text">主に、インスタンスのスペックや利用する台数、ストレージのサイズやデータ転送量によって料金が決まります。多くの場合、インスタンスの料金の割合が大きくなると思いますが、データ転送が多い場合は料金がかさむので注意が必要です。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">インスタンス</h3>
        <p class="text">利用する<ExternalLink href="https://aws.amazon.com/jp/ec2/instance-types/">インスタンスタイプ</ExternalLink>を選択してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">ストレージ</h3>
        <p class="text">EC2に割り当てるストレージの容量をGB単位で入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">EC2からインターネットへ送信されるデータ量をGB単位で入力してください。</p>
        <p class="text">Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。</p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">高価なAMIを使う場合</h3>
        <p class="text">インスタンスのOSはAmazon Linuxの利用を前提にしています。</p>
        <p class="text">RHELやWindows ServerなどのOSを利用する場合は、価格が高くなります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">リザーブドインスタンスなど</h3>
        <p class="text">インスタンスの支払い方法は、<ExternalLink href="https://aws.amazon.com/jp/ec2/pricing/on-demand/">オンデマンドインスタンス</ExternalLink>を前提にしています。</p>
        <p class="text"><ExternalLink href="https://aws.amazon.com/jp/ec2/pricing/on-demand/">オンデマンドインスタンス</ExternalLink>以外にも、あらかじめ予約することで安く利用できる<ExternalLink href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/ec2-reserved-instances.html">リザーブドインスタンス</ExternalLink>や、余っているインスタンスを安くできるかもしれない<ExternalLink href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/using-spot-instances.html">スポットインスタンス</ExternalLink>などがあります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">選択肢にないインスタンスタイプ</h3>
        <p class="text">インスタンスタイプは、よく使いそうなものに絞っています。<br>その他のインスタンスタイプについては、<ExternalLink href="https://aws.amazon.com/jp/ec2/instance-types/">公式サイト</ExternalLink>でご確認ください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">汎用SSD以外のストレージ</h3>
        <p class="text">ストレージはEBSの汎用SSDを前提にしています。</p>
        <p class="text">EBSでは、汎用SSD以外にもパフォーマンスが高い「プロビジョンド IOPS SSD」や、安価な「マグネティック」なども用意されています。詳しくは、<ExternalLink href="https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS ボリュームの種類</ExternalLink>をご確認ください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">リージョン間のデータ転送量など</h3>
        <p class="text">単価は安いですが、インターネット向けのデータ転送量以外にも、リージョン間や別のVPCなどへのデータ転送量もかかります。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">Elastic IP</h3>
        <p class="text">インスタンスに割り当てるElastic IPがひとつの場合は無料ですが、追加のElastic IPや利用されていないものには小額ですが料金が発生します。</p>
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
  name: 'ServiceEC2',
  components: {
    ServiceTemplate,
    ServicePartsExclude,
    ServicePartsSpec,
    ExternalLink
  },
  head() {
    return meta.ec2
  }
}
</script>
