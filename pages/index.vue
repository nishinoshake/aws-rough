<template>
  <article>
    <h1 class="large-heading large-heading-ja">AWSの料金を、<br class="sp" />日本円でざっくり</h1>
    <div class="section-list">
      <section class="section">
        <div class="section-content">
          <ul class="landing-service-list">
            <li v-for="service in services" :key="service.key" class="landing-service-item">
              <nuxt-link :class="`landing-service-link mod-${service.color}`" :to="service.href">
                <div class="landing-service-inner">
                  <ServiceIcon :name="service.key" class="landing-service-icon" />
                  <span class="landing-service-body">
                    <span class="landing-service-name">{{ service.name }}</span>
                    <span class="landing-service-desc">{{ service.description }}</span>
                  </span>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </section>
      <section class="section">
        <h2 class="heading">公式の料金計算ツールではありません</h2>
        <div class="section-content">
          <p class="text">本サイトは公式のものではありません。</p>
          <p class="text">
            公式の料金計算ツールには、2018年にリリースされた<ExternalLink href="https://calculator.aws"
              >AWS Pricing Calculator</ExternalLink
            >と、2007年にリリースされた歴史のある<ExternalLink href="https://calculator.s3.amazonaws.com/index.html"
              >SIMPLE MONTHLY CALCULATOR</ExternalLink
            >があります。本サイトは、公式のツールから入力項目に絞ってシンプルにしたものです。
          </p>
          <p class="text">
            そのため、AWSの料金をざっくり知りたいときには便利ですが、正確な料金を知りたい場合は、公式の料金計算ツールを使用してください。
          </p>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import mokuji from '@/config/service/mokuji'
import serviceConfig from '@/config/service'
import meta from '@/config/meta'
import ServiceAds from '@/components/service/ServiceAds'
import ServiceIcon from '@/components/ServiceIcon'
import ExternalLink from '@/components/ExternalLink'
import { parseInstance } from '@/lib/service'
import { MONTHLY_HOURS } from '@/config/constants'
import { addComma } from '@/lib/price'

export default {
  name: 'LandingIndex',
  components: { ServiceIcon, ServiceAds, ExternalLink },
  head() {
    return meta.index
  },
  data() {
    return {
      services: mokuji
    }
  },
  computed: {
    serviceKeys() {
      return mokuji.map(service => service.key)
    },
    usdjpy() {
      return this.$store.state.fx ? this.$store.state.fx.usdjpy : null
    },
    priceEc2Gp2() {
      return this.$store.state.price.ebs.gp2.price
    },
    priceEc2M5LargeInstance() {
      const instance = parseInstance('m5.large', this.$store.state.price.ec2.instance)

      return instance.price
    },
    priceEc2T3MicroInstance() {
      const instance = parseInstance('t3.micro', this.$store.state.price.ec2.instance)

      return instance.price
    },
    priceEc2M5LargeMonthlyJpy() {
      return addComma(Math.floor(this.priceEc2M5LargeInstance * MONTHLY_HOURS * this.usdjpy * 2))
    },
    priceEc2T3MicroMonthlyUsd() {
      return Math.floor(10 * (this.priceEc2T3MicroInstance * MONTHLY_HOURS + this.priceEc2Gp2 * 20)) / 10
    },
    priceEc2T3MicroMonthlyJpy() {
      return addComma(Math.floor((this.priceEc2T3MicroInstance * MONTHLY_HOURS + this.priceEc2Gp2 * 20) * this.usdjpy))
    },
    priceRdsGp2() {
      return this.$store.state.price.rds.storage.gp2.price
    },
    priceRdsT3MicroInstance() {
      const instance = parseInstance('db.t3.micro', this.$store.state.price.rds.instance.MySQL)

      return instance.price
    },
    priceRdsT3MicroMonthlyUsd() {
      return Math.floor(10 * (this.priceRdsT3MicroInstance * MONTHLY_HOURS + this.priceRdsGp2 * 20)) / 10
    },
    priceRdsT3MicroMonthlyJpy() {
      return addComma(Math.floor((this.priceRdsT3MicroInstance * MONTHLY_HOURS + this.priceRdsGp2 * 20) * this.usdjpy))
    },
    priceSecondRangeTransfer() {
      return this.$store.state.price.transfer.out.priceRange[1].price
    },
    priceTransferMonthlyUsd() {
      return (195 - 1) * this.priceSecondRangeTransfer
    },
    priceTransferMonthlyJpy() {
      return addComma(Math.floor((195 - 1) * this.priceSecondRangeTransfer * this.usdjpy))
    }
  },
  methods: {
    handleClickMonthlyPrice() {
      this.$store.commit('SET_INITIAL_TABLES', { serviceConfig })
      this.$store.commit('UPDATE', { serviceKey: 'ec2', index: 0, columnKey: 'instance', value: 'm5.large' })
      this.$store.commit('UPDATE', { serviceKey: 'ec2', index: 0, columnKey: 'unit', value: '2' })

      this.$router.push('/ec2/')
    }
  }
}
</script>
