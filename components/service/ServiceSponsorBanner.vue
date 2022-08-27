<template>
  <p class="sponsor-banner">
    <a :href="banner.link" class="sponsor-banner-link" target="_blank" @click="handleClick">
      <img :src="banner.image.url" :alt="banner.image.alt" />
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
        image: {
          url: '',
          alt: ''
        },
        link: '',
        ga: {
          action: ''
        }
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
      if (!this.banner.ga.action || !window.ga) {
        return
      }

      window.ga('send', 'event', 'click', this.banner.ga.action, `page_${this.pageName}`)
    },
    /**
     * Fisher–Yates shuffle
     */
    shuffleArray(arr) {
      const a = [...arr]

      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))

        ;[a[i], a[j]] = [a[j], a[i]]
      }

      return a
    }
  }
}
</script>
