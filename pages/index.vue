<template>
  <div class="landing">
    <div class="landing-ball">
      <button
        type="button"
        class="landing-ball-body"
        aria-label="本当の玉"
        :style="`transform: scale(${scale})`"
        @mouseenter="handleMouseenter"
        @click="handleClick"
      ></button>
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
      words: ['これは 玉 です'],
      wordIndex: null,
      timer: null,
      isStarted: false,
      scale: 1
    }
  },
  computed: {
    label() {
      if (this.wordIndex !== null) {
        return this.words[this.wordIndex]
      }

      return ''
    }
  },
  beforeDestroy() {
    if (this.timer) {
      this.timer = null
    }
  },
  methods: {
    start() {
      if (this.isStarted) {
        return
      }

      this.isStarted = true
      this.wordIndex = 0

      this.timer = setInterval(() => {
        this.wordIndex = this.wordIndex === this.words.length - 1 ? 0 : this.wordIndex + 1
      }, 2000)
    },
    handleMouseenter() {
      this.start()
    },
    handleClick() {
      this.start()

      // this.scale = this.scale <= 0.1 ? 1 : this.scale - 0.05
    }
  }
}
</script>
