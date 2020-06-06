<template>
  <footer class="footer" id="footer">
    <div class="footer-inner">
      <ul class="footer-list">
        <li class="footer-item">
          <nuxt-link to="/about/" class="footer-link">ABOUT</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'LayoutFooter',
  components: { ExternalLink },
  data() {
    return {
      label: ''
    }
  },
  mounted() {
    this.updateLabel()
  },
  methods: {
    updateLabel() {
      const words = ['速さは最高のUX', '飾るな、削れ']
      const index = Math.floor(Math.random() * words.length)

      this.label = words[index]
    }
  }
}
</script>
