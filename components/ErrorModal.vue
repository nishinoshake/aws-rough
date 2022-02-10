<template>
  <transition name="anime-error">
    <div class="error-modal" v-if="isVisible">
      <p class="error-modal-message">{{ message }}</p>
      <button class="error-modal-close" @click="handleClose">閉じる</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ErrorModal',
  props: {
    isVisible: Boolean,
    message: String
  },
  methods: {
    handleClose() {
      this.$store.commit('HIDE_ERROR')
    }
  }
}
</script>
