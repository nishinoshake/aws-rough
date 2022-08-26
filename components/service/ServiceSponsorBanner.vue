<template>
  <p class="sponsor-banner">
    <a :href="banner.link" class="sponsor-banner-link" target="_blank" @click="handleClick">
      <img :src="banner.image" alt="" />
    </a>
  </p>
</template>

<script>
export default {
  name: 'ServiceSponsorBanner',
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      banner: {
        image: '',
        link: '',
        ga_action: ''
      }
    }
  },
  mounted() {
    if (this.$store.state.sponsorBanners.length === 0) {
      return
    }

    const shuffledBanners = this.shuffleArray(this.$store.state.sponsorBanners)

    this.banner = shuffledBanners[0]
  },
  methods: {
    handleClick() {
      if (!this.banner.ga_action || !window.ga) {
        return
      }

      window.ga('send', 'event', 'click', this.banner.ga_action, `page_${this.pageName}`)
    },
    shuffleArray(arr) {
      return arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
    }
  }
}
</script>
