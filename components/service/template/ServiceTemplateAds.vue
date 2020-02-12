<template>
  <div class="section">
    <div class="section-box">
      <p class="title-daitan"><span>広告</span></p>
      <div class="service-ad">
        <p>
          このエリアには<ExternalLink href="https://www.google.com/intl/ja_jp/adsense/start/"
            >Googleアドセンス</ExternalLink
          >の広告が表示されます。興味がある広告が表示されたときに、クリックして内容をご確認いただくと、サイト運営者の収益になります。そのお金で<ExternalLink
            href="https://www.redbull.com/jp-ja/energydrink"
            >Red Bull</ExternalLink
          >を買います。
        </p>
        <div class="service-ad-frame">
          <no-ssr>
            <Adsense data-ad-client="ca-pub-7912727364342998"></Adsense>
          </no-ssr>
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
