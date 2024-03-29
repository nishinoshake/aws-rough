<template>
  <div :class="['accordion', { 'is-active': isActive }]">
    <button
      class="accordion-heading"
      :id="`accordion-trigger-${slug}`"
      :aria-controls="`accordion-content-${slug}`"
      :aria-expanded="ariaExpanded"
      @click="toggle"
    >
      {{ title }}
      <span class="accordion-heading-icon"></span>
    </button>
    <div
      class="accordion-frame"
      :style="defaultFrameStyle"
      :id="`accordion-content-${slug}`"
      :aria-labelledby="`accordion-trigger-${slug}`"
      ref="frame"
    >
      <div class="accordion-inside" ref="inside">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'Accordion',
  props: {
    title: String,
    slug: String,
    forceOpen: Boolean
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    ariaExpanded() {
      return this.isActive ? 'true' : 'false'
    },
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
