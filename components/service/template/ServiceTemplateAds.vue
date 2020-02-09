<template>
  <div class="section">
    <div class="section-box">
      <p class="title-daitan"><span>広告</span></p>
      <div class="service-ad">
        <p>
          このエリアには<ExternalLink href="https://www.google.com/intl/ja_jp/adsense/start/"
            >Googleアドセンス</ExternalLink
          >の広告が表示されます。この広告をクリックすると、サイト運営者の収益になります。広告を追加するとサイトが重くなるから嫌だなぁと思って避けていたのですが、お金が欲しくなったのでいれました。そのお金で<ExternalLink
            href="https://www.redbull.com/jp-ja/energydrink"
            >Red Bull</ExternalLink
          >を買います。
        </p>
        <div class="service-ad-frame">
          <adsbygoogle />
        </div>
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
