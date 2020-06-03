<template>
  <footer class="footer">
    <div class="footer-bar">
      <nuxt-link to="/" class="footer-bar-link">{{ label }}</nuxt-link>
    </div>
  </footer>
</template>

<script>
import ExternalLink from '@/components/text/ExternalLink'

export default {
  name: 'ServicePartsExclude',
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
