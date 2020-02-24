<template>
  <div class="section">
    <h2 class="title-section"><span>広告収入でRed Bullを買います</span></h2>
    <div class="service-ad">
      <div class="service-ad-frame">
        <no-ssr>
          <Adsense data-ad-client="ca-pub-7912727364342998"></Adsense>
        </no-ssr>
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
