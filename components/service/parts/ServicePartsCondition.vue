<template>
  <ServicePartsAccordion title="計算の前提">
    <ul class="list">
      <li class="list-item">東京リージョン</li>
      <li class="list-item">ひと月は30.5日</li>
      <slot />
    </ul>
  </ServicePartsAccordion>
</template>

<script>
import ServicePartsAccordion from '@/components/service/parts/ServicePartsAccordion'

export default {
  components: {
    ServicePartsAccordion
  }
}
</script>
