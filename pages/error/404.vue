<template>
  <section class="error-notfound">
    <h1 class="error-title title-page">Not Found</h1>
    <p class="error-text">ソンナページハ、<br>ソンザイシマセン。<br>モシカシテ、<ExternalLink href="http://kaela-web.com">キムラカエラ</ExternalLink>？</p>
  </section>
</template>

<script>
import meta from '@/config/meta'
import ExternalLink from '@/components/text/ExternalLink'

export default {
  components: { ExternalLink },
  head() {
    return meta.error_404
  }
}
</script>
