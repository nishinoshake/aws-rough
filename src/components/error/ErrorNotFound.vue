<template>
  <section class="error-notfound">
    <h1 class="error-title">Not Found</h1>
    <p class="error-text">ソンナページハ、<br>ソンザイシマセン。<br>モシカシテ、<ExternalLink href="http://kaela-web.com">キムラカエラ</ExternalLink>？</p>
  </section>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ErrorNotFound',
  components: { ExternalLink }
}
</script>
