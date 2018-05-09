<template>
  <transition name="anime-error">
    <div class="error-modal" v-if="error">
      <p class="error-modal-message">
        {{ error }}
        <br>
        すみませんがリロードを・・・
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ErrorModal',
  props: {
    error: String
  }
}
</script>
