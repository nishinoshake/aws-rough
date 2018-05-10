<template>
  <span
    class="detail-title-copy"
    ref="copy"
    :data-clipboard-text="copyText"
    @click="handleCopy"
  >{{ isCopied ? 'Done' : 'Copy' }}</span>
</template>

<script>
import ClipBoard from 'clipboard'
import store from '@/stores'
import { formatPrice } from '@/stores/price'

export default {
  name: 'DetailCopy',
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isCopied: false
    }
  },
  computed: {
    total() {
      return store.state.total.jpy
    },
    copyText() {
      return this.services
        .map(service => `${service.name} ${this.yen(service.total)}円`)
        .concat(`合計 ${this.yen(this.total)}円`)
        .join('\n')
    }
  },
  mounted() {
    new ClipBoard(this.$refs.copy)
  },
  beforeDestroy() {
    this.clearCopied()
  },
  timerId: null,
  methods: {
    handleCopy() {
      this.isCopied = true
      this.timerId = setTimeout(() => {
        this.clearCopied()
      }, 3000)
    },
    clearCopied() {
      if (this.isCopied) {
        this.isCopied = false
      }

      if (this.timerId) {
        clearTimeout(this.timerId)
        this.timerId = null
      }
    },
    yen(price) {
      return formatPrice(price)
    }
  }
}
</script>
