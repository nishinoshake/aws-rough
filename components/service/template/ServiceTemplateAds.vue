<template>
  <section class="section">
    <h2 class="title-section" id="ad"><a href="#ad">Google AdSenseの広告</a></h2>
    <div class="service-ad">
      <p class="service-ad-desc">
        このエリアに興味がある広告が表示された際にクリックすると、当サイトの制作者にお金が入る仕組みになっています。それがなんか嫌だなぁという方は、間違ってクリックしないように注意してください。
      </p>
      <!-- <div class="service-ad-item">
        <no-ssr>
          <Adsense data-ad-client="ca-pub-7912727364342998"></Adsense>
        </no-ssr>
      </div> -->
    </div>
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServiceTemplateAds',
  components: { ExternalLink }
}
</script>
