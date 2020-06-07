<template>
  <div class="landing">
    <div class="landing-ball">
      <button type="button" class="landing-ball-body" aria-label="本当の玉" @mouseenter="start" @click="start"></button>
      <p class="landing-ball-caption">{{ label }}</p>
    </div>
  </div>
</template>

<script>
import meta from '@/config/meta'

export default {
  name: 'LandingIndex',
  head() {
    return meta.index
  },
  data() {
    return {
      label: '',
      timer: null,
      isStarted: false
    }
  },
  methods: {
    start() {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      this.label = 'これは 玉 です'

      this.timer = setTimeout(() => {
        this.label = 'メニューからサービスを選択してください'
        this.timer = null
      }, 1800)
    }
  }
}
</script>
