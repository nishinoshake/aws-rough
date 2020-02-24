<template>
  <p class="menu-logo">
    <nuxt-link to="/" @click.native="HIDE_MENU"
      ><span class="menu-logo-ja">{{ activeWord }}</span
      ><span class="menu-logo-en">AWS</span></nuxt-link
    >
  </p>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LayoutMenuLogo',
  data() {
    return {
      index: null,
      words: ['ざっくり', 'ザックリ', 'やっぱり', 'さっぱり', 'あっさり', 'こってり']
    }
  },
  computed: {
    activeWord() {
      return this.index === null ? '　' : this.words[this.index]
    }
  },
  mounted() {
    this.index = this.getRandomInt(0, this.words.length)
  },
  methods: {
    ...mapMutations(['HIDE_MENU']),
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    }
  }
}
</script>
