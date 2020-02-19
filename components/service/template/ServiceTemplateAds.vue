<template>
  <div class="section">
    <div class="section-box">
      <h2 class="title-daitan"><span>広告</span></h2>
      <div class="service-ad">
        <div class="service-ad-frame">
          <no-ssr>
            <Adsense data-ad-client="ca-pub-7912727364342998"></Adsense>
          </no-ssr>
        </div>
        <p>※収益でRed Bullを買います</p>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServiceTemplateAds',
  components: { ExternalLink }
}
</script>
