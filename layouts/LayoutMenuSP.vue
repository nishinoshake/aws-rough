<template>
  <div class="menu-select">
    <label for="menu-sp">MENU</label>
    <select
      name="menu-sp"
      id="menu-sp"
      ref="select"
      aria-label="サービスを選択"
      @input="e => changeService(e.target.value)"
    >
      <option value="/">Home</option>
      <option
        v-for="service in services"
        :key="service.key"
        :value="`/${service.key}/`"
      >{{ service.name }}</option>
      <option value="/detail/">内訳を見るぞ</option>
    </select>
  </div>
</template>

<script>
import serviceConfig from '@/config/service/mokuji'

export default {
  name: 'LayoutMenuSP',
  data() {
    return {
      services: serviceConfig
    }
  },
  methods: {
    changeService(path) {
      this.$router.push(path)
    }
  }
}
</script>
