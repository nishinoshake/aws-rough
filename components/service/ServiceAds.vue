<template>
  <section class="section">
    <h2 class="heading">Google AdSenseの広告</h2>
    <div class="section-content">
      <div class="ad">
        <p class="ad-desc">
          このエリアに興味がある広告が表示された際にクリックすると、当サイトの制作者にお金が入る仕組みになっています。それがなんか嫌だなぁという方は、間違ってクリックしないように注意してください。
        </p>
        <div class="ad-item">
          <no-ssr>
            <adsbygoogle />
          </no-ssr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceAds'
}
</script>
