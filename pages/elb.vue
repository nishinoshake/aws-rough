<template>
  <ServiceTemplate service-name="elb">
    <section class="section">
      <h2 class="title">概要と料金</h2>
      <p class="text">複数のEC2インスタンスにトラフィックを分散するサービスです。</p>
      <p class="text">利用する台数とデータ転送量によって料金が決まります。</p>
    </section>
    <section class="section">
      <h2 class="title">入力項目の補足</h2>
      <section class="section-child">
        <h3 class="title-small">台数</h3>
        <p class="text">利用するロードバランサーの台数を入力してください。</p>
      </section>
      <section class="section-child">
        <h3 class="title-small">データ転送量</h3>
        <p class="text">ELBで処理されるデータ量をGB単位で入力してください。</p>
        <p class="text">Webサイトを例にすると、ページあたりの容量が2MBで、月間10万PVの場合、下記のようになります。</p>
        <pre>2 * 100000 / 1024 ≒ 195GB</pre>
      </section>
    </section>
    <ServicePartsExclude>
      <section class="section-child">
        <h3 class="title-small">Application Load Balancerなどを利用する場合</h3>
        <p class="text">ELBには、最も歴史のある<ExternalLink href="https://docs.aws.amazon.com/ja_jp/elasticloadbalancing/latest/classic/introduction.html">Classic Load Balancer</ExternalLink>以外にも、<ExternalLink href="https://docs.aws.amazon.com/ja_jp/elasticloadbalancing/latest/application/introduction.html">Application Load Balancer</ExternalLink>や<ExternalLink href="https://docs.aws.amazon.com/ja_jp/elasticloadbalancing/latest/network/introduction.html">Network Load Balancer</ExternalLink>が用意されています。現状は、CLBをのみを対象にしていますが、ALBを利用するケースは多いと思うので、近いうちに対応予定です。</p>
      </section>
    </ServicePartsExclude>
  </ServiceTemplate>
</template>

<script>
import ServiceTemplate from '@/components/service/template/ServiceTemplate'
import ServicePartsExclude from '@/components/service/parts/ServicePartsExclude'
import ExternalLink from '@/components/text/ExternalLink'
import meta from '@/config/meta'

export default {
  name: 'ServiceELB',
  components: { ServiceTemplate, ServicePartsExclude, ExternalLink },
  head() {
    return meta.elb
  }
}
</script>
