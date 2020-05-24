<template>
  <ul class="list">
    <li class="list-item">東京リージョン</li>
    <li class="list-item">ひと月は30.5日</li>
    <li class="list-item">{{ usdjpy }}円/ドル（毎朝10時更新）</li>
    <slot />
  </ul>
</template>

<script>
export default {
  computed: {
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    }
  }
}
</script>
