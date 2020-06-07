<template>
  <div class="landing">
    <p class="landing-please">
      ようこそ、トップページです。<br />AWSの料金をざっくり計算できるサイトがあります。<br />料金が気になるサービスをメニューから選んでください。
    </p>
  </div>
</template>

<script>
import meta from '@/config/meta'

export default {
  name: 'LandingIndex',
  head() {
    return meta.index
  }
}
</script>
