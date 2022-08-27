<template>
  <section class="section">
    <h2 class="heading">おすすめのサービス</h2>
    <div class="section-content">
      <p class="sponsor-desc">
        インフラのコストに削減余地があるか知りたい。<br class="pc" />
        コストの上昇に課題を感じているが、なかなか手が回らない。<br class="pc" />
        そんな方に、インフラコスト削減代行サービスの CTO Booster がおすすめです。
      </p>
      <ServiceSponsorBanner :page-name="pageName" />
    </div>
  </section>
</template>

<script>
import ServiceSponsorBanner from '@/components/service/ServiceSponsorBanner'

export default {
  name: 'ServiceSponsor',
  components: { ServiceSponsorBanner },
  props: {
    pageName: {
      type: String,
      required: true
    }
  }
}
</script>
