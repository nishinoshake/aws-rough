<template>
  <article class="service">
    <ServiceTemplateTitle :service="service" />
    <ServiceTemplateCalc :service="service" />
    <div class="section">
      <div class="section-box">
        <p class="title-daitan">
          <span>ざっくりわかる{{ service.name }}</span>
        </p>
        <div class="service-zakuri">
          <slot name="zakuri" />
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-box">
        <p class="title-daitan"><span>補足と前提</span></p>
        <slot name="aside" />
      </div>
    </div>
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
  </article>
</template>

<script>
import ServiceTemplateTitle from '@/components/service/template/ServiceTemplateTitle'
import ServiceTemplateCalc from '@/components/service/template/ServiceTemplateCalc'
import ExternalLink from '@/components/text/ExternalLink'
import serviceConfig from '@/config/service'
import { getService } from '@/lib/service'

export default {
  name: 'ServiceTemplate',
  components: { ServiceTemplateCalc, ServiceTemplateTitle, ExternalLink },
  props: {
    serviceName: {
      type: String,
      required: true
    }
  },
  computed: {
    service() {
      return getService(this.serviceName, serviceConfig)
    }
  }
}
</script>
