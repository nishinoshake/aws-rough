<template>
  <div :class="['accordion-item', { 'is-active': isActive }]">
    <button class="accordion-title" @click="toggle">
      {{ title }}
      <ArrorwDown />
    </button>
    <div class="accordion-frame" ref="frame" :style="defaultFrameStyle">
      <div class="accordion-inside" ref="inside">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
import ArrorwDown from '@/assets/svg/fa/arrow-down.svg'

export default {
  name: 'ServicePartsAccordion',
  components: {
    ArrorwDown
  },
  props: {
    title: String,
    forceOpen: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    defaultFrameStyle() {
      if (this.forceOpen) {
        return {
          height: 'auto'
        }
      }

      return {}
    }
  },
  watch: {
    forceOpen: {
      handler(val) {
        if (val) {
          this.isActive = true
        }
      },
      immediate: true
    }
  },
  methods: {
    toggle() {
      this.isActive ? this.hide() : this.show()
    },
    show() {
      this.isActive = true

      const height = this.$refs.inside.clientHeight

      anime({
        targets: this.$refs.frame,
        height,
        easing: 'easeOutExpo',
        duration: 500,
        complete: () => {
          this.$refs.frame.style.height = 'auto'
        }
      })
    },
    hide() {
      this.isActive = false

      anime({
        targets: this.$refs.frame,
        height: 0,
        easing: 'easeOutExpo',
        duration: 500,
        complete: () => {
          this.$refs.frame.removeAttribute('style')
        }
      })
    }
  }
}
</script>
