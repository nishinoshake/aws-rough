<template>
  <footer class="footer" id="footer">
    <div class="footer-container">
      <p class="footer-label">&lt;footer&gt;</p>
    </div>
  </footer>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutFooter',
  data() {
    return {
      services: serviceConfig
    }
  }
}
</script>
